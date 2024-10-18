import React, { useEffect, useState } from "react";
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import {Radio} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const StudentReadingTestMath = () => {

  const [error, setError] = useState(null);
  const [answer1, setAnswer] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")

  const [correctGrammar, setCorrectGrammar] = useState(`counting is important in math when you count you start from one and keep going 1 2 3 4 5 and so on numbers can also be added together for example if you have two apples and get three more apples you now have five apples this is called addition you can also subtract which means taking away if you have five apples and eat two you will have three apples left this is called subtraction`)

  

  const [totalWrongScore, setTotalWrongScore] = useState(0)
  const [wrongWord, setwrongWord] = useState([])


  const [totalScore, setTotalScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)

  useEffect(() => {
    // Calculate score based on the selected answers
    let score = 0;

    if (answer1 === "B") score += 1;
    if (answer2 === "B") score += 1;
    if (answer3 === "A  ") score += 1;
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
      <h1 className='font-bold text-black/50 text-lg mt-3'>Math</h1>
    </div>
    <div className='border-2 p-2 flex justify-center items-center '>
        <h1 className="text-lg">Counting is important in math. When you count, you start from 1 and keep going: 1, 2, 3, 4, 5, and so on. Numbers can also be added together. For example, if you have 2 apples and get 3 more apples, you now have 5 apples. This is called addition. You can also subtract, which means taking away. If you have 5 apples and eat 2, you will have 3 apples left. This is called subtraction</h1>
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
                <h1>1. What number comes after 3 when you count?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_1' label="A. 2" value="A" checked={answer1 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="B. 4" value="B" checked={answer1 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required  />
                    <Radio name='question_1' label="C. 5" value="C" checked={answer1 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer(e.target.value)} required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>2. If you have 2 apples and get 3 more, how many apples do you have in total?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_2' label="A. 4" value="A" 
                    checked={answer2 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="B. 5" value="B" 
                    checked={answer2 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required  />
                    <Radio name='question_2' label="C. 6" value="C" 
                    checked={answer2 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer2(e.target.value)} 
                    required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>3. If you have 5 apples and eat 2, how many apples are left?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='question_3' label="A. 3" value="A" 
                    checked={answer3 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="B. 2" value="B" 
                    checked={answer3 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setAnswer3(e.target.value)} 
                    required  />
                    <Radio name='question_3' label="C. 1" value="C" 
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
        <Link to="/student/reading-test-digital"><Button>Next</Button></Link>
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

export default StudentReadingTestMath;
