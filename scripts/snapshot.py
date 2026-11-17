"""Read-only source inventory and conservative, line-preserving public snapshot."""
import pathlib,subprocess,hashlib,json,re,datetime
ROOT=pathlib.Path(__file__).resolve().parents[1]; SRC=pathlib.Path('/home/anoop/CODE/mailloop')
def git(*args):return subprocess.check_output(['git',*args],cwd=SRC,text=True).strip()
def sha(b):return hashlib.sha256(b).hexdigest()
files=sorted(set(git('ls-files').splitlines()+git('ls-files','--others','--exclude-standard').splitlines()))
records=[]; snapshot=[]
for path in files:
 p=SRC/path
 if not p.is_file():continue
 # Never read actual environment files or credential stores.
 if (p.name.startswith('.env') and p.name!='.env.example') or re.search(r'(?i)(credentials|\.pem$|\.key$|id_rsa)',path):
  records.append({'path':path,'excluded':'credential boundary'});continue
 b=p.read_bytes(); record={'path':path,'hash':sha(b),'bytes':len(b)}
 try: raw=b.decode('utf8'); assert '\0' not in raw
 except (UnicodeError,AssertionError):
  record.update(excluded='binary asset: '+p.suffix, purpose='visual reference / screenshot' if 'design' in path or 'snapshot' in path else 'font / app icon / public asset');records.append(record);continue
 if path.endswith(('package-lock.json','pnpm-lock.yaml','yarn.lock')):
  record['excluded']='dependency resolution metadata (parsed separately)'; records.append(record);continue
 if path.startswith(('src/generated/','.next/','node_modules/')):
  record['excluded']='generated/vendor/build';records.append(record);continue
 lines=[]
 for line in raw.split('\n'):
  # Sanitize fixture personal addresses, URLs with embedded credentials, key material,
  # and literal secret assignments. Preserve original positions, including blank lines.
  line=re.sub(r'(?i)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}', '[REDACTED_EMAIL]',line)
  line=re.sub(r'(?i)(https?://)[^\s/:]+:[^\s/@]+@',r'\1[REDACTED_CREDENTIAL]@',line)
  line=re.sub(r'(?i)((?:[\w]*(?:secret|password|api_?key|access_?token|refresh_?token|private_?key)[\w]*)["\']?\s*[:=]\s*)(["\'`])[^"\'`\n]+\2',r'\1\2[REDACTED_SECRET]\2',line)
  line=re.sub(r'(?i)^(\s*[A-Z][A-Z0-9_]*(?:TOKEN|SECRET|PASSWORD|KEY|DATABASE_URL)[A-Z0-9_]*\s*=).*',r'\1[REDACTED_SECRET]',line)
  lines.append(line)
 safe='\n'.join(lines);record.update(lines=len(lines),read='complete byte/text scan',redacted=safe!=raw)
 snapshot.append({'path':path,'text':safe,'hash':sha(safe.encode()),'originalHash':sha(b),'lines':len(lines)})
 records.append(record)
meta={'commit':git('rev-parse','HEAD'),'date':git('show','-s','--format=%cI','HEAD'),'capturedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':git('status','--porcelain'),'files':records,'history':git('log','-12','--format=%h %s')}
(ROOT/'content/snapshot.json').write_text(json.dumps(snapshot,indent=2));(ROOT/'content/provenance.json').write_text(json.dumps(meta,indent=2))
pkg=json.loads((SRC/'package.json').read_text()); versions={}
for name,version in {**pkg['dependencies'],**pkg['devDependencies']}.items():
 try: installed=json.loads((SRC/'node_modules'/name/'package.json').read_text())['version']
 except:installed='not installed'
 versions[name]={'declared':version,'installed':installed}
(ROOT/'content/dependencies.json').write_text(json.dumps(versions,indent=2))
notes=ROOT/'NOTES.md'
notes.write_text(notes.read_text()+'\n## Inventory and reading coverage\n\n'+f'{len(records)} inventoried files; {len(snapshot)} complete text scans. Full source and test text is available in the sanitized snapshot. Scanning is not a claim of semantic review; chapter-specific semantic evidence is tracked in content references.\n\nGenerated Prisma client, node_modules, .next, coverage, .git and ignored local environment files are excluded. Binary assets are classified by extension and purpose, not republished. Lockfile is parsed as dependency metadata, not teaching source.\n\n## History\n\n```\n'+meta['history']+'\n```\n\n## Dependencies (declared / installed)\n\n'+'\n'.join(f'- {k}: {v["declared"]} / {v["installed"]}' for k,v in versions.items())+'\n\n## Contradictions and uncertainties\n\n- AGENTS.md test-only billing guidance is stale relative to docs/dodo-live-rollout.md and billing/config.ts.\n- Deployed flags, Dodo bindings, Google verification status, real user outcomes and measured performance cannot be established from the checkout.\n- No original detailed brief is present beyond the supplied plan; the six walkthroughs are sign-in, current-limit campaign, single delivery, attachment, upgrade, and account deletion.\n- Snapshot removes email literals and secret-like assignments; redactions are visible and line positions preserved. Review sanitization when refreshing; no automatic filter can prove absence of all private data.\n\n## File ledger\n\n| Path | Coverage / exclusion | Bytes |\n|---|---|---|\n'+'\n'.join(f'| `{r["path"]}` | {r.get("excluded",r.get("read"))} | {r.get("bytes", "—")} |' for r in records)+'\n')
print(f'{len(snapshot)} safe text files; {len(records)} total')
