import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import axios from 'axios'

import question7 from "../../../assets/ls1-english-assessments/question7.png"


export default function LS1PreTestEnglish() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');

    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)
    const [disableAnswer5, setDisableAnswer5] = useState(false)
    const [disableAnswer6, setDisableAnswer6] = useState(false)

    const [totalScore, setTotalScore] = useState(0)

    


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setgetFirstname(user.fullname)
        setgetLRN(user.lrn)
        setGetStudentID(user.id)

        getSpecificStudents()
    }, [])

    useEffect(() => {
        // Calculate score based on the selected answers
        let score = 0;

        if (answer1 === "A") score += 1;
        if (answer2 === "B") score += 1;
        if (answer3 === "D") score += 1;
        if (answer4 === "A") score += 1;
        if (answer5 === "D") score += 1;

        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4, answer5])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudents', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].ls1_english_part1_1 !== null){
            setAnswer1(response.data[0].ls1_english_part1_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].ls1_english_part1_2 !== null){
            setAnswer2(response.data[0].ls1_english_part1_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].ls1_english_part1_3 !== null){
            setAnswer3(response.data[0].ls1_english_part1_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].ls1_english_part1_4 !== null){
            setAnswer4(response.data[0].ls1_english_part1_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].ls1_english_part1_5 !== null){
            setAnswer5(response.data[0].ls1_english_part1_5)
            setDisableAnswer5(true)
        }
        if(response.data[0].ls1_english_part2_6 !== null){
            setAnswer6(response.data[0].ls1_english_part2_6)
            setDisableAnswer6(true)
        }
  
  
      } catch (error) {
          console.log(error);
      }
    }



      const handleSubmitAnswers = async(e) =>{
        e.preventDefault()
        console.log(finalTranscript)

        const sendAnswer = {
            answer1: answer1,
            answer2: answer2, 
            answer3:answer3,
            answer4:answer4, 
            answer5:answer5,
            answer6: answer6,
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswer',sendAnswer);
            console.log(response);
  

        } catch (error) {
            console.error('Error submitting answer:', error);
        }
      }


      // Speech to Text
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
    

    


  return (
    <>
    <div className='p-4 bg-gray-100'>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center">
            <div>
                <h2 className="text-xl font-semibold">{getFirstname}</h2>
                <p className="text-gray-500">LRN: {getLRN}</p>
            </div>
            </div>
            <div className='text-center my-3'>
                <h1>Test Part</h1>
                <h1 className='font-bold'> Communication Skills (English) </h1>
            </div>
            <div>
            <div className="flex space-x-4">
                <div>
                <p className="text-sm text-gray-500">Current School Year</p>
                <p className="font-semibold">S.Y. 2022-2023</p>
                </div>
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div>
            </div>
        </div>
    </div>

    <div className='p-4 bg-gray-100 mt-3 '>
        <div className='bg-white p-4 rounded-lg shadow-md  mb-6'>
            <div className='text-center'>
                <h1>LS1 Communication Skills (English)</h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem] '>Part I. Reading</h1>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for LS1 English</h1>
            </div>
            <form onSubmit={handleSubmitAnswers}>
                <div className='mt-3'>
                    <h1>1. <span className='underline'>GREEN</span> light in the traffic sign means.</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='1' label="A. Go" value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                        <Radio name='1' label="B. Ready" value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                        <Radio name='1' label="C. Stop" value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                        <Radio name='1' label="D. Slow Down" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>2. Identify the type of sentence according to use. </h1>
                    <div className='border-2 p-2 text-center'>
                        <h1>I won the lottery!</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='2' label="A. Imperative" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                        <Radio name='2' label="B. Exclamatory" value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required/>
                        <Radio name='2' label="C. Declarative"  value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                        <Radio name='2' label="D. Interrogative" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>3. What is the main idea of the given paragraph? </h1>
                    <div className='border-2 p-2'>
                        <h1 className='text-justify'>The Sun is very important. Without it, there would be only darkness and our planet would be very cold and be without liquid water. Our planet would also be without people, animals, and plants because these things need sunlight and water to live. </h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='3' label="A. Things need sunlight to live" value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                        <Radio name='3' label="B. There would be darkness in our planet" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required/>
                        <Radio name='3' label="C. It would be very cold on Earth" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required/>
                        <Radio name='3' label="D. The importance of the Sun" value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>4. Fill in the blank with the correct word from the options below that will make the statement <strong>POSITIVE</strong>. Choose the letter of the correct answer.</h1>
                    <div className=' p-2 text-center'>
                        <h1 className=''>I will __________ eat that vegetable. It's delicious!</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='4' label="A. definitely" value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required  />
                        <Radio name='4' label="B. hardly"  value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                        <Radio name='4' label="C. never" value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                        <Radio name='4' label="D. not" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>5. What is the main idea of the given paragraph?</h1>
                    <div className='border-2 p-2'>
                        <h1 className='text-justify'>All living things are made up of cells. Since humans are alive, we are also made of cells. Our body tissues are made up of cells. Tissue makes our body organs. Organs make our body systems. Cells are the building blocks of our bodies.</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='5' label="A. Cells are building blocks of our bodies." value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required  />
                        <Radio name='5' label="B. Body tissues are made up of cells." value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required/>
                        <Radio name='5' label="C. Body organs are made up of tissue." value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                        <Radio name='5' label="D. Living things are made up of cells." value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-black/70 text-[0.8rem] '>Part II. Writing</h1>
                    <h1 className='font-bold text-black/70 text-[0.8rem]'>Directions: Read the item below. Write your answer on the blanks provided on the LS1 English answer sheet.</h1>
                </div>
                <div className='mt-3'>
                    <h1>6. Choose one (1) member of your family and write a simple sentence to describe him/her. (1 point)</h1>
                    <div className='w-full mt-2'>
                        <Textarea label='Answer' value={answer6} disabled={disableAnswer6} onChange={(e) => setAnswer6(e.target.value)} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>7. Look at the picture. What are the people doing in the picture? Give your answer in one complete sentence.</h1>
                    <div className='border-2 p-2 flex justify-center items-center'>
                        <img src={question7} alt="" />
                    </div>
                    <div className='w-full mt-2'>
                        <Textarea label='Answer' 
                        value={finalTranscript} 
                        disabled
                        required 
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {interimTranscript && <p>{interimTranscript}</p>}
                    </div>
                    <div className='flex justify-end gap-2'>
                        <Button size='sm' className='bg-black/30' onClick={listening ? stopListening : startListening}>{listening ? "Stop Recording" : "Record your answer"}
                        </Button>
                        <Button size='sm' className='bg-black/30' onClick={resetTranscript}>Reset</Button>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='flex justify-center items-center'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>





    </>
  )
}
