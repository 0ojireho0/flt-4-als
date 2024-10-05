import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'

import {Button} from '@material-tailwind/react'
import axios from 'axios'

export default function LS6PreTestDigital() {
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

        if (answer1 === "D") score += 1;
        if (answer2 === "C") score += 1;
        if (answer3 === "D") score += 1;
        if (answer4 === "C") score += 1;
        if (answer5 === "A") score += 1;
        if (answer6 === "D") score += 1;

        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4, answer5, answer6])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudents', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].ls6_1 !== null){
            setAnswer1(response.data[0].ls6_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].ls6_2 !== null){
            setAnswer2(response.data[0].ls6_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].ls6_3 !== null){
            setAnswer3(response.data[0].ls6_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].ls6_4 !== null){
            setAnswer4(response.data[0].ls6_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].ls6_5 !== null){
            setAnswer5(response.data[0].ls6_5)
            setDisableAnswer5(true)
        }
        if(response.data[0].ls6_6 !== null){
            setAnswer6(response.data[0].ls6_6)
            setDisableAnswer6(true)
        }

  
  
      } catch (error) {
          console.log(error);
      }
    }



      const handleSubmitAnswers = async(e) =>{
        e.preventDefault()

        const sendAnswer = {
            answer1:answer1,
            answer2:answer2, 
            answer3:answer3,
            answer4:answer4, 
            answer5:answer5,
            answer6:answer6,
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerDigital',sendAnswer);
            console.log(response);
  

        } catch (error) {
            console.error('Error submitting answer:', error);
        }
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
                <h1 className='font-bold'> Digital Citizenship </h1>
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

    <div className='p-4 bg-gray-100 mt-3'>
        <div className='bg-white p-4 rounded-lg shadow-md  mb-6'>
            <div className='text-center'>
                <h1>LS6 Digital Citizenship </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS6.</h1>
            </div>
            <form onSubmit={handleSubmitAnswers}>
            <div className='mt-3'>
                <h1>1. Which of the following describes a computer? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. It produces many errors." value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="B. It takes a long time to operate." value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="C. It works without instruction from the user." value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="D. It works fast and performs multiple functions." value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Which is the correct order of steps in turning off a computer? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Click the start button.</h1>
                    <h1>2. Save and Close all the Applications</h1>
                    <h1>3. Click the Shutdown button.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. 3,2,1" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="B. 1,2,3" value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="C. 2,1,3" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="D. 2,3,1" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Which of the following statements about microcomputer is correct? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Calculator captures images." value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="B. Tablet PC is bigger than laptop" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="C. Desktop computer is portable" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    <Radio name='3' label="D. Smartphone is used for calls and text messages." value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Which of the following computer device is used to make copies of reports, photographs and other documents? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Mouse" value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="B. Microphone" value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="C. Printer" value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                    <Radio name='4' label="D. Speaker" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Jaf needs to scan his ID picture. What is the correct order of steps that he should follow? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Connect the scanner to the computer.</h1>
                    <h1>2. Place the picture to the scanner.</h1>
                    <h1>3. Press on the power button of the scanner</h1>
                    <h1>4. Click the scan button.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. 1, 3, 2, 4" value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="B. 3, 2, 1, 4" value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required />
                    <Radio name='5' label="C. 4, 3, 2, 1" value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="D. 2, 1, 3, 4" value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Jaime wants to save his project into a USB flash drive. What is the correct order of steps to save it? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Click File</h1>
                    <h1>2. Choose Save As</h1>
                    <h1>3. Name the file and click save</h1>
                    <h1>4. Insert the flash drive to USB slot</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. 3, 4, 2, 1" value="A" checked={answer6 == "A"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                    <Radio name='6' label="B. 2, 3, 1, 4" value="B" checked={answer6 == "B"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                    <Radio name='6' label="C. 1, 2, 3, 4" value="C" checked={answer6 == "C"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                    <Radio name='6' label="D. 4, 1, 2, 3" value="D" checked={answer6 == "D"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
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
