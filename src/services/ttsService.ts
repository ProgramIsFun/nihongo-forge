export interface TTSProvider {
  speak(text: string, lang?: string, rate?: number): void
  stop(): void
  isSupported(): boolean
}

// Web Speech API (browser built-in)
class WebSpeechProvider implements TTSProvider {
  isSupported(): boolean {
    return 'speechSynthesis' in window
  }

  speak(text: string, lang: string = 'ja-JP', rate: number = 0.85): void {
    if (!this.isSupported()) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang
    utterance.rate = Math.min(10, Math.max(0.1, rate))
    window.speechSynthesis.speak(utterance)
  }

  stop(): void {
    if (this.isSupported()) {
      window.speechSynthesis.cancel()
    }
  }
}

// Backend TTS (for future use — e.g. Google Cloud TTS, Amazon Polly, OpenAI)
// Uncomment and implement when backend is ready
//
// class BackendTTSProvider implements TTSProvider {
//   private baseUrl: string
//
//   constructor(baseUrl: string) {
//     this.baseUrl = baseUrl
//   }
//
//   isSupported(): boolean {
//     return true
//   }
//
//   async speak(text: string, lang: string = 'ja-JP'): Promise<void> {
//     const res = await fetch(`${this.baseUrl}/tts`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text, lang }),
//     })
//     const { audioUrl } = await res.json()
//     const audio = new Audio(audioUrl)
//     audio.play()
//   }
//
//   stop(): void {
//     // Stop any playing audio
//   }
// }

// Toggle this when switching providers
// export const ttsService: TTSProvider = new BackendTTSProvider('http://localhost:4000/api')
export const ttsService: TTSProvider = new WebSpeechProvider()
