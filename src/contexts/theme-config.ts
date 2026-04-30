/**
 * Theme constants that are safe to import from BOTH server and client modules.
 *
 * `ThemeContext.tsx` is a `'use client'` boundary — importing its named exports
 * from a server component yields a client-reference proxy, not the real value
 * (e.g. `THEMES.includes is not a function`). Keep the plain constants here and
 * re-export them from `ThemeContext.tsx` for backwards-compatible client use.
 *
 * Template 3 (Jams & Sauces): Farmhouse / Modern Condiment / Garden — see PLAN-03-JAMS-AND-SAUCES.md.
 */

export const THEMES = ['farmhouse', 'modern-condiment', 'garden'] as const
export type Theme = (typeof THEMES)[number]

export const DEFAULT_THEME: Theme = 'farmhouse'

export const THEME_META: Record<
  Theme,
  { id: Theme; label: string; description: string }
> = {
  farmhouse: {
    id: 'farmhouse',
    label: 'Farmhouse',
    description: 'Warm preserves, barn red & pantry gold',
  },
  'modern-condiment': {
    id: 'modern-condiment',
    label: 'Modern',
    description: 'Bold labels, deli-counter clarity',
  },
  garden: {
    id: 'garden',
    label: 'Garden',
    description: 'Garden greens, seasonal brightness',
  },
}

export const THEME_COOKIE_KEY = 'site_theme'
export const THEME_STORAGE_KEY = 'site_theme'

export function isTheme(v: unknown): v is Theme {
  return typeof v === 'string' && (THEMES as readonly string[]).includes(v)
}

/**
 * Inline script injected in <head> to apply the theme before first paint,
 * preventing a flash of default theme on navigation / reload.
 */
export const THEME_BOOTSTRAP_SCRIPT = `
(function(){try{
  var m=document.cookie.match(/(?:^|; )${THEME_COOKIE_KEY}=([^;]+)/);
  var t=m?decodeURIComponent(m[1]):null;
  if(!t){try{t=localStorage.getItem('${THEME_STORAGE_KEY}');}catch(e){}}
  var allowed=${JSON.stringify(THEMES)};
  if(!t||allowed.indexOf(t)===-1)t='${DEFAULT_THEME}';
  document.documentElement.setAttribute('data-theme',t);
}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();
`
