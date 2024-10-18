import React, { useEffect, useState } from "react";
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import {Radio} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const StudentReadingEnglish = () => {

  const [error, setError] = useState(null);
  const [answer1, setAnswer] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")

  const [correctGrammar, setCorrectGrammar] = useState(`a sentence is a group of words that makes sense it starts with a capital letter and ends with a period question mark or exclamation point for example the cat is sleeping is a sentence because it makes sense and has the right punctuation every sentence must have a subject which is the person or thing doing the action and a verb which is the action being done`)

  

  const [totalWrongScore, setTotalWrongScore] = useState(0)
  const [wrongWord, setwrongWord] = useState([])


  const [totalScore, setTotalScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)

  useEffect(() => {
    // Calculate score based on the selected answers
    let score = 0;

    if (answer1 === "A") score += 1;
    if (answer2 === "B") score += 1;
    if (answer3 === "C  ") score += 1;
    // console.log(score)
    setTotalScore(score);
}, [answer1, answer2, answer3])


  const [listening, setListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState(""); // Final transcript after speech ends
  const [interimTranscript, setInterimTranscript] = useState(""); // Live transcript while speaking

  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition1 = new SpeechRecognition();

  [recognition1].forEach((recognition) => {
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

          // Stop recognition when the user stops speaking
    recognition1.onspeechend = () => stopListening();

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

    const finalWords = finalTranscript.split(' ');
    const grammarWords = correctGrammar.split(' ');
    let score = 0
    let wrong = []
  
    console.log("Length of final words:", finalWords.length);
    console.log("Length of correct grammar words:", grammarWords.length);
  
    for (let i = 0; i < grammarWords.length; i++) {
      if (finalWords[i] !== grammarWords[i]) {
        console.log("Wrong word:", finalWords[i] || "(no word)");
        score += 1
        wrong.push(finalWords[i])
      }
    }
    console.log(wrong)
    setTotalWrongScore(score)
    setwrongWord(wrong)


    setListening(false);
    setInterimTranscript(""); // Clear interim transcript when stopping
    };
  const resetTranscript = () => {
    setFinalTranscript("");
    setInterimTranscript("");
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
      <h1 className='font-bold text-black/50 text-lg mt-3'>English</h1>
    </div>
    <div className='border-2 p-2 flex justify-center items-center '>
        <h1 className="text-lg">A sentence is a group of words that makes sense. It starts with a capital letter and ends with a period, question mark, or exclamation point. For example, "The cat is sleeping." is a sentence because it makes sense and has the right punctuation. Every sentence must have a subject, which is the person or thing doing the action, and a verb, which is the action being done.</h1>
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
    <div>
      <h1>Score for Wrong word: {totalWrongScore}</h1>
      <h1>Wrong Words: {wrongWord.map((wrong)=>{
        return(
          <h1 className="">{wrong}</h1>
        )
      })}</h1>
    </div>
    <div className='mt-3'>
                <h1>1. What does a sentence start with?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_1' label="A. A capital letter" value="A" checked={answer1 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="B. A question mark" value="B" checked={answer1 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="C. A comma" value="C" checked={answer1 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>2. What is a verb?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_2' label="A. The person doing the action" value="A" 
                    checked={answer2 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="B. The action being done" value="B" 
                    checked={answer2 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="C. The punctuation" value="C" 
                    checked={answer2 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>3. Which of the following is an example of a sentence?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_3' label="A. The cat" value="A" 
                    checked={answer3 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="B. Sleeping" value="B" 
                    checked={answer3 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="C. The cat is sleepingfe" value="C" 
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
        <Link to="/student/reading-test-uts"><Button>Next</Button></Link>
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

export default StudentReadingEnglish;
