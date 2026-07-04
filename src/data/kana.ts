export interface KanaChar {
  char: string
  reading: string
  romaji: string
  row: string
}

export type KanaType = 'hiragana' | 'katakana'

export interface KanaRow {
  name: string
  chars: KanaChar[]
}

const hiraganaRows: KanaRow[] = [
  {
    name: 'a',
    chars: [
      { char: 'あ', reading: 'あ', romaji: 'a', row: 'a' },
      { char: 'い', reading: 'い', romaji: 'i', row: 'a' },
      { char: 'う', reading: 'う', romaji: 'u', row: 'a' },
      { char: 'え', reading: 'え', romaji: 'e', row: 'a' },
      { char: 'お', reading: 'お', romaji: 'o', row: 'a' },
    ],
  },
  {
    name: 'ka',
    chars: [
      { char: 'か', reading: 'か', romaji: 'ka', row: 'ka' },
      { char: 'き', reading: 'き', romaji: 'ki', row: 'ka' },
      { char: 'く', reading: 'く', romaji: 'ku', row: 'ka' },
      { char: 'け', reading: 'け', romaji: 'ke', row: 'ka' },
      { char: 'こ', reading: 'こ', romaji: 'ko', row: 'ka' },
    ],
  },
  {
    name: 'sa',
    chars: [
      { char: 'さ', reading: 'さ', romaji: 'sa', row: 'sa' },
      { char: 'し', reading: 'し', romaji: 'shi', row: 'sa' },
      { char: 'す', reading: 'す', romaji: 'su', row: 'sa' },
      { char: 'せ', reading: 'せ', romaji: 'se', row: 'sa' },
      { char: 'そ', reading: 'そ', romaji: 'so', row: 'sa' },
    ],
  },
  {
    name: 'ta',
    chars: [
      { char: 'た', reading: 'た', romaji: 'ta', row: 'ta' },
      { char: 'ち', reading: 'ち', romaji: 'chi', row: 'ta' },
      { char: 'つ', reading: 'つ', romaji: 'tsu', row: 'ta' },
      { char: 'て', reading: 'て', romaji: 'te', row: 'ta' },
      { char: 'と', reading: 'と', romaji: 'to', row: 'ta' },
    ],
  },
  {
    name: 'na',
    chars: [
      { char: 'な', reading: 'な', romaji: 'na', row: 'na' },
      { char: 'に', reading: 'に', romaji: 'ni', row: 'na' },
      { char: 'ぬ', reading: 'ぬ', romaji: 'nu', row: 'na' },
      { char: 'ね', reading: 'ね', romaji: 'ne', row: 'na' },
      { char: 'の', reading: 'の', romaji: 'no', row: 'na' },
    ],
  },
  {
    name: 'ha',
    chars: [
      { char: 'は', reading: 'は', romaji: 'ha', row: 'ha' },
      { char: 'ひ', reading: 'ひ', romaji: 'hi', row: 'ha' },
      { char: 'ふ', reading: 'ふ', romaji: 'fu', row: 'ha' },
      { char: 'へ', reading: 'へ', romaji: 'he', row: 'ha' },
      { char: 'ほ', reading: 'ほ', romaji: 'ho', row: 'ha' },
    ],
  },
  {
    name: 'ma',
    chars: [
      { char: 'ま', reading: 'ま', romaji: 'ma', row: 'ma' },
      { char: 'み', reading: 'み', romaji: 'mi', row: 'ma' },
      { char: 'む', reading: 'む', romaji: 'mu', row: 'ma' },
      { char: 'め', reading: 'め', romaji: 'me', row: 'ma' },
      { char: 'も', reading: 'も', romaji: 'mo', row: 'ma' },
    ],
  },
  {
    name: 'ya',
    chars: [
      { char: 'や', reading: 'や', romaji: 'ya', row: 'ya' },
      { char: 'ゆ', reading: 'ゆ', romaji: 'yu', row: 'ya' },
      { char: 'よ', reading: 'よ', romaji: 'yo', row: 'ya' },
    ],
  },
  {
    name: 'ra',
    chars: [
      { char: 'ら', reading: 'ら', romaji: 'ra', row: 'ra' },
      { char: 'り', reading: 'り', romaji: 'ri', row: 'ra' },
      { char: 'る', reading: 'る', romaji: 'ru', row: 'ra' },
      { char: 'れ', reading: 'れ', romaji: 're', row: 'ra' },
      { char: 'ろ', reading: 'ろ', romaji: 'ro', row: 'ra' },
    ],
  },
  {
    name: 'wa',
    chars: [
      { char: 'わ', reading: 'わ', romaji: 'wa', row: 'wa' },
      { char: 'を', reading: 'を', romaji: 'wo', row: 'wa' },
      { char: 'ん', reading: 'ん', romaji: 'n', row: 'wa' },
    ],
  },
]

