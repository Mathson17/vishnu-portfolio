const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Renders `**phrase**` markers in authored copy as an underlined mint-green
 * highlight. Input is our own data.ts strings, never user input.
 */
export function highlight(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(
    /\*\*(.+?)\*\*/g,
    '<span class="text-primary underline decoration-primary/70 underline-offset-2">$1</span>',
  );
}
