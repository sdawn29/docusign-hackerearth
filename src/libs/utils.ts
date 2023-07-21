export interface EmojiResponse {
  name: string;
  unicode: string[];
  htmlCode: string[];
  category: string;
  group: string;
}

function getUrl(category: string) {
  if (category === "all") {
    return `https://emojihub.yurace.pro/api/all`;
  } else {
    return `https://emojihub.yurace.pro/api/all/category/${category}`;
  }
}

export function getEmojis(category = "all"): Promise<EmojiResponse[]> {
  return fetch(getUrl(category)).then((res) => res.json()) as Promise<
    EmojiResponse[]
  >;
}

export function renderEmojisFromUnicode(unicode: string) {
  const u = unicode.slice(2);
  const emoji = String.fromCodePoint(parseInt(u, 16));
  return emoji;
}
