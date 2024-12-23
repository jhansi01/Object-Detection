// Function to provide voice instructions
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
  
  // Provide initial instructions when the page loads
  window.onload = function() {
    speak("Move right to detect object, move left to detect text.");
  };
  
  // Provide voice instructions ba sed on slider value
  document.getElementById('optionSlider').addEventListener('input', function() {
    const value = this.value;
    if (value == 1) {
      speak("You are on the right. Move left to detect text.");
    } else if (value == 0) {
      speak("You are on the left. Move right to detect object.");
    }
  });
  
  // Example: Start Detection Button
  document.getElementById('startButton').addEventListener('click', function() {
    speak("Detection started.");
  });
  