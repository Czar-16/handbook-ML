import pathlib,subprocess,json,hashlib,sys
R=pathlib.Path(__file__).resolve().parents[1];S=pathlib.Path('/home/anoop/CODE/mailloop');m=json.loads((R/'content/provenance.json').read_text());errors=[]
def git(*args):return subprocess.check_output(['git',*args],cwd=S,text=True).strip()
if git('rev-parse','HEAD')!=m['commit']:errors.append('Commit changed')
if git('status','--porcelain')!=m['status']:errors.append('Git status changed')
current=sorted(set(git('ls-files').splitlines()+git('ls-files','--others','--exclude-standard').splitlines()))
if current!=sorted(f['path'] for f in m['files']):errors.append('File inventory changed')
for f in m['files']:
 if 'hash' not in f:continue
 p=S/f['path']
 if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=f['hash']:errors.append('Source hash changed: '+f['path'])
if errors:print('\n'.join(errors));sys.exit(1)
print(f'Source unchanged: {len(m["files"])} inventory entries, matching commit and Git status.')
