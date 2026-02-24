/**
 * decodeHtmlEntities
 */

export function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
  }

  let decoded = text;

  const entities = {
    '&amp;': '&',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
  };

  decoded = decoded.replace(/&amp;|&quot;|&#039;|&apos;|&nbsp;/g, (char) => entities[char]);

  decoded = decoded.replace(/&#(\d+);/g, (_, num) => {
    const code = Number(num);
    if (Number.isNaN(code)) return _;
    return String.fromCodePoint(code);
  });

  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    const code = Number.parseInt(hex, 16);
    if (Number.isNaN(code)) return _;
    return String.fromCodePoint(code);
  });

  return decoded;
}

/**
 * removeLastTrailingSlash
 */

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

export function removeExtraSpaces(text) {
  if (typeof text !== 'string') return;
  return text.replace(/\s+/g, ' ').trim();
}

export function stripHtml(html) {
  if (typeof html !== 'string') return '';
  const withoutTags = html.replace(/<[^>]*>/g, ' ');
  const withoutNbsp = withoutTags.replace(/&nbsp;/g, ' ');
  return removeExtraSpaces(decodeHtmlEntitiesDeep(withoutNbsp));
}

export function getTextPreview(html, maxLength = 400) {
  const text = stripHtml(html);
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}` : text;
}

export function decodeHtmlEntitiesDeep(text, passes = 2) {
  let result = text;
  for (let i = 0; i < passes; i += 1) {
    const decoded = decodeHtmlEntities(result);
    if (decoded === result) break;
    result = decoded;
  }
  return result;
}

export function normalizeHtmlEntities(html) {
  if (typeof html !== 'string') return html;
  return decodeHtmlEntitiesDeep(html);
}

export const homepage = process.env.NEXT_FRONTEND_URL;
export const faviconPath = 'favicon.ico';
