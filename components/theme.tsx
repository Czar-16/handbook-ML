'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'mailloop-handbook:theme';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void; unavailable: boolean }>({
  theme: 'light', toggle: () => {}, unavailable: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [unavailable, setUnavailable] = useState(false);
  const explicit = useRef(false);

  useEffect(() => {
    const apply = (value: Theme) => {
      document.documentElement.dataset.theme = value;
      setTheme(value);
    };
    apply(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    try {
      const saved = localStorage.getItem(KEY);
      explicit.current = saved === 'dark' || saved === 'light';
    } catch {
      setUnavailable(true);
    }
    const media = matchMedia('(prefers-color-scheme: dark)');
    const update = () => { if (!explicit.current) apply(media.matches ? 'dark' : 'light'); };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  function toggle() {
    const value = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    explicit.current = true;
    document.documentElement.dataset.theme = value;
    setTheme(value);
    try { localStorage.setItem(KEY, value); } catch { setUnavailable(true); }
  }

  return <ThemeContext.Provider value={{ theme, toggle, unavailable }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className="theme-button" onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'dark'}>
      <span className="theme-icon" aria-hidden="true">
        <svg className="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
        </svg>
        <svg className="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
        </svg>
      </span>
      <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
