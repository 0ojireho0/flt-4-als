import React, { useState } from "react";

const StudentReadingTest = () => {
  const [listening, setListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState(""); // Final transcript after speech ends
  const [interimTranscript, setInterimTranscript] = useState(""); // Live transcript while speaking
  const [error, setError] = useState(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true; // Continue listening until explicitly stopped
  recognition.interimResults = true; // Enable interim results for real-time transcription
  recognition.lang = "en-US"; // Set the language (you can change this as needed)

  // Capture speech results
  recognition.onresult = (event) => {
    let interimText = "";
    let finalText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;

      if (event.results[i].isFinal) {
        // If the result is final, update the final transcript
        finalText += transcript + " ";
      } else {
        // If the result is not final, update the interim transcript
        interimText += transcript;
      }
    }

    setFinalTranscript((prev) => prev + finalText); // Append to final transcript
    setInterimTranscript(interimText); // Update interim transcript in real-time
  };

  // Handle errors
  recognition.onerror = (event) => {
    setError("Error occurred in speech recognition: " + event.error);
    setListening(false);
  };

  // Stop recognition when the user stops speaking
  recognition.onspeechend = () => {
    stopListening();
  };

  // Start speech recognition
  const startListening = () => {
    recognition.start();
    setListening(true);
    setError(null);
  };

  // Stop speech recognition
  const stopListening = () => {
    recognition.stop();
    setListening(false);
    setInterimTranscript(""); // Clear interim transcript when stopping
  };

  const resetTranscript = () =>{
    setFinalTranscript('')
  }

  const submitTranscript = () =>{
    console.log(finalTranscript)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Real-Time Speech Recognition (Auto Stop)</h2>
      <button onClick={listening ? stopListening : startListening}>
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
      <button className="ml-10" onClick={resetTranscript}>reset</button>
      <button className="ml-10" onClick={submitTranscript}>Submit</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Live Transcript:</strong>
        <p style={{ color: "gray" }}>
          {finalTranscript}
          <span style={{ color: "blue" }}>{interimTranscript}</span>
        </p>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default StudentReadingTest;
