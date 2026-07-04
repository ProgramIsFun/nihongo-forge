import type { Sentence } from '../data/sentences'
import { sentences as hardcodedSentences } from '../data/sentences'

export interface SentenceQuery {
  level?: string
  grammar?: string
  tags?: string[]
  limit?: number
}

export interface SentenceService {
  getSentences(query?: SentenceQuery): Promise<Sentence[]>
  getRandomSentence(query?: SentenceQuery): Promise<Sentence>
  getGrammarPoints(level?: string): Promise<string[]>
}

// Hardcoded implementation (local data)
class HardcodedSentenceService implements SentenceService {
  async getSentences(query?: SentenceQuery): Promise<Sentence[]> {
    let result = [...hardcodedSentences]

    if (query?.level) {
      result = result.filter((s) => s.level === query.level)
    }

    if (query?.grammar) {
      result = result.filter((s) => s.grammar.includes(query.grammar!))
    }

    if (query?.tags && query.tags.length > 0) {
      result = result.filter((s) => query.tags!.some((t) => s.tags.includes(t)))
    }

    if (query?.limit) {
      result = result.slice(0, query.limit)
    }

    return result
  }

  async getRandomSentence(query?: SentenceQuery): Promise<Sentence> {
    const sentences = await this.getSentences(query)
    if (sentences.length === 0) {
      throw new Error('No sentences found for the given query')
    }
    return sentences[Math.floor(Math.random() * sentences.length)]
  }

  async getGrammarPoints(level?: string): Promise<string[]> {
    let result = [...hardcodedSentences]
    if (level) {
      result = result.filter((s) => s.level === level)
    }
    const points = new Set<string>()
    result.forEach((s) => s.grammar.forEach((g) => points.add(g)))
    return Array.from(points).sort()
  }
}

// Backend implementation (for future use)
// Uncomment and implement when backend is ready
//
// class ApiSentenceService implements SentenceService {
//   private baseUrl: string
//
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl
//   }
//
//   async getSentences(query?: SentenceQuery): Promise<Sentence[]> {
//     const params = new URLSearchParams()
//     if (query?.level) params.set('level', query.level)
//     if (query?.grammar) params.set('grammar', query.grammar)
//     if (query?.tags) params.set('tags', query.tags.join(','))
//     if (query?.limit) params.set('limit', String(query.limit))
//
//     const res = await fetch(`${this.baseUrl}/sentences?${params}`)
//     if (!res.ok) throw new Error('Failed to fetch sentences')
//     return res.json()
//   }
//
//   async getRandomSentence(query?: SentenceQuery): Promise<Sentence> {
//     const params = new URLSearchParams()
//     if (query?.level) params.set('level', query.level)
//     if (query?.grammar) params.set('grammar', query.grammar)
//
//     const res = await fetch(`${this.baseUrl}/sentences/random?${params}`)
//     if (!res.ok) throw new Error('Failed to fetch sentence')
//     return res.json()
//   }
//
//   async getGrammarPoints(level?: string): Promise<string[]> {
//     const params = new URLSearchParams()
//     if (level) params.set('level', level)
//
//     const res = await fetch(`${this.baseUrl}/grammar-points?${params}`)
//     if (!res.ok) throw new Error('Failed to fetch grammar points')
//     return res.json()
//   }
// }

// Toggle this when backend is ready
// export const sentenceService = new ApiSentenceService('http://localhost:4000/api')
export const sentenceService: SentenceService = new HardcodedSentenceService()
