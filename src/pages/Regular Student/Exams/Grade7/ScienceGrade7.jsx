import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import axios from 'axios'




export default function ScienceGrade7() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');


    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)


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

        if (answer1 === "C") score += 1;
        if (answer2 === "C") score += 1;
        if (answer3 === "B") score += 1;

        setTotalScore(score);
        console.log(score)
    }, [answer1, answer2, answer3])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/get-teacher-teachername', { params: { regular_student_id: parseInt(user.id), regular_teacher_id: parseInt(user.regular_teacher_id) } });
          console.log(response.data.details[0])

        if(response.data.details[0].science_1 !== null){
            setAnswer1(response.data.details[0].science_1)
            setDisableAnswer1(true)
        }
        if(response.data.details[0].science_2 !== null){
            setAnswer2(response.data.details[0].science_2)
            setDisableAnswer2(true)
        }
        if(response.data.details[0].science_3 !== null){
            setAnswer3(response.data.details[0].science_3)
            setDisableAnswer3(true)
        }

  
  
  
      } catch (error) {
          console.log(error);
      }
    }



    const handleSubmitAnswers = async (e) => {
        e.preventDefault();
    


        const sendAnswer = {
            answer1: answer1,
            answer2: answer2, 
            answer3:answer3,
            student_id: getStudentID,
            total: totalScore
        }
        // console.log(sendAnswer)
    




    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentsAnswersScience', sendAnswer, {
            });
            console.log(response);
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    };
    


    

    


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
                <h1>Periodic Exam Part</h1>
                <h1 className='font-bold'> Science </h1>
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
                <h1>Science</h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for Science</h1>
            </div>
            <form onSubmit={handleSubmitAnswers}>
                <div className='mt-3'>
                    <h1>1. Which part of the plant is responsible for photosynthesis?</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='1' label="A. Roots" value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                        <Radio name='1' label="B. Stem" value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                        <Radio name='1' label="C. Leaves" value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                        <Radio name='1' label="D. Flowers" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>2. What is the most abundant gas in Earth's atmosphere? </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='2' label="A. Oxygen" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                        <Radio name='2' label="B. Carbon Dioxide" value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required/>
                        <Radio name='2' label="C. Nitrogen"  value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                        <Radio name='2' label="D. Hydrogen" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required/>
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>3. Which type of rock is formed by the cooling and solidification of magma or lava? </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='3' label="A. Sedimentary" value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                        <Radio name='3' label="B. Igneous" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required/>
                        <Radio name='3' label="C. Metamorphic" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required/>
                        <Radio name='3' label="D. Fossilized" value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required/>
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
