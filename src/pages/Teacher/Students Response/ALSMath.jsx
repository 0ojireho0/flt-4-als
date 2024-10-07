// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';
import question1 from '../../../assets/ls3-assessments/question1.png'
import question2 from '../../../assets/ls3-assessments/question2.png'

export default function ALSMath(){


  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [answer5, setAnswer5] = useState("")
  const [answer6, setAnswer6] = useState("")
  const [answer7, setAnswer7] = useState("")
  const [answer8, setAnswer8] = useState("")
  const [score, setScore] = useState(0)





  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
      console.log(response)
  } catch (error) {
      console.log(error);
  }
}

  useEffect(()=>{
    
    const user = JSON.parse(localStorage.getItem('user'))


    if(user == null || user.user_type !== "ALS Teacher"){
        navigate('/teacher/sign-in')
      }

      getSpecificStudents()

  },[])

  const handleGetStudentScore = (student) =>{
    console.log(student)
    setshowStudentScore(true)
    setfullname(student.fullname)
    setAnswer1(student.ls3_1)
    setAnswer2(student.ls3_2)
    setAnswer3(student.ls3_3)
    setAnswer4(student.ls3_4)
    setAnswer5(student.ls3_5)
    setAnswer6(student.ls3_6)
    setAnswer7(student.ls3_7)
    setAnswer8(student.ls3_8)
    setScore(student.score_ls3_math)







    
  }




  return (
    <>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active ALS Student</h2>
        <h3 className="text-2xl">{getActiveStudents} Active</h3> {/* {getActiveStudents} */}
        {/* <p className="text-sm">{getAllStudent.length} Registered ALS Student/s</p> */}
      </div>
      <div className="bg-orange-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Current School Year</h2>
        <h3 className="text-2xl">S.Y. 2022-2023</h3>
        <p className="text-sm">Date: July 24, 2023</p>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active Test Period</h2>
        <h3 className="text-2xl">Pre-test</h3>
        <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded-md">Start Post-test</button>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Test Status</h2>
        <h3 className="text-2xl">Closed</h3>
        <button className="mt-2 px-4 py-2 bg-white text-red-500 rounded-md">Start Accepting Test Response</button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      {/* Left Container */}
      <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">

      {/* Header */}
      {showStudentScore ? (
        <>
        <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS3 Mathematical and Problem Solving Skills</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/8</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS3</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. What is the difference between the numbers of hearts inside the boxes?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question1} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. 17" disabled  />
              <Radio label="B. 13" checked disabled />
              <Radio label="C. 10" disabled />
              <Radio label={<Typography className='text-green-500'>D. 5</Typography>} disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Which of the following symbols must be placed in the box? </p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question2} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. {'>'}</Typography>} checked disabled />
              <Radio label="B. <" disabled  />
              <Radio label="C. =" disabled />
              <Radio label="D. ≠" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. The residents of Barangay San Pedro planted 1,655 mahogany trees and 2,340 mango trees in their barangay. How many trees did they plant altogether?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. 2,795" disabled />
              <Radio label={<Typography className='text-green-500'>C. 3,995</Typography>} disabled checked />
              <Radio label="C. 4,895" disabled checked />
              <Radio label="D. 5,985" disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. (250 x 40) ÷ (50 x 8) = </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. 15" disabled  />
              <Radio label={<Typography className='text-green-500'>B. 25</Typography>} checked disabled/>
              <Radio label="C. 35" disabled/>
              <Radio label="D. 45" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. Of the twelve classes of DRT High School, each class donated 45 boxes of toothpaste to an orphanage. How many boxes of toothpaste were donated in all?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>D. 540</Typography>} checked disabled/>
              <Radio label="B. 541" disabled/>
              <Radio label="C. 542" disabled/>
              <Radio label="D. 543"  disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>6. Jack is planning to treat his 6 friends on his birthday. He decided to buy 3 boxes of pizza with 8 slices per box. How many slices of pizza can each of his friends have?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>D. 4</Typography>} checked disabled/>
              <Radio label="B. 5" disabled/>
              <Radio label="C. 6" disabled/>
              <Radio label="D. 7" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>7. Marco bought four items from a sari-sari store. He bought the following: cooking oil at ₱35.75, canned tune at ₱28.15, tomato sauce at ₱19.50 and powdered milk at ₱123.65. How much did he pay for all the items?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. ₱237.75" disabled/>
              <Radio label="B. ₱227.50" disabled/>
              <Radio label="C. ₱217.15" disabled/>
              <Radio label={<Typography className='text-green-500'>D. ₱207.05</Typography>} checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>8. In a fruit stand, t he ratio of mangoes to oranges in 4:3. How many oranges are there if there are 16 mangoes? </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>D. 16</Typography>}  disabled/>
              <Radio label="B. 14" disabled/>
              <Radio label="C. 12" disabled/>
              <Radio label="D. 10" checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>


      
        </form>

        </>
      ) : (
        <div className='text-center'>Select Student to show score</div>
      )}

 
      </div>

      {/* Right Container - Masterlist */}
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
                {student.score_ls3_math} / 8
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


