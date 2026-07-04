import { ttsService } from '../services/ttsService'

export function useSpeech() {
  function speakJapanese(text: string, rate: number = 0.85) {
    ttsService.speak(text, 'ja-JP', rate)
  }

  function speakEnglish(text: string, rate: number = 1) {
    ttsService.speak(text, 'en-US', rate)
  }

  function stop() {
    ttsService.stop()
  }

  return { speakJapanese, speakEnglish, stop, isSupported: ttsService.isSupported() }
}
