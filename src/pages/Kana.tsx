import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hiragana, katakana, getAllKana } from '../data/kana'
import type { KanaType } from '../data/kana'
import { KanaCard } from '../components/KanaCard'
import { useProgress } from '../hooks/useProgress'
import './Kana.css'

export function Kana() {
  const [type, setType] = useState<KanaType>('hiragana')
  const { isLearned, markLearned, markUnlearned, getProgress } = useProgress()
  const rows = type === 'hiragana' ? hiragana : katakana
  const allKana = getAllKana(type)
  const progress = getProgress(type, allKana.length)

  function handleToggle(char: string) {
    if (isLearned(char)) {
      markUnlearned(char)
    } else {
      markLearned(char)
    }
  }

  return (
    <div className="kana-page">
      <div className="kana-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>{type === 'hiragana' ? 'Hiragana' : 'Katakana'}</h1>
        <p className="kana-subtitle">
          {progress.learned} of {progress.total} learned ({progress.percent}%)
        </p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress.percent}%` }} />
        </div>
      </div>

      <div className="kana-type-toggle">
        <button
          className={`type-btn ${type === 'hiragana' ? 'active' : ''}`}
          onClick={() => setType('hiragana')}
        >
          ひらがな Hiragana
        </button>
        <button
          className={`type-btn ${type === 'katakana' ? 'active' : ''}`}
          onClick={() => setType('katakana')}
        >
          カタカナ Katakana
        </button>
      </div>

      <div className="kana-grid-container">
        {rows.map((row) => (
          <div key={row.name} className="kana-row">
            <div className="kana-row-label">{row.name}</div>
            <div className="kana-row-chars">
              {row.chars.map((kana) => (
                <KanaCard
                  key={kana.char}
                  kana={kana}
                  isLearned={isLearned(kana.char)}
                  onClick={() => {}}
                  onToggle={() => handleToggle(kana.char)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="kana-drill-cta">
        <Link to={`/kana/${type}/drill`} className="btn btn-primary">
          Practice Drill →
        </Link>
      </div>
    </div>
  )
}
