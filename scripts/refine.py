"""Reviewed additions; preserve existing citation hashes and never refresh silently."""
import pathlib,json,hashlib
R=pathlib.Path(__file__).resolve().parents[1]; files={f['path']:f for f in json.loads((R/'content/snapshot.json').read_text())}
def ref(p,n=None,count=22):
 ls=files[p]['text'].split('\n');s=next((i for i,l in enumerate(ls) if n and n in l),0)
 if n and not any(n in l for l in ls):raise ValueError(n)
 e=min(len(ls),s+count);return {'path':p,'start':s+1,'end':e,'hash':hashlib.sha256('\n'.join(ls[s:e]).encode()).hexdigest()}
ps=json.loads((R/'content/chapters.json').read_text())
def p(slug):return next(p for p in ps if p['slug']==slug)
def add(slug,title,paragraphs,path,needle=None,table=None):
 page=p(slug)
 if any(s['title']==title for s in page['sections']):return
 s={'title':title,'paragraphs':paragraphs,'refs':[ref(path,needle)]}
 if table:s['table']=table
 page['sections'].append(s)
add('payments','Portal-host caveat in the current implementation',[
 'Confirmed code limitation: createBillingPortal validates the returned HTTPS URL against test.customer.dodopayments.com without branching on the configured environment. Checkout URL validation, by comparison, explicitly selects test and live hosts.',
 'Externally dependent impact: if a live provider portal URL uses a different hostname, this implementation rejects it with INVALID_PORTAL_URL. The repository cannot prove which URL a live customer receives. Treat live portal verification as an unresolved rollout check; do not claim this snapshot has a verified working live portal.'
], 'src/lib/billing/checkout.ts','export async function createBillingPortal',38)
# Correct the previous positional table argument; the excerpt count is pinned explicitly.
s=p('payments')['sections'][-1]
if s['title']=='Portal-host caveat in the current implementation':s.pop('table',None);s['refs']=[ref('src/lib/billing/checkout.ts','export async function createBillingPortal',38),ref('src/lib/billing/dodo.ts','export function billingCheckoutUrl',24)]
add('security-reliability','Admin controls and non-recallable work',[
 'The operator can change a timed plan override, suspend an account and toggle global sending. An override changes app access without mutating provider billing or clearing usage. A Free override requires acknowledgement that billing continues; default overrides expire after 30 days.',
 'Suspension cancels proven-unsubmitted READY work and preserves attempting/uncertain evidence. Unsuspension does not reconnect Gmail or restart cancelled sends. The global sending update takes an exclusive control lock that conflicts with final-claim shared locks: subsequent claims see the disable, but an earlier committed claim cannot be recalled.',
 'Admin changes require fresh identity, predefined reasons and stable UUID request IDs; successful identical replays return an acknowledgement, conflicting reuse fails. Current admission uses the general limiter before business parsing. Older admin-panel guidance describes a superseded ten-successful-mutations limit and rollback behavior; current code uses 20 admissions/minute and admission survives business rollback.'
], 'src/lib/admin/mutations.ts','const actor = await requireAdmin(true)')
p('security-reliability')['sections'][-1]['refs'] += [ref('src/lib/admin/mutations.ts','export function changeOverride',34),ref('src/lib/admin/mutations.ts','export function changeSuspension',35),ref('src/lib/admin/mutations.ts','export function changeControl',38)]
add('security-reliability','Current request budgets',[
 'These rolling-window request budgets are distinct from campaign size, email allowance and Gmail provider throttling. Authentication precedes admission; accepted admissions consume capacity even if later parsing or business work fails. Multiple admin/system budgets are checked atomically in a stable lock order.'
], 'src/lib/rate-limit.ts','export const budgets',table=[['Operation','Budget'],['Checkout','5 / 10 minutes / owner'],['Portal and cancel combined','10 / minute / owner'],['Billing status','30 / minute / owner'],['Campaign submission','10 / minute / owner'],['CSV import','5 / hour / owner'],['Account and template exports combined','2 / hour / owner'],['Admin mutations','20 / minute / actor'],['System control additionally','5 / minute / actor; 10 / minute globally']])
add('walkthrough-deletion','Drain and independent cleanup stages',[
 'The drain constant is 15 minutes. A newly requested deletion can attempt billing-only recovery immediately. After the drain, the full worker attempts content purge, storage deletion and Google revocation independently before its billing stage, so a billing outage does not indefinitely block content erasure.',
 'The credential retention deadline is 30 days from request, with the daily expiry sweep erasing one sweep interval early. Expired or missing revocation proof is recorded rather than fabricated. Completion requires content, storage, billing cancellation and Google revocation markers; unresolved revocation retains a visible tombstone.'
], 'src/lib/deletion-jobs.ts','const drained =')
p('walkthrough-deletion')['sections'][0]['diagram']['code']='flowchart TB\n A[Confirm exact email] --> B[Disable account and persist job]\n B --> C[Immediate billing-only attempt]\n B --> D[After 15-minute drain]\n D --> E[Independent content and storage purge]\n E --> F[Revocation and billing recovery]\n C --> F\n F --> G[Retry unfinished stages]'
add('inngest','Stale scheduling comments',[
 'subscription-maintenance.ts still says scheduled maintenance runs each minute. The registered billingMaintenance caller actually invokes the sweep every four hours. Use the endpoint registration and the scheduler implementation for the current trigger; access is also checked at dispatch/final claim, so the periodic sweep is not the only enforcement point.'
], 'src/lib/subscription-maintenance.ts','// Scheduled maintenance')
# Add targeted evidence to multi-claim sections.
extra={('start-here','Read the current limits'):[('src/lib/validation.ts','export const campaignSchema')],('authentication','Encryption and key rotation'):[('src/lib/token-rotation.ts','export async function rotateTokenPage'),('src/lib/crypto.ts','export function decryptToken')],('sending','Current-limit batch behavior'):[('src/lib/validation.ts','export const campaignSchema'),('src/lib/email-limits.ts',None)],('sending','Personalization and MIME'):[('src/lib/validation.ts','export function renderTemplate'),('src/lib/campaigns.ts','const snapshots =')],('sending','Definite failure versus uncertainty'):[('src/lib/inngest.ts','const credentialPause ='),('src/lib/inngest.ts','const throttle =')],('payments','Durable inbox and reconciliation'):[('src/app/api/webhooks/dodo/route.ts','after(async')],('database','Accounting that survives history deletion'):[('prisma/schema.prisma','model UsageImportEvidence'),('prisma/schema.prisma','model DeliveryReceipt')]}
for (slug,title),refs in extra.items():
 sec=next(s for s in p(slug)['sections'] if s['title']==title)
 for path,needle in refs:
  r=ref(path,needle)
  if not any(x['path']==r['path'] and x['start']==r['start'] and x['end']==r['end'] for x in sec['refs']):sec['refs'].append(r)
