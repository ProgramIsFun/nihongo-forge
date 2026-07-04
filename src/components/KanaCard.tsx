import type { KanaChar } from '../data/kana'

interface KanaCardProps {
  kana: KanaChar
  isLearned: boolean
  onClick: () => void
  onToggle: () => void
}

export function KanaCard({ kana, isLearned, onClick, onToggle }: KanaCardProps) {
  return (
    <div className={`kana-card ${isLearned ? 'learned' : ''}`} onClick={onClick}>
      <span className="kana-char">{kana.char}</span>
      <span className="kana-romaji">{kana.romaji}</span>
      <button
        className={`kana-check ${isLearned ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
        title={isLearned ? 'Mark as not learned' : 'Mark as learned'}
      >
        {isLearned ? '✓' : ''}
      </button>
    </div>
  )
}
