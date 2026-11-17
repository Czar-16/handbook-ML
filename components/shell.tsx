'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import {chapters} from '@/lib/content';
import provenance from '@/content/provenance.json';
import {LearningProvider} from './learning';
import {ThemeProvider,ThemeToggle,useTheme} from './theme';
import {Pen} from './pen';
type Hit={title:string;kind:string;href:string;text:string};
export function Search(){const [query,setQuery]=useState(''),[data,setData]=useState<Hit[]|null>(null),[error,setError]=useState(false),[open,setOpen]=useState(false);const input=useRef<HTMLInputElement>(null),results=useRef<HTMLDivElement>(null);const request=useRef<Promise<void>|null>(null);function load(){if(request.current)return;request.current=fetch('/search.json').then(r=>{if(!r.ok)throw Error();return r.json();}).then(setData).catch(()=>{setError(true);request.current=null;});}useEffect(()=>{function shortcut(e:KeyboardEvent){if(e.key==='/'&&!['INPUT','TEXTAREA'].includes((e.target as HTMLElement).tagName)){e.preventDefault();input.current?.focus();}if(e.key==='Escape')setOpen(false);}window.addEventListener('keydown',shortcut);return()=>window.removeEventListener('keydown',shortcut);},[]);const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);const hits=data&&words.length?data.map(h=>({h,score:words.every(w=>(h.title+' '+h.kind+' '+h.text).toLowerCase().includes(w))?words.reduce((n,w)=>n+(h.title.toLowerCase().includes(w)?5:1),0):0})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,20).map(x=>x.h):[];return <div className="search" onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false);}}><label className="sr-only" htmlFor="global-search">Search the handbook and source</label><input ref={input} id="global-search" type="search" placeholder="Search the handbook…  /" value={query} onFocus={()=>{load();setOpen(true);}} onChange={e=>{setQuery(e.target.value);setOpen(true);}} onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();results.current?.querySelector<HTMLAnchorElement>('a')?.focus();}}} aria-controls="search-results" aria-expanded={open&&!!query}/>{open&&query&&<div id="search-results" ref={results} className="search-results" onKeyDown={e=>{if(e.key!=='ArrowDown'&&e.key!=='ArrowUp')return;e.preventDefault();const links=Array.from(results.current?.querySelectorAll('a')||[]);const index=links.indexOf(document.activeElement as HTMLAnchorElement);links[(index+(e.key==='ArrowDown'?1:-1)+links.length)%links.length]?.focus();}}><p role="status">{error?'Could not load search. Focus the field to retry.':!data?'Loading local index…':hits.length?`${hits.length} results shown`:'No results. Try a function name, route or topic.'}</p>{hits.map((h,i)=><a href={h.href} key={h.href+i} onClick={()=>{setOpen(false);setQuery('');}}><small>{h.kind}</small>{h.title}</a>)}</div>}</div>;}
function Navigation({close}:{close?:()=>void}){const pathname=usePathname();return <nav aria-label="Handbook chapters"><a className={pathname==='/'?'active nav-home':'nav-home'} href="/" onClick={close}>Overview <span>↗</span></a><div className="nav-label">The handbook</div>{chapters.filter(p=>p.kind==='chapter').map((p,i)=><a key={p.slug} aria-current={pathname===`/handbook/${p.slug}/`?'page':undefined} className={pathname===`/handbook/${p.slug}/`?'active':''} href={'/handbook/'+p.slug+'/'} onClick={close}><span className="chapter-number">{String(i+1).padStart(2,'0')}</span>{p.title}</a>)}<div className="nav-label">Explore the implementation</div><a href="/source/" className={pathname==='/source/'?'active':''} onClick={close}><span className="chapter-number" aria-hidden="true">⌘</span>Source browser</a><a href="/handbook/walkthroughs/" onClick={close}><span className="chapter-number">↳</span>Six guided traces</a></nav>;}
function ShellContent({ children }: { children: ReactNode }) {
  const { unavailable } = useTheme();
  const dialog = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    document.body.style.overflow = '';
  }, []);

  function open() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!dialog.current) return;
    delete dialog.current.dataset.closing;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    setMenuOpen(true);
  }

  function close() {
    if (!dialog.current || !dialog.current.open || closeTimer.current) return;
    const finish = () => {
      dialog.current?.close();
      closeTimer.current = null;
    };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else {
      dialog.current.dataset.closing = 'true';
      closeTimer.current = setTimeout(finish, 160);
    }
  }

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="topbar">
      <a className="brand" href="/"><span className="brand-mark">m.</span><span>mailloop <em>handbook</em></span></a>
      <Search />
      <ThemeToggle />
      <button className="mobile-menu" ref={menuButton} onClick={open} aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg>
      </button>
    </header>
    {unavailable && <div className="storage-notice" role="status">Theme storage is unavailable; your choice lasts for this visit.</div>}
    <aside className="sidebar"><Navigation /><div className="sidebar-foot"><span className="status-dot" /> Source-grounded · local study<br /><small>Snapshot {provenance.commit.slice(0,7)} · {provenance.date.slice(0,10)}</small></div></aside>
    <dialog id="mobile-navigation" ref={dialog} className="mobile-drawer" aria-label="Handbook navigation"
      onCancel={event => { event.preventDefault(); close(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}
      onClose={() => { document.body.style.overflow = ''; setMenuOpen(false); menuButton.current?.focus(); }}>
      <div className="drawer-heading"><div><span className="eyebrow">YOUR READING MAP</span><strong>Contents</strong></div><button onClick={close} aria-label="Close navigation">✕</button></div>
      <Navigation close={close} />
    </dialog>
    <div className="workspace">{children}<footer className="site-footer"><span className="footer-message">A dated code reading, with evidence at every step.</span><a href="/source/">Inspect the snapshot ↗</a><span>No provider credentials · Progress stays in your browser</span></footer></div>
    <Pen />
  </>;
}

export function Shell({ children }: { children: ReactNode }) {
  return <ThemeProvider><LearningProvider><ShellContent>{children}</ShellContent></LearningProvider></ThemeProvider>;
}
