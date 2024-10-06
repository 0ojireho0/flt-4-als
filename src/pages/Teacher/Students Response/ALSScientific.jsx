// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';

export default function ALSScientific(){


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
    setAnswer1(student.ls2_1)
    setAnswer2(student.ls2_2)
    setAnswer3(student.ls2_3)
    setAnswer4(student.ls2_4)
    setAnswer5(student.ls2_5)
    setScore(student.score_ls2_scientific)






    
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
          <h1 className="text-sm font-bold">LS2 Scientific Literacy and Critical Thinking Skills</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/5</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS2</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Which solid waste management process is invloved in collection materials and converting it into new items?</p>
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


          
          <div className='flex justify-center'>
            <Button type='submit'>Submit</Button>
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
                {student.score_ls1_english} / 6
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


