function speak() {
    const input = document.getElementById('input');
    const text = input.value;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
