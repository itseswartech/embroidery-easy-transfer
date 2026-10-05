// Simple Speech Synthesizer for Telugu instructions
export const speakTeluguText = (text) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    return;
  }

  window.speechSynthesis.cancel(); // Cancel any ongoing speech

  const cleanText = text.replace(/[\(\)📦📂📱🔌💾🧵🎉⚠️]/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  
  // Try to find a Telugu voice, or use default
  const voices = window.speechSynthesis.getVoices();
  const teluguVoice = voices.find(v => v.lang.includes('te') || v.lang.includes('te-IN'));
  
  if (teluguVoice) {
    utterance.voice = teluguVoice;
    utterance.lang = 'te-IN';
  } else {
    utterance.lang = 'te-IN'; // Fallback hint
  }

  utterance.rate = 0.85; // Slower rate for easy understanding
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
