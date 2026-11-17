import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Shell } from '@/components/shell';
import './globals.css';

const bodyFont = localFont({
  src: './fonts/PlusJakartaSans-Variable.ttf', variable: '--font-body', weight: '200 800', display: 'swap',
});
const headingFont = localFont({
  src: './fonts/SpaceGrotesk-Variable.ttf', variable: '--font-heading', weight: '300 700', display: 'swap',
});
const monoFont = localFont({
  src: './fonts/JetBrainsMono-Variable.ttf', variable: '--font-mono', weight: '100 800', display: 'swap', preload: false,
});

// Fixed bootstrap, before body paint. No user content is interpolated into this script.
const themeBootstrap = `(function(){var t;try{t=localStorage.getItem('mailloop-handbook:theme')}catch(e){}if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})()`;

export const metadata: Metadata = {
  title: { default: 'Mailloop Handbook — Read the implementation', template: '%s · Mailloop Handbook' },
  description: 'A source-grounded handbook for understanding Mailloop: architecture, sending, billing, recovery and interview practice.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBootstrap }} /></head>
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
