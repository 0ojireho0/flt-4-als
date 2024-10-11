import React, { useState } from "react";
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'

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
    // <div style={{ padding: "20px" }}>
    //   <h2>Real-Time Speech Recognition (Auto Stop)</h2>
    //   <button onClick={listening ? stopListening : startListening}>
    //     {listening ? "Stop Listening" : "Start Listening"}
    //   </button>
    //   <button className="ml-10" onClick={resetTranscript}>reset</button>
    //   <button className="ml-10" onClick={submitTranscript}>Submit</button>

    //   <div style={{ marginTop: "20px" }}>
    //     <strong>Live Transcript:</strong>
    //     <p style={{ color: "gray" }}>
    //       {finalTranscript}
    //       <span style={{ color: "blue" }}>{interimTranscript}</span>
    //     </p>
    //   </div>

    //   {error && <p style={{ color: "red" }}>{error}</p>}
    // </div>

    <div className='mt-3'>
               <p className='mt-3 font-bold'>Take note: You need to stop the record to save your audio</p>
    <h1>Look at the picture. What are the people doing in the picture? Give your answer in one complete sentence.</h1>
    <div className='border-2 p-2 flex justify-center items-center'>
        <img src={question7} alt="" />
    </div>
    <div className='w-full mt-2'>
        <Textarea label='Answer' 
        value={finalTranscript} 
        disabled
        required 
        />
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        {interimTranscript && <p>{interimTranscript}</p>}
    </div>
    {/* {audioURL && (
        <div>
            <h2>Recorded Audio:</h2>
            <audio controls src={audioURL}></audio>
            <a href={audioURL} download="recording.wav">Download Audio</a>
        </div>
    )} */}
    <div className='flex justify-end gap-2'>
        <Button size='sm' className='bg-black/30' onClick={listening ? stopListening : startListening}>{listening ? "Stop Recording" : "Record your answer"}
        </Button>
        <Button size='sm' className='bg-black/30' onClick={resetTranscript}>Reset</Button>
    </div>
</div>
  );
};

export default StudentReadingTest;
