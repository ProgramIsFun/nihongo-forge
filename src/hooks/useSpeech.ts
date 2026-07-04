import { ttsService } from '../services/ttsService'

export function useSpeech() {
  function speakJapanese(text: string) {
    ttsService.speak(text, 'ja-JP')
  }

  function speakEnglish(text: string) {
    ttsService.speak(text, 'en-US')
  }

  function stop() {
    ttsService.stop()
  }

  return { speakJapanese, speakEnglish, stop, isSupported: ttsService.isSupported() }
}
