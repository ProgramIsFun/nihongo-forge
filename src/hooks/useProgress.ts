import { useState, useEffect } from 'react'

const STORAGE_KEY = 'nihongo-forge-progress'

export interface Progress {
  learned: string[]
  lastPracticed: Record<string, number>
}

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { learned: [], lastPracticed: {} }
}

function saveProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  function markLearned(char: string) {
    setProgress((prev) => ({
      learned: prev.learned.includes(char) ? prev.learned : [...prev.learned, char],
      lastPracticed: { ...prev.lastPracticed, [char]: Date.now() },
    }))
  }

  function markUnlearned(char: string) {
    setProgress((prev) => ({
      learned: prev.learned.filter((c) => c !== char),
      lastPracticed: { ...prev.lastPracticed },
    }))
  }

  function isLearned(char: string) {
    return progress.learned.includes(char)
  }

  function getProgress(type: 'hiragana' | 'katakana', total: number) {
    const learned = progress.learned.filter((c) => {
      if (type === 'hiragana') {
        return c.charCodeAt(0) >= 0x3040 && c.charCodeAt(0) <= 0x309f
      }
      return c.charCodeAt(0) >= 0x30a0 && c.charCodeAt(0) <= 0x30ff
    }).length
    return { learned, total, percent: Math.round((learned / total) * 100) }
  }

  function resetProgress() {
    setProgress({ learned: [], lastPracticed: {} })
  }

  return { progress, markLearned, markUnlearned, isLearned, getProgress, resetProgress }
}
