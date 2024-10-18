import React, { useEffect, useState } from "react";
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import {Radio} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const StudentReadingTestFilipino = () => {

  const [error, setError] = useState(null);
  const [answer1, setAnswer] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")


  const [totalScore, setTotalScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)

  useEffect(() => {
    // Calculate score based on the selected answers
    let score = 0;

    if (answer1 === "B") score += 1;
    if (answer2 === "C") score += 1;
    if (answer3 === "B") score += 1;
    console.log(score)
    setTotalScore(score);
}, [answer1, answer2, answer3])


  const [listening, setListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState(""); // Final transcript after speech ends
  const [interimTranscript, setInterimTranscript] = useState(""); // Live transcript while speaking

  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition1 = new SpeechRecognition();
  const recognition2 = new SpeechRecognition();

  [recognition1, recognition2].forEach((recognition) => {
    recognition.continuous = true; // Continue listening until explicitly stopped
    recognition.interimResults = true; // Enable interim results for real-time transcription
    recognition.lang = "en-US"; // Set the language (you can change this as needed)
    });

  // Capture speech results
  recognition1.onresult = (event) => {
    let interimText = "";
    let finalText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
        finalText += transcript + " ";
        } else {
        interimText += transcript;
        }
    }

    setFinalTranscript((prev) => prev + finalText); // Append to final transcript
    setInterimTranscript(interimText); // Update interim transcript in real-time
    };

    // Capture speech results for second listener
    recognition2.onresult = (event) => {
      let interimText = "";
      let finalText = "";
  
      for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
  
          if (event.results[i].isFinal) {
          finalText += transcript + " ";
          } else {
          interimText += transcript;
          }
      }
  
      setFinalTranscript2((prev) => prev + finalText); // Append to final transcript
      setInterimTranscript2(interimText); // Update interim transcript in real-time
      };

    // Handle errors
    recognition1.onerror = (event) => {
      setError("Error occurred in speech recognition: " + event.error);
      setListening(false);
      };

      recognition2.onerror = (event) => {
        setError2("Error occurred in speech recognition: " + event.error);
        setListening2(false);
        };

          // Stop recognition when the user stops speaking
    recognition1.onspeechend = () => stopListening();
    recognition2.onspeechend = () => stopListening2();

    // Start/Stop speech recognition
    const startListening = () => {
      recognition1.start();
      // startRecording(setMediaRecorder, setAudioChunks);
      setListening(true);
      console.log(listening)
      setError(null);
      };

  const stopListening = () => {
    recognition1.stop();
    // stopRecording(mediaRecorder);
    setListening(false);
    setInterimTranscript(""); // Clear interim transcript when stopping
    };
  const resetTranscript = () => {
    setFinalTranscript("");
    setInterimTranscript("");
    };
  const startListening2 = () => {
    recognition2.start();
    // startRecording(setMediaRecorder2, setAudioChunks2);
    setListening2(true);
    setError2(null);
    };    
  const stopListening2 = () => {
    recognition2.stop();
    // stopRecording(mediaRecorder2);
    setListening2(false);
    setInterimTranscript2(""); // Clear interim transcript when stopping
    };
  const resetTranscript2 = () => {
    setFinalTranscript2("");
    setInterimTranscript2("");
    };

  const handleCloseModal = () =>{
    setShowScoreModal(!showScoreModal)
    setAnswer("")
    setAnswer2("")
    setAnswer3("")
    setFilipino_Answer1("")
    setFilipino_setAnswer("")
    setFilipino_Answer3("")
  }


  return (
    <>
    <div className='mt-3'>
      <h1 className="text-lg text-center font-bold md:text-xl lg:text-2xl">LETS PRACTICE!</h1>
      <p className='mt-3 font-bold'>Take note: You need to stop the record to save your audio</p>
    <h1>Look at the picture. What are the people doing in the picture? Give your answer in one complete sentence.</h1>
    <div>
      <h1 className='font-bold text-black/50 text-lg mt-3'>Filipino</h1>
    </div>
    <div className='border-2 p-2 flex justify-center items-center '>
        <h1 className="text-lg">Ang Pilipinas ay isang bansang nasa Timog-Silangang Asya. Binubuo ito ng higit sa 7,000 mga pulo. Ang opisyal na wika sa Pilipinas ay Filipino at Ingles. Ang pambansang kasuotan ng mga Pilipino ay tinatawag na Barong Tagalog para sa mga lalaki at Baro’t Saya para sa mga babae. Ang Pilipinas ay mayaman sa kultura at tradisyon, at ipinagdiriwang ng mga Pilipino ang iba't ibang pista tulad ng Pista ng Panagbenga at Pahiyas.</h1>
    </div>
    <div className='w-full mt-2'>
        <Textarea label='Answer' 
        value={finalTranscript} 
        disabled
        required 
        />
        {interimTranscript && <p>{interimTranscript}</p>}
    </div>

    <div className='flex justify-end gap-2'>
        <Button size='sm' className='bg-black/30' onClick={listening ? stopListening : startListening}>{listening ? "Stop Recording" : "Record your answer"}
        </Button>
        <Button size='sm' className='bg-black/30' onClick={resetTranscript}>Reset</Button>
    </div>
    <div className='mt-3'>
                <h1>1. Ilan ang mga pulo sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_1' label="A. Higit sa 5,000" value="A" checked={answer1 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="B. Higit sa 7,000 " value="B" checked={answer1 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="C. Higit sa 10,000" value="C" checked={answer1 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>2. Ano ang tawag sa pambansang kasuotan ng mga lalaki sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_2' label="A. Baro’t Saya" value="A" 
                    checked={answer2 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="B. Kimono" value="B" 
                    checked={answer2 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="C. Barong Tagalog" value="C" 
                    checked={answer2 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>3. Anong dalawang wika ang opisyal sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_3' label="A. Filipino at Kastila" value="A" 
                    checked={answer3 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="B. Ingles at Filipino" value="B" 
                    checked={answer3 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="C. Ingles at Hapon" value="C" 
                    checked={answer3 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required />

        </div>
      </div>
      <div className="flex justify-center items-center mt-5 pb-5">
        <Button onClick={() => setShowScoreModal(!showScoreModal)}>Submit</Button>
      </div>
      <div className="flex justify-end items-center mt-5 pb-5">
        <Link to="/student/reading-test-filipino"><Button>Next</Button></Link>
      </div>


</div>

  {showScoreModal && (
    <div className="w-full pr-3">
      <div className="fixed top-0 left-0 h-full w-full bg-black/50 flex justify-center items-center">
        <div className="flex flex-col w-[30rem] h-[20rem] bg-white">
          <div className="flex justify-end mr-5">
            <p className="text-2xl cursor-pointer" onClick={handleCloseModal}>x</p>
          </div>
          <div className="h-full flex justify-center items-center">
            <h1 className="text-3xl font-bold">Your Score: {totalScore}</h1>
          </div>
        </div>
      </div>

    </div>
  )}




    </>

    



  );
};

export default StudentReadingTestFilipino;