(R/'content/chapters.json').write_text(json.dumps(ps,indent=2))
rows=[
 ('account/activity','POST','No application body; current session and same-origin request.','{ ok: true }; 401 for no owner, 403 origin mismatch, 503 activity failure.','Updates bounded last-active evidence, not other users’ activity.'),
 ('account/export','GET','Current session; shared export request budget.','Private no-store JSON attachment; safe failure responses.','Reads explicit owner-scoped projections including usage/subscription state; no refresh token.'),
 ('account/notices','POST','Session plus strict JSON {noticeId: UUID}.','{ dismissed: true }; 401/400 for authentication/input failures.','Dismisses only an owner notice via dismissAccountNotice.'),
 ('auth/[...nextauth]','GET, POST','Auth.js-managed OAuth/session request and callback data.','Framework-generated auth responses.','Delegates to handlers from auth.ts; OAuth entrypoints validate provider identity before a session exists.'),
 ('billing/checkout','POST','Session, origin, checkout budget, body bounded to 4096 characters; paid_monthly and idempotency UUID.','{checkoutUrl} or mapped BillingError; 413/400 for oversize/invalid JSON.','Creates durable attempt/customer/session with provider writes outside short owner transactions.'),
 ('billing/cancel','POST','Session, origin, shared management budget and bounded JSON cancellation input.','Cancellation workflow result or mapped failure.','Calls cancelBillingSubscription and retains provider cancellation recovery state.'),
 ('billing/portal','POST','Session, origin and shared management budget; no application body.','{portalUrl} or mapped failure.','Reads bound customer and calls provider portal creation; current host validation is test-specific.'),
 ('billing/status','GET','Session and status request budget.','Private billing/access observation including configured mode, deadlines and checkout state.','Reads durable observations without trusting return parameters.'),
 ('inngest','GET, POST, PUT','Inngest-managed service request and signature protocol.','serve framework responses.','Registers eight functions. Correct deployed signing/registration is external configuration.'),
 ('quota','GET','Current session.','Private no-store quota snapshot; 401 unauthenticated, 503 unavailable.','Reads fresh gated snapshot or a reduced legacy response including used/limit/notices/accessVersion.'),
 ('resume/upload','POST','Session, same origin, bounded multipart File under key file.','{ok:true}; 401/403/413/400 for denied, too-large or invalid upload.','Development local-storage branch validates PDF and activates it. Production/local-Blob mismatch is rejected by storage helper.'),
 ('resume/blob','POST','User authorization/origin/path for token issuance; SDK-verified service completion branch.','SDK upload-token/callback result; 503 cleanup failure or 400 safe failure.','Issues short-lived constrained PDF tokens; completion discards unavailable unactivated paths. finalizeResume performs normal activation.'),
 ('resume/download','GET','Current session and current owner-selected attachment.','Private PDF attachment; 401/403/404 for missing owner/file/read failure.','Reads only the owner path and supplies nosniff/no-store headers.'),
 ('templates/[id]/export','GET','Session, shared export budget and UUID route parameter.','Private JSON template attachment; 401/404 and limiter errors.','Reads owner/deletion-scoped selected template fields; no mutation of the template.'),
 ('webhooks/dodo','POST','Exact raw body up to 256 KiB plus three Standard Webhooks headers.','{received:true}; 401 signature, 413 size, 409 conflict, 503 config/storage failures.','Verifies signature, commits normalized receipt and schedules after() processing; durable jobs recover later.')]
(R/'content/route-contracts.json').write_text(json.dumps([{'path':'src/app/api/'+p+'/route.ts','methods':m,'inputs':i,'outputs':o,'effects':e} for p,m,i,o,e in rows],indent=2));print('Refined chapter evidence and',len(rows),'API contracts')