const katakanaRows: KanaRow[] = [
  {
    name: 'a',
    chars: [
      { char: 'ア', reading: 'ア', romaji: 'a', row: 'a' },
      { char: 'イ', reading: 'イ', romaji: 'i', row: 'a' },
      { char: 'ウ', reading: 'ウ', romaji: 'u', row: 'a' },
      { char: 'エ', reading: 'エ', romaji: 'e', row: 'a' },
      { char: 'オ', reading: 'オ', romaji: 'o', row: 'a' },
    ],
  },
  {
    name: 'ka',
    chars: [
      { char: 'カ', reading: 'カ', romaji: 'ka', row: 'ka' },
      { char: 'キ', reading: 'キ', romaji: 'ki', row: 'ka' },
      { char: 'ク', reading: 'ク', romaji: 'ku', row: 'ka' },
      { char: 'ケ', reading: 'ケ', romaji: 'ke', row: 'ka' },
      { char: 'コ', reading: 'コ', romaji: 'ko', row: 'ka' },
    ],
  },
  {
    name: 'sa',
    chars: [
      { char: 'サ', reading: 'サ', romaji: 'sa', row: 'sa' },
      { char: 'シ', reading: 'シ', romaji: 'shi', row: 'sa' },
      { char: 'ス', reading: 'ス', romaji: 'su', row: 'sa' },
      { char: 'セ', reading: 'セ', romaji: 'se', row: 'sa' },
      { char: 'ソ', reading: 'ソ', romaji: 'so', row: 'sa' },
    ],
  },
  {
    name: 'ta',
    chars: [
      { char: 'タ', reading: 'タ', romaji: 'ta', row: 'ta' },
      { char: 'チ', reading: 'チ', romaji: 'chi', row: 'ta' },
      { char: 'ツ', reading: 'ツ', romaji: 'tsu', row: 'ta' },
      { char: 'テ', reading: 'テ', romaji: 'te', row: 'ta' },
      { char: 'ト', reading: 'ト', romaji: 'to', row: 'ta' },
    ],
  },
  {
    name: 'na',
    chars: [
      { char: 'ナ', reading: 'ナ', romaji: 'na', row: 'na' },
      { char: 'ニ', reading: 'ニ', romaji: 'ni', row: 'na' },
      { char: 'ヌ', reading: 'ヌ', romaji: 'nu', row: 'na' },
      { char: 'ネ', reading: 'ネ', romaji: 'ne', row: 'na' },
      { char: 'ノ', reading: 'ノ', romaji: 'no', row: 'na' },
    ],
  },
  {
    name: 'ha',
    chars: [
      { char: 'ハ', reading: 'ハ', romaji: 'ha', row: 'ha' },
      { char: 'ヒ', reading: 'ヒ', romaji: 'hi', row: 'ha' },
      { char: 'フ', reading: 'フ', romaji: 'fu', row: 'ha' },
      { char: 'ヘ', reading: 'ヘ', romaji: 'he', row: 'ha' },
      { char: 'ホ', reading: 'ホ', romaji: 'ho', row: 'ha' },
    ],
  },
  {
    name: 'ma',
    chars: [
      { char: 'マ', reading: 'マ', romaji: 'ma', row: 'ma' },
      { char: 'ミ', reading: 'ミ', romaji: 'mi', row: 'ma' },
      { char: 'ム', reading: 'ム', romaji: 'mu', row: 'ma' },
      { char: 'メ', reading: 'メ', romaji: 'me', row: 'ma' },
      { char: 'モ', reading: 'モ', romaji: 'mo', row: 'ma' },
    ],
  },
  {
    name: 'ya',
    chars: [
      { char: 'ヤ', reading: 'ヤ', romaji: 'ya', row: 'ya' },
      { char: 'ユ', reading: 'ユ', romaji: 'yu', row: 'ya' },
      { char: 'ヨ', reading: 'ヨ', romaji: 'yo', row: 'ya' },
    ],
  },
  {
    name: 'ra',
    chars: [
      { char: 'ラ', reading: 'ラ', romaji: 'ra', row: 'ra' },
      { char: 'リ', reading: 'リ', romaji: 'ri', row: 'ra' },
      { char: 'ル', reading: 'ル', romaji: 'ru', row: 'ra' },
      { char: 'レ', reading: 'レ', romaji: 're', row: 'ra' },
      { char: 'ロ', reading: 'ロ', romaji: 'ro', row: 'ra' },
    ],
  },
  {
    name: 'wa',
    chars: [
      { char: 'ワ', reading: 'ワ', romaji: 'wa', row: 'wa' },
      { char: 'ヲ', reading: 'ヲ', romaji: 'wo', row: 'wa' },
      { char: 'ン', reading: 'ン', romaji: 'n', row: 'wa' },
    ],
  },
]

export const hiragana: KanaRow[] = hiraganaRows
export const katakana: KanaRow[] = katakanaRows

export function getAllKana(type: KanaType): KanaChar[] {
  const rows = type === 'hiragana' ? hiragana : katakana
  return rows.flatMap((row) => row.chars)
}

export function getKanaByRow(type: KanaType, rowName: string): KanaChar[] {
  const rows = type === 'hiragana' ? hiragana : katakana
  const row = rows.find((r) => r.name === rowName)
  return row ? row.chars : []
}
