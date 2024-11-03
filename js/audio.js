function narrateText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'pt-BR'; 
    window.speechSynthesis.speak(speech);
}
