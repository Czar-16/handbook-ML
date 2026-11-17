'use client';
import {createContext,useContext,useEffect,useRef,useState, type ReactNode} from 'react';
import type {Question} from '@/lib/content';
import quizzes from '@/content/quizzes.json';
type Progress=Record<string,{understood?:boolean;revise?:boolean}>;
const Context=createContext<{progress:Progress;change:(id:string,key:'understood'|'revise')=>void;reset:()=>void;unavailable:boolean}>({progress:{},change:()=>{},reset:()=>{},unavailable:false});
const KEY='mailloop-handbook:progress:v1';
export function LearningProvider({children}:{children:ReactNode}) {
 const [progress,setProgress]=useState<Progress>({}),[ready,setReady]=useState(false),[unavailable,setUnavailable]=useState(false);
 useEffect(()=>{try{const raw=localStorage.getItem(KEY);if(raw){const parsed=JSON.parse(raw);if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed)){const safe:Progress={};for(const [k,v] of Object.entries(parsed))if(v&&typeof v==='object')safe[k]={understood:(v as {understood?:unknown}).understood===true,revise:(v as {revise?:unknown}).revise===true};setProgress(safe);}}}catch{setUnavailable(true);}setReady(true);},[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(KEY,JSON.stringify(progress));}catch{setUnavailable(true);}},[progress,ready]);
 function reset(){setProgress({});try{localStorage.removeItem(KEY);}catch{setUnavailable(true);}}
 return <Context.Provider value={{progress,change:(id,key)=>setProgress(old=>({...old,[id]:{...old[id],[key]:!old[id]?.[key]}})),reset,unavailable}}>{children}</Context.Provider>;
}
export function ProgressControls({id}:{id:string}){const {progress,change,unavailable}=useContext(Context);return <div className="learning-controls"><span className="eyebrow">Your revision</span><button aria-pressed={!!progress[id]?.understood} onClick={()=>change(id,'understood')}>{progress[id]?.understood?'✓ ':''}Understood</button><button aria-pressed={!!progress[id]?.revise} onClick={()=>change(id,'revise')}>Revise later</button>{unavailable&&<small role="status">Storage unavailable. Changes last for this visit.</small>}</div>;}
export function ProgressSummary(){const {progress,reset,unavailable}=useContext(Context);const entries=Object.values(progress);return <div className="progress-summary"><span>{entries.filter(p=>p.understood).length} understood · {entries.filter(p=>p.revise).length} to revisit</span><button onClick={reset}>Reset learning progress</button>{unavailable&&<p role="status">Browser storage is unavailable; progress is kept in memory for this visit.</p>}</div>;}
export function Flashcards({questions}:{questions:Question[]}){const [index,setIndex]=useState(0),[revealed,setRevealed]=useState(false);const q=questions[index];return <section className="study-card" aria-label="Flashcards"><div className="eyebrow">Flashcard {index+1} / {questions.length}</div><h3 className="flashcard-prompt" key={q.id}>{q.question}</h3><button aria-expanded={revealed} onClick={()=>setRevealed(v=>!v)}>{revealed?'Hide answer':'Reveal answer'}</button>{revealed&&<div className="answer"><p>{q.short}</p><p>{q.deep}</p><a href={'/handbook/'+q.chapter+'/'}>Revise this topic →</a><ProgressControls id={q.id}/></div>}<div className="card-navigation"><button onClick={()=>{setIndex(i=>(i-1+questions.length)%questions.length);setRevealed(false);}}>← Previous card</button><button onClick={()=>{setIndex(i=>(i+1)%questions.length);setRevealed(false);}}>Next card →</button></div></section>;}
export function Quiz(){const [answers,setAnswers]=useState<Record<string,number>>({});return <section className="quiz" aria-label="Self-check quiz"><h2>Check your understanding</h2><p>Choose an answer to reveal the reasoning. These answers reset when you reload.</p>{quizzes.map(q=><fieldset key={q.id}><legend>{q.question}</legend>{q.options.map((o,i)=><label key={o}><input type="radio" name={q.id} checked={answers[q.id]===i} onChange={()=>setAnswers(a=>({...a,[q.id]:i}))}/>{o}</label>)}{answers[q.id]!==undefined&&<p role="status" className="quiz-feedback"><strong>{answers[q.id]===q.answer?'Correct.':'Review this one.'}</strong> {q.why} <a href={'/handbook/'+q.chapter+'/'}>Revision link</a></p>}</fieldset>)}<button onClick={()=>setAnswers({})}>Reset quiz</button></section>;}
export function CopyButton({text}:{text:string}) {
  const [state,setState]=useState('Copy');
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
  async function copy() {
    if(timer.current)clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setState('Copied');
    } catch {
      setState('Select code to copy');
    }
    timer.current=setTimeout(()=>setState('Copy'),2400);
  }
  return <button className="copy-button" data-copied={state==='Copied'} onClick={copy} aria-label="Copy source excerpt">
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {state==='Copied'?<path d="m5 12 4 4L19 6"/>:<><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></>}
    </svg>
    <span aria-live="polite">{state}</span>
  </button>;
}
