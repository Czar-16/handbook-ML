import type {Metadata} from 'next';
import {SourceBrowser} from '@/components/source-browser';
import {Evidence} from '@/components/evidence';
import {chapters} from '@/lib/content';
import provenance from '@/content/provenance.json';
import {ProgressControls} from '@/components/learning';
export const metadata:Metadata={title:'Source browser'};
export default function SourcePage(){return <main id="main" className="source-main"><div className="breadcrumb"><a href="/">Handbook</a><span>/</span>Implementation evidence</div><header className="chapter-header"><div className="eyebrow">READ THE EXACT LINE</div><h1>Source browser<span className="accent">.</span></h1><p className="lead">A sanitized first-party snapshot. File paths, original line positions and SHA-256 hashes connect every chapter to its evidence.</p><p className="chapter-meta">Commit {provenance.commit} · source date {provenance.date}</p></header><div className="reading-note">Email literals and secret-like assignments are visibly redacted. Actual environment files, credential stores, binary assets and dependency lockfile text are excluded. Redactions preserve line positions. The snapshot is evidence, not executable application code.</div><SourceBrowser/><aside className="interview-box"><div className="eyebrow">INTERVIEW ANGLE</div><p>Distinguish a direct source fact from an inferred reason. Open the complete caller and callee before explaining a failure path.</p></aside><Evidence reference={chapters[0].sections[2].refs[0]}/><ProgressControls id="source-browser"/></main>;}
