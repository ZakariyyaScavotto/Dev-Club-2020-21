//Text to Speech
//Inspired by https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc
//API I found for text->speech: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
const synth = window.speechSynthesis; //makes the object that will talk

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string); //constructs the voice based on the given string
  voice.text = string; //sets the text it should say
  voice.lang = "en-US"; //sets language to english
  voice.volume = 1; //controls volume level (0 is lowest, 1 is highest)
  voice.rate = 1; //speed to talk, regular speed is 1, the higher the faster (max 10), lowest 0.1
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice); //actually has it talk
}