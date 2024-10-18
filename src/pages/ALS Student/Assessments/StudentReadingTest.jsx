import React, { useEffect, useState } from "react";
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import {Radio} from "@material-tailwind/react";

const StudentReadingTest = () => {
  const [listening, setListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState(""); // Final transcript after speech ends
  const [interimTranscript, setInterimTranscript] = useState(""); // Live transcript while speaking
  const [error, setError] = useState(null);
  const [english_answer1, setEnglish_Answer1] = useState("")
  const [english_answer2, setEnglish_Answer2] = useState("")
  const [english_answer3, setEnglish_Answer3] = useState("")

  const [filipino_answer1, setFilipino_Answer1] = useState("")
  const [filipino_answer2, setFilipino_Answer2] = useState("")
  const [filipino_answer3, setFilipino_Answer3] = useState("")
  const [totalScore, setTotalScore] = useState(0)
  const [showScoreModal, setShowScoreModal] = useState(false)

  useEffect(() => {
    // Calculate score based on the selected answers
    let score = 0;

    if (english_answer1 === "A") score += 1;
    if (english_answer2 === "B") score += 1;
    if (english_answer3 === "C") score += 1;

    if (filipino_answer1 === "B") score += 1;
    if (filipino_answer2 === "C") score += 1;
    if (filipino_answer3 === "B") score += 1;

    console.log(score)
    setTotalScore(score);
}, [english_answer1, english_answer2, english_answer3, filipino_answer1, filipino_answer2, filipino_answer3 ])

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

  const handleCloseModal = () =>{
    setShowScoreModal(!showScoreModal)
    setEnglish_Answer1("")
    setEnglish_Answer2("")
    setEnglish_Answer3("")
    setFilipino_Answer1("")
    setFilipino_Answer2("")
    setFilipino_Answer3("")
  }


  return (
    <>
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
        {interimTranscript && <p>{interimTranscript}</p>}
    </div>

    <div className='flex justify-end gap-2'>
        <Button size='sm' className='bg-black/30' onClick={listening ? stopListening : startListening}>{listening ? "Stop Recording" : "Record your answer"}
        </Button>
        <Button size='sm' className='bg-black/30' onClick={resetTranscript}>Reset</Button>
    </div>

    <div>
      <h1 className='font-bold text-black/50 text-[0.8rem] mt-3'>A sentence is a group of words that makes sense. It starts with a capital letter and ends with a period, question mark, or exclamation point. For example, "The cat is sleeping." is a sentence because it makes sense and has the right punctuation. Every sentence must have a subject, which is the person or thing doing the action, and a verb, which is the action being done.</h1>
    </div>
    <div className='mt-3'>
                <h1>1. What does a sentence start with?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='english_1' label="A. A capital letter" value="A" checked={english_answer1 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer1(e.target.value)} required  />
                    <Radio name='english_1' label="B. A question mark " value="B" checked={english_answer1 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer1(e.target.value)} required  />
                    <Radio name='english_1' label="C. A comma" value="C" checked={english_answer1 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer1(e.target.value)} required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>2. What is a verb?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='english_2' label="A. The person doing the action" value="A" 
                    checked={english_answer2 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer2(e.target.value)} 
                    required  />
                    <Radio name='english_2' label="B. A The action being done " value="B" 
                    checked={english_answer2 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer2(e.target.value)} 
                    required  />
                    <Radio name='english_2' label="C. The punctuation" value="C" 
                    checked={english_answer2 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer2(e.target.value)} 
                    required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>3. Which of the following is an example of a sentence?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='english_3' label="A. The cat" value="A" 
                    checked={english_answer3 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer3(e.target.value)} 
                    required  />
                    <Radio name='english_3' label="B. Sleeping" value="B" 
                    checked={english_answer3 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer3(e.target.value)} 
                    required  />
                    <Radio name='english_3' label="C. The cat is sleeping" value="C" 
                    checked={english_answer3 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setEnglish_Answer3(e.target.value)} 
                    required />

        </div>
      </div>
      <div>
        <h1 className='font-bold text-black/50 text-[0.8rem] mt-3'>Ang Pilipinas ay isang bansang nasa Timog-Silangang Asya. Binubuo ito ng higit sa 7,000 mga pulo. Ang opisyal na wika sa Pilipinas ay Filipino at Ingles. Ang pambansang kasuotan ng mga Pilipino ay tinatawag na Barong Tagalog para sa mga lalaki at Baro’t Saya para sa mga babae. Ang Pilipinas ay mayaman sa kultura at tradisyon, at ipinagdiriwang ng mga Pilipino ang iba't ibang pista tulad ng Pista ng Panagbenga at Pahiyas.
        </h1>
    </div>
    <div className='mt-3'>
                <h1>1. Ilan ang mga pulo sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='filipino_1' label="A. Higit sa 5,000" value="A" checked={filipino_answer1 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer1(e.target.value)} required  />
                    <Radio name='filipino_1' label="B. Higit sa 7,000 " value="B" checked={filipino_answer1 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer1(e.target.value)} required  />
                    <Radio name='filipino_1' label="C. Higit sa 10,000" value="C" checked={filipino_answer1 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer1(e.target.value)} required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>2. Ano ang tawag sa pambansang kasuotan ng mga lalaki sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='filipino_2' label="A. Baro’t Saya" value="A" 
                    checked={filipino_answer2 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer2(e.target.value)} 
                    required  />
                    <Radio name='filipino_2' label="B. Kimono" value="B" 
                    checked={filipino_answer2 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer2(e.target.value)} 
                    required  />
                    <Radio name='filipino_2' label="C. Barong Tagalog" value="C" 
                    checked={filipino_answer2 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer2(e.target.value)} 
                    required />

        </div>
      </div>
      <div className='mt-3'>
                <h1>3. Anong dalawang wika ang opisyal sa Pilipinas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='filipino_3' label="A. Filipino at Kastila" value="A" 
                    checked={filipino_answer3 == "A"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer3(e.target.value)} 
                    required  />
                    <Radio name='filipino_3' label="B. Ingles at Filipino" value="B" 
                    checked={filipino_answer3 == "B"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer3(e.target.value)} 
                    required  />
                    <Radio name='filipino_3' label="C. Ingles at Hapon" value="C" 
                    checked={filipino_answer3 == "C"} 
                    // disabled={disableAnswer1} 
                    onChange={(e) => setFilipino_Answer3(e.target.value)} 
                    required />

        </div>
      </div>
      <div className="flex justify-center items-center mt-5 pb-5">
        <Button onClick={() => setShowScoreModal(!showScoreModal)}>Submit</Button>
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

export default StudentReadingTest;
