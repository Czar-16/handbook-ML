'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from './theme';

// Mermaid configuration is global, so each render/configuration pair is serialized.
let serial = Promise.resolve();
let generation = 0;

export function Diagram({ code, caption }: { code: string; caption: string }) {
  const id = useId().replace(/[^a-z0-9]/gi, '');
  const canvas = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    setState('loading');
    serial = serial.catch(() => {}).then(async () => {
      if (cancelled) return;
      try {
        const { default: mermaid } = await import('mermaid');
        if (cancelled) return;
        const dark = theme === 'dark';
        const colors = {
          text: dark ? '#FFFFFF' : '#202020',
          muted: dark ? '#EDEDED' : '#62605A',
          surface: dark ? '#000000' : '#FFFFFF',
          accent: dark ? '#FFD84D' : '#806000',
          soft: dark ? '#000000' : '#FFF5CD',
          border: dark ? '#555044' : '#CFC8B2',
          background: dark ? '#000000' : '#FAF9F5',
        };
        mermaid.initialize({
          startOnLoad: false, securityLevel: 'strict', theme: 'base',
          fontFamily: 'var(--font-body), sans-serif',
          flowchart: { htmlLabels: false, padding: 20 },
          themeVariables: {
            darkMode: dark, background: colors.background,
            primaryColor: colors.surface, primaryTextColor: colors.text,
            primaryBorderColor: colors.accent, secondaryColor: colors.soft,
            secondaryTextColor: colors.text, secondaryBorderColor: colors.border,
            tertiaryColor: colors.surface, tertiaryTextColor: colors.text,
            tertiaryBorderColor: colors.border, lineColor: colors.muted,
            textColor: colors.text, mainBkg: colors.surface,
            nodeBorder: colors.accent, clusterBkg: colors.surface,
            clusterBorder: colors.border, titleColor: colors.text,
            edgeLabelBackground: colors.background,
            actorBkg: colors.surface, actorBorder: colors.accent,
            actorTextColor: colors.text, actorLineColor: colors.border,
            signalColor: colors.muted, signalTextColor: colors.text,
            labelBoxBkgColor: colors.surface, labelBoxBorderColor: colors.border,
            labelTextColor: colors.text, noteBkgColor: colors.soft,
            noteTextColor: colors.text, noteBorderColor: colors.accent,
            activationBkgColor: colors.soft, activationBorderColor: colors.accent,
            sequenceNumberColor: colors.background, fontSize: '15px',
          },
        });
        // A fresh ID avoids conflicts with the currently displayed SVG on theme changes.
        const renderId = `diagram${id}g${generation++}`;
        const result = await mermaid.render(renderId, code);
        if (!cancelled && canvas.current) {
          canvas.current.innerHTML = result.svg;
          setState('ready');
        }
      } catch {
        if (!cancelled) {
          if (canvas.current) canvas.current.innerHTML = '';
          setState('error');
        }
      }
    });
    return () => { cancelled = true; };
  }, [code, id, theme]);

  return <figure className="diagram">
    <div ref={canvas} className="diagram-canvas" role="img" aria-label={caption} aria-busy={state === 'loading'} />
    {state === 'loading' && <p role="status">Drawing the flow… The readable diagram source is below.</p>}
    {state === 'error' && <p role="status">Diagram unavailable. Read the flow below.</p>}
    <figcaption>{caption}</figcaption>
    <details><summary>Read diagram as text</summary><pre>{code}</pre></details>
  </figure>;
}
