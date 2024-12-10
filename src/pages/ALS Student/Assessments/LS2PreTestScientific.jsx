import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import axios from 'axios'

import q1 from "../../../assets/ls2-assessments/LS2 Q1.png"
import q2 from "../../../assets/ls2-assessments/LS2 Q2.png"
import q3 from "../../../assets/ls2-assessments/LS2 Q3.png"
import q4 from "../../../assets/ls2-assessments/LS2 Q4.png"
import q5 from "../../../assets/ls2-assessments/LS2 Q5.png"

import { useNavigate } from 'react-router-dom'

export default function LS2PreTestScientific() {


    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');


    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)
    const [disableAnswer5, setDisableAnswer5] = useState(false)

    const [totalScore, setTotalScore] = useState(0)

    const navigate = useNavigate()


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

        if (answer1 === "B") score += 1;
        if (answer2 === "C") score += 1;
        if (answer3 === "C") score += 1;
        if (answer4 === "B") score += 1;
        if (answer5 === "D") score += 1;

        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4, answer5])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudents', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].ls2_1 !== null){
            setAnswer1(response.data[0].ls2_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].ls2_2 !== null){
            setAnswer2(response.data[0].ls2_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].ls2_3 !== null){
            setAnswer3(response.data[0].ls2_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].ls2_4 !== null){
            setAnswer4(response.data[0].ls2_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].ls2_5 !== null){
            setAnswer5(response.data[0].ls2_5)
            setDisableAnswer5(true)
        }
  
  
      } catch (error) {
          console.log(error);
      }
    }



      const handleSubmitAnswers = async(e) =>{
        e.preventDefault()

        const sendAnswer = {
            answer1: answer1,
            answer2: answer2, 
            answer3:answer3,
            answer4:answer4, 
            answer5:answer5,
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerScientific',sendAnswer);
            console.log(response);
            alert('Great job! Your assessment has been submitted. Keep up the good work!')
            navigate('/student/pretest')

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
                <h1 className='font-bold'> Scientific Literacy and Critical Thinking Skills </h1>
            </div>
            <div>
            <div className="flex space-x-4">
                <div>
                <p className="text-sm text-gray-500">Current School Year</p>
                <p className="font-semibold">S.Y. 2024-2025</p>
                </div>
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
            </div>
            {/* <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div> */}
            </div>
        </div>
    </div>

    <div className='p-4 bg-gray-100 mt-3'>
        <div className='bg-white p-4 rounded-lg shadow-md  mb-6'>
            <div className='text-center'>
                <h1>LS2 Scientific Literacy and Critical Thinking Skills </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS2</h1>
            </div>
        <form onSubmit={handleSubmitAnswers}>
        <div className='mt-3'>
                <h1>1. Which solid waste management process is invloved in collection materials and converting it into new items?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                            <img src={q1} className='w-1/2' alt="" />
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Recovering" value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="B. Recycling " value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="C. Reducing" value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="D. Reusing" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. The following are some of the activities that can be done during summer <strong>EXCEPT</strong></h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                            <img src={q2} className='w-1/2' alt="" />
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Playing at the park" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                    <Radio name='2' label="B. Swimming at the beach " value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                    <Radio name='2' label="C. Planting crops in the field" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                    <Radio name='2' label="D. Selling halo-halo at the front yard" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Which of the following shows the correct way of handling flammable materials at home?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                            <img src={q3} className='w-1/2' alt="" />
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' >
                    <Radio name='3' label="A. Leaving the stove unattended when cooking." value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="B. Flammable liquid not properly labelled and stored." value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required  />
                    <Radio name='3' label="C. Keeping lighters and matches out of reach of children." value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    <Radio name='3' label="D. Candle left burning when everyone in the house is asleep." value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. What electrical energy can be transformed when we switch to the electric bulb?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                            <img src={q4} className='w-1/2' alt="" />
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Sound energy" value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="B. Light and heat energy" value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required  />
                    <Radio name='4' label="C. Light and sound energy" value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                    <Radio name='4' label="D. Chemical and sound energy" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Which of the following <strong>DOES NOT</strong> contribute to the greenhouse effect that causes climate change? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                            <img src={q5} className='w-1/2' alt="" />
                        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. Combustion of fuel" value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="B. Use of aesrosol sprays" value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required  />
                    <Radio name='5' label="C. Dust from volcanic eruptions" value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="D. Use of solar powered jeepney" value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
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
