import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sentenceService } from '../services/sentenceService'
import { useSpeech } from '../hooks/useSpeech'
import { SpeedControl } from '../components/SpeedControl'
import type { Sentence } from '../data/sentences'
import './Sentences.css'

const levels = ['N5', 'N4', 'N3', 'N2', 'N1']

export function Sentences() {
  const [level, setLevel] = useState<string>('')
  const [sentence, setSentence] = useState<Sentence | null>(null)
  const [showReading, setShowReading] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [loading, setLoading] = useState(false)
  const [speed, setSpeed] = useState(0.85)
  const { speakJapanese } = useSpeech()

  async function generate() {
    setLoading(true)
    try {
      const s = await sentenceService.getRandomSentence(level ? { level } : undefined)
      setSentence(s)
      setShowReading(false)
      setShowTranslation(false)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="sentences-page">
      <div className="sentences-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Sentence Practice</h1>
        <p className="sentences-subtitle">Read Japanese sentences and test your understanding.</p>
      </div>

      <div className="sentences-controls">
        <div className="level-selector">
          <button
            className={`level-btn ${level === '' ? 'active' : ''}`}
            onClick={() => setLevel('')}
          >
            All
          </button>
          {levels.map((l) => (
            <button
              key={l}
              className={`level-btn ${level === l ? 'active' : ''}`}
              onClick={() => setLevel(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <button className="btn btn-primary generate-btn" onClick={generate} disabled={loading}>
          {loading ? 'Loading...' : sentence ? 'Generate Another' : 'Generate Sentence'}
        </button>
      </div>

      {sentence && (
        <div className="sentence-card">
          <div className="sentence-level">{sentence.level}</div>

          <div className="sentence-japanese">{sentence.japanese}</div>

          <SpeedControl value={speed} onChange={setSpeed} />

          <button
            className="speak-btn"
            onClick={() => speakJapanese(sentence.japanese, speed)}
            title="Listen to pronunciation"
          >
            🔊 Listen
          </button>

          {showReading && (
            <div className="sentence-reading">{sentence.reading}</div>
          )}

          {showTranslation && (
            <div className="sentence-english">{sentence.english}</div>
          )}

          <div className="sentence-actions">
            {!showReading && (
              <button className="btn btn-ghost" onClick={() => setShowReading(true)}>
                Show Reading
              </button>
            )}
            {!showTranslation && (
              <button className="btn btn-ghost" onClick={() => setShowTranslation(true)}>
                Show Translation
              </button>
            )}
          </div>

          <div className="sentence-meta">
            <div className="meta-section">
              <span className="meta-label">Grammar:</span>
              <div className="meta-tags">
                {sentence.grammar.map((g) => (
                  <span key={g} className="meta-tag grammar">{g}</span>
                ))}
              </div>
            </div>
            <div className="meta-section">
              <span className="meta-label">Tags:</span>
              <div className="meta-tags">
                {sentence.tags.map((t) => (
                  <span key={t} className="meta-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!sentence && !loading && (
        <div className="sentence-placeholder">
          <div className="placeholder-icon">文</div>
          <p>Select a level and click generate to practice sentences.</p>
        </div>
      )}
    </div>
  )
}
