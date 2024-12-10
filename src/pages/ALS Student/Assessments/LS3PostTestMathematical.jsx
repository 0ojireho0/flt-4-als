import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import axios from 'axios'

import question1 from '../../../assets/ls3-assessments/LS3 Q1.png'
import question2 from '../../../assets/ls3-assessments/LS3 Q2.png'
import question3 from '../../../assets/ls3-assessments/LS3 Q3.png'
import question4 from '../../../assets/ls3-assessments/LS3 Q4.png'
import question5 from '../../../assets/ls3-assessments/LS3 Q5.png'
import question6 from '../../../assets/ls3-assessments/LS3 Q6.png'
import question7 from '../../../assets/ls3-assessments/LS3 Q7.png'
import question8 from '../../../assets/ls3-assessments/LS3 Q8.png'

import { useNavigate } from 'react-router-dom'



export default function LS3PostTestMathematical() {
    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');
    const [answer7, setAnswer7] = useState('');
    const [answer8, setAnswer8] = useState('');

    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)
    const [disableAnswer5, setDisableAnswer5] = useState(false)
    const [disableAnswer6, setDisableAnswer6] = useState(false)
    const [disableAnswer7, setDisableAnswer7] = useState(false)
    const [disableAnswer8, setDisableAnswer8] = useState(false)

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

        if (answer1 === "D") score += 1;
        if (answer2 === "A") score += 1;
        if (answer3 === "B") score += 1;
        if (answer4 === "B") score += 1;
        if (answer5 === "A") score += 1;
        if (answer6 === "A") score += 1;
        if (answer7 === "D") score += 1;
        if (answer8 === "C") score += 1;

        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudentPosttest', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].post_test_ls3_1 !== null){
            setAnswer1(response.data[0].post_test_ls3_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].post_test_ls3_2 !== null){
            setAnswer2(response.data[0].post_test_ls3_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].post_test_ls3_3 !== null){
            setAnswer3(response.data[0].post_test_ls3_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].post_test_ls3_4 !== null){
            setAnswer4(response.data[0].post_test_ls3_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].post_test_ls3_5 !== null){
            setAnswer5(response.data[0].post_test_ls3_5)
            setDisableAnswer5(true)
        }
        if(response.data[0].post_test_ls3_6 !== null){
            setAnswer6(response.data[0].post_test_ls3_6)
            setDisableAnswer6(true)
        }
        if(response.data[0].post_test_ls3_7 !== null){
            setAnswer7(response.data[0].post_test_ls3_7)
            setDisableAnswer7(true)
        }
        if(response.data[0].post_test_ls3_8 !== null){
            setAnswer8(response.data[0].post_test_ls3_8)
            setDisableAnswer8(true)
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
            answer6: answer6,
            answer7: answer7,
            answer8: answer8,
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerMathPosttest',sendAnswer);
            console.log(response);
            alert('Great job! Your assessment has been submitted. Keep up the good work!')
            navigate('/student/posttest')

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
                <h1 className='font-bold'> Mathematical and Problem Solving Skills </h1>
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
            <form onSubmit={handleSubmitAnswers}>
            <div className='text-center'>
                <h1>LS3 Mathematical and Problem Solving Skills </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS3</h1>
            </div>
            <div className='mt-3'>
                <h1>1. What is the difference between the numbers of hearts inside the boxes?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question1} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. 17" value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="B. 13 " value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="C. 10" value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="D. 5" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Which of the following symbols must be placed in the box? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question2} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. >"  value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="B. < " value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="C. =" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="D. ≠" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. The residents of Barangay San Pedro planted 1,655 mahogany trees and 2,340 mango trees in their barangay. How many trees did they plant altogether? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question3} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. 2,795" value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="B. 3,995" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="C. 4,895" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    <Radio name='3' label="D. 5,985" value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. (250 x 40) ÷ (50 x 8) = </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question4} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. 15" value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="B. 25" value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="C. 35" value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                    <Radio name='4' label="D. 45" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Of the twelve classes of DRT High School, each class donated 45 boxes of toothpaste to an orphanage. How many boxes of toothpaste were donated in all? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question5} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. 540" value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="B. 541" value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required />
                    <Radio name='5' label="C. 542" value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="D. 543" value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Jack is planning to treat his 6 friends on his birthday. He decided to buy 3 boxes of pizza with 8 slices per box. How many slices of pizza can each of his friends have? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question6} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. 4" value="A" checked={answer6 == "A"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required  />
                    <Radio name='6' label="B. 5" value="B" checked={answer6 == "B"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required   />
                    <Radio name='6' label="C. 6" value="C" checked={answer6 == "C"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required  />
                    <Radio name='6' label="D. 7" value="D" checked={answer6 == "D"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>7. Marco bought four items from a sari-sari store. He bought the following: cooking oil at ₱35.75, canned tune at ₱28.15, tomato sauce at ₱19.50 and powdered milk at ₱123.65. How much did he pay for all the items?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question7} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='7' label="A. ₱237.75" value="A" checked={answer7 == "A"} disabled={disableAnswer7}  onChange={(e) => setAnswer7(e.target.value)} required  />
                    <Radio name='7' label="B. ₱227.50" value="B" checked={answer7 == "B"} disabled={disableAnswer7}  onChange={(e) => setAnswer7(e.target.value)} required  />
                    <Radio name='7' label="C. ₱217.15" value="C" checked={answer7 == "C"} disabled={disableAnswer7}  onChange={(e) => setAnswer7(e.target.value)} required  />
                    <Radio name='7' label="D. ₱207.05" value="D" checked={answer7 == "D"} disabled={disableAnswer7}  onChange={(e) => setAnswer7(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>8. In a fruit stand, t he ratio of mangoes to oranges in 4:3. How many oranges are there if there are 16 mangoes? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question8} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='8' label="A. 16" value="A" checked={answer8 == "A"} disabled={disableAnswer8}  onChange={(e) => setAnswer8(e.target.value)} required   />
                    <Radio name='8' label="B. 14" value="B" checked={answer8 == "B"} disabled={disableAnswer8}  onChange={(e) => setAnswer8(e.target.value)} required  />
                    <Radio name='8' label="C. 12" value="C" checked={answer8 == "C"} disabled={disableAnswer8}  onChange={(e) => setAnswer8(e.target.value)} required />
                    <Radio name='8' label="D. 10" value="D" checked={answer8 == "D"} disabled={disableAnswer8}  onChange={(e) => setAnswer8(e.target.value)} required />
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
