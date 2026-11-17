import Script from 'next/script';
import type { CSSProperties } from 'react';

// The isolated script owns these controls and temporary SVG strokes. No ink is stored.
export function Pen() {
  return <>
    <svg id="annotation-ink" aria-hidden="true" />
    <section id="annotation-tools" aria-label="Temporary pen">
      <button id="pen-panel-toggle" aria-expanded="false" aria-controls="pen-panel"><span className="pen-color-dot" aria-hidden="true" /><span id="pen-button-label">Pen · Off</span></button>
      <div id="pen-panel" hidden>
        <button id="pen-enabled" aria-pressed="false">Pen off</button>
        <fieldset className="pen-colors"><legend>Ink color</legend>
          {Object.entries({Red:'#dc2626',Blue:'#2563eb',Green:'#16a34a',Purple:'#9333ea',Orange:'#ea580c',Black:'#000000',White:'#ffffff'}).map(([name,color]) => <button key={name} data-pen-color={color} aria-label={name} aria-pressed={name==='Red'} style={{'--swatch':color} as CSSProperties} />)}
        </fieldset>
        <label>Custom color <input id="pen-color" type="color" defaultValue="#dc2626" /></label>
        <label htmlFor="pen-width">Thickness <output id="pen-width-value">3 px</output></label>
        <input id="pen-width" type="range" min="1" max="12" defaultValue="3" />
        <label htmlFor="pen-opacity">Opacity <output id="pen-opacity-value">100%</output></label>
        <input id="pen-opacity" type="range" min="10" max="100" defaultValue="100" />
        <div className="pen-actions"><button id="pen-undo" disabled>Undo</button><button id="pen-clear" disabled>Clear all</button></div>
        <p id="pen-status" role="status">Pen off. Ink disappears when you leave or refresh.</p>
        <small>Press Escape to turn the pen off. Turn it off to scroll on touch screens.</small>
      </div>
    </section>
    <Script src="/annotations.js" strategy="afterInteractive" />
  </>;
}
