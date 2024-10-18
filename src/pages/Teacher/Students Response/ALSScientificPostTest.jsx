import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';

import question1 from "../../../assets/ls2-assessments/LS2 Q1.png"
import question2 from "../../../assets/ls2-assessments/LS2 Q2.png"
import question3 from "../../../assets/ls2-assessments/LS2 Q3.png"
import question4 from "../../../assets/ls2-assessments/LS2 Q4.png"
import question5 from "../../../assets/ls2-assessments/LS2 Q5.png"



export default function ALSScientificPostTest() {

  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [answer5, setAnswer5] = useState("")
  const [score, setScore] = useState(0)

  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students-posttest', { params: { teacherId: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
      console.log(response)
  } catch (error) {
      console.log(error);
  }
}

  useEffect(()=>{
    


      getSpecificStudents()

  },[])

  const handleGetStudentScore = (student) =>{
    console.log(student)
    setshowStudentScore(true)
    setfullname(student.fullname)
    setAnswer1(student.post_test_ls2_1)
    setAnswer2(student.post_test_ls2_2)
    setAnswer3(student.post_test_ls2_3)
    setAnswer4(student.post_test_ls2_4)
    setAnswer5(student.post_test_ls2_5)
    setScore(student.post_test_score_ls2_scientific)
  }
  return (
    <>
    <div className='flex flex-col md:flex-row p-6 bg-gray-100'>
      {showStudentScore ? (
        <>
        <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS2 Scientific Literacy and Critical Thinking Skills</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/5</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS2</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Which solid waste management process is invloved in collection materials and converting it into new items?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question1} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Recovering" disabled  />
              <Radio label={<Typography className='text-green-500'>B. Recycling</Typography>} checked disabled />
              <Radio label="C. Reducing" disabled />
              <Radio label="D. Reusing" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. The following are some of the activities that can be done during summer <strong>EXCEPT</strong></p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question2} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Playing at the park" disabled />
              <Radio label="B. Swimming at the beach" disabled  />
              <Radio label={<Typography className='text-green-500'>C. Planting crops in the field</Typography>} checked disabled />
              <Radio label="D. Selling halo-halo at the front yard" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. Which of the following shows the correct way of handling flammable materials at home?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question3} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Leaving the stove unattended when cooking." disabled />
              <Radio label="B. Flammable liquid not properly labelled and stored." disabled />
              <Radio label={<Typography className='text-green-500'>C. Keeping lighters and matches out of reach of children.</Typography>} disabled checked />
              <Radio label="D. Candle left burning when everyone in the house is asleep." disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. What electrical energy can be transformed when we switch to the electric bulb?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question4} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Sound energy" disabled  />
              <Radio label={<Typography className='text-green-500'>B. Light and heat energy</Typography>} checked disabled/>
              <Radio label="C. Light and sound energy" disabled/>
              <Radio label="D. Chemical and sound energy" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. Which of the following <strong>DOES NOT</strong> contribute to the greenhouse effect that causes climate change?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question5} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Combustion of fuel" disabled/>
              <Radio label="B. Use of aesrosol sprays" disabled/>
              <Radio label="C. Dust from volcanic eruptions" disabled/>
              <Radio label={<Typography className='text-green-500'>D. Use of solar powered jeepney</Typography>} checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>


        </form>

            </div>
        </>
      ) : (
        <>
        <div className='text-center w-full'>Select Student to show score</div>
        </>
        )}
        <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
          {getAllStudents.map((student, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => handleGetStudentScore(student)}>
              <div >
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
              </div>
              <span className="text-sm font-semibold">
                {student.post_test_score_ls2_scientific} / 5
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>


    </>
  )
}
