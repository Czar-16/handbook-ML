// A deliberately limited palette: white and yellow in AMOLED mode, ink and gold in light mode.
function theme(name, type, text, accent, comment, background) {
  return {
    name, type,
    colors: { 'editor.background': background, 'editor.foreground': text },
    tokenColors: [
      { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: comment, fontStyle: 'italic' } },
      { scope: ['keyword', 'storage', 'entity.name.function', 'entity.name.type', 'support.function', 'support.type', 'constant.language', 'markup.heading'], settings: { foreground: accent } },
      { scope: ['string', 'constant.numeric', 'variable', 'entity.name.tag', 'punctuation', 'meta'], settings: { foreground: text } },
      { scope: ['keyword.control', 'storage.type', 'storage.modifier'], settings: { foreground: accent } },
    ],
  };
}
export const lightCodeTheme = theme('handbook-light', 'light', '#202020', '#806000', '#62605A', '#FFFDF6');
export const darkCodeTheme = theme('handbook-amoled', 'dark', '#FFFFFF', '#FFD84D', '#EDEDED', '#000000');
