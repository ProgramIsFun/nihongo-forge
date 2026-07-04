import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAllKana } from '../data/kana'
import type { KanaType, KanaChar } from '../data/kana'
import { useProgress } from '../hooks/useProgress'
import './KanaDrill.css'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function KanaDrill() {
  const { type = 'hiragana' } = useParams<{ type: string }>()
  const kanaType = type as KanaType
  const allKana = getAllKana(kanaType)
  const { markLearned, isLearned } = useProgress()

  const [queue, setQueue] = useState<KanaChar[]>([])
  const [current, setCurrent] = useState<KanaChar | null>(null)
  const [input, setInput] = useState('')
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null)
  const [score, setScore] = useState({ correct: 0, wrong: 0 })
  const [revealed, setRevealed] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const shuffled = shuffle(allKana)
    setQueue(shuffled)
    setCurrent(shuffled[0])
  }, [kanaType])

  useEffect(() => {
    inputRef.current?.focus()
  }, [current])

  function checkAnswer() {
    if (!current || !input.trim()) return

    const userAnswer = input.trim().toLowerCase()
    const correct = userAnswer === current.romaji

    setResult(correct ? 'correct' : 'wrong')
    if (correct) {
      setScore((s) => ({ ...s, correct: s.correct + 1 }))
      markLearned(current.char)
    } else {
      setScore((s) => ({ ...s, wrong: s.wrong + 1 }))
    }
    setRevealed(true)
  }

  function next() {
    const nextIndex = queue.indexOf(current!) + 1
    if (nextIndex < queue.length) {
      setCurrent(queue[nextIndex])
    } else {
      const reshuffled = shuffle(allKana)
      setQueue(reshuffled)
      setCurrent(reshuffled[0])
      setScore({ correct: 0, wrong: 0 })
    }
    setInput('')
    setResult(null)
    setRevealed(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      if (revealed) {
        next()
      } else {
        checkAnswer()
      }
    }
  }

  if (!current) return null

  const total = score.correct + score.wrong
  const accuracy = total > 0 ? Math.round((score.correct / total) * 100) : 0

  return (
    <div className="drill-page">
      <div className="drill-header">
        <Link to={`/kana`} className="back-link">← Back to {kanaType === 'hiragana' ? 'Hiragana' : 'Katakana'}</Link>
        <div className="drill-stats">
          <span className="stat correct">{score.correct} correct</span>
          <span className="stat wrong">{score.wrong} wrong</span>
          <span className="stat">{accuracy}% accuracy</span>
        </div>
      </div>

      <div className="drill-card">
        <div className="drill-char">{current.char}</div>

        <div className="drill-input-area">
          <input
            ref={inputRef}
            type="text"
            className={`drill-input ${result === 'correct' ? 'correct' : ''} ${result === 'wrong' ? 'wrong' : ''}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type romaji..."
            disabled={revealed}
            autoComplete="off"
            spellCheck={false}
          />
          {revealed && (
            <div className={`drill-result ${result}`}>
              {result === 'correct' ? '✓ Correct!' : `✗ It was "${current.romaji}"`}
            </div>
          )}
        </div>

        <div className="drill-actions">
          {!revealed ? (
            <button className="btn btn-primary" onClick={checkAnswer} disabled={!input.trim()}>
              Check
            </button>
          ) : (
            <button className="btn btn-primary" onClick={next}>
              Next →
            </button>
          )}
          {!revealed && (
            <button
              className="btn btn-ghost"
              onClick={() => {
                setRevealed(true)
                setResult('wrong')
                setScore((s) => ({ ...s, wrong: s.wrong + 1 }))
              }}
            >
              Skip
            </button>
          )}
        </div>
      </div>

      <div className="drill-progress">
        Card {queue.indexOf(current) + 1} of {queue.length}
      </div>
    </div>
  )
}
