export const clean = (value) =>
  (value ?? '').toString().trim().replace(/\s+/g, ' ');

export const cleanMessage = (value) =>
  (value ?? '').toString().trim().replace(/\r\n/g, '\n');

export const limit = (value, max) => value.slice(0, max);

export function htmlEscape(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
