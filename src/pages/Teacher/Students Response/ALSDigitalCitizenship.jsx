// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography } from '@material-tailwind/react';
import ALSDigitalCitizenshipPostTest from './ALSDigitalCitizenshipPostTest';



export default function ALSDigitalCitizenship(){


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

  const [score, setScore] = useState(0)

  const [showPostTest, setShowPostTest] = useState(false)





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
    setAnswer1(student.ls6_1)
    setAnswer2(student.ls6_2)
    setAnswer3(student.ls6_3)
    setAnswer4(student.ls6_4)
    setAnswer5(student.ls6_5)
    setAnswer6(student.ls6_6)

    setScore(student.score_ls6_digital)
  }




  return (
    <>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-6">
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
      {/* <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active Test Period</h2>
        <h3 className="text-2xl">Pre-test</h3>
        <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded-md">Start Post-test</button>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Test Status</h2>
        <h3 className="text-2xl">Closed</h3>
        <button className="mt-2 px-4 py-2 bg-white text-red-500 rounded-md">Start Accepting Test Response</button>
      </div> */}
    </div>
    <div>
        <h1 className='text-center font-bold mb-3 text-2xl' onClick={() => setShowPostTest(!showPostTest)}>{showPostTest ? "Post Test" : "Pre Test"}</h1>
    </div>
    {showPostTest ? (
      <>
      <ALSDigitalCitizenshipPostTest />
      </>
    ) : (
      <>
      <div className='flex flex-col md:flex-row p-6 bg-gray-100'>
        {showStudentScore ? (
          <>
          <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS6 Digital Citizenship</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/6</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS6.</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Which of the following describes a computer?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. It produces many errors." disabled  />
              <Radio label="B. It takes a long time to operate."  disabled />
              <Radio label="C. It works without instruction from the user." disabled />
              <Radio label={<Typography className='text-green-500'>D. It works fast and performs multiple functions.</Typography>} checked disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Which is the correct order of steps in turning off a computer? </p>
            <div className='border-2 p-2 text-center'>
                    <h1>1. Click the start button.</h1>
                    <h1>2. Save and Close all the Applications</h1>
                    <h1>3. Click the Shutdown button.</h1>
                </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. 3,2,1"  disabled />
              <Radio label="B. 1,2,3" disabled  />
              <Radio label={<Typography className='text-green-500'>C. 2,1,3</Typography>} checked disabled />
              <Radio label="D. 2,3,1" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. Which of the following statements about microcomputer is correct?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Calculator captures images" disabled  />
              <Radio label="B. Tablet PC is bigger than laptop." disabled />
              <Radio label="C. Desktop computer is portable" disabled  />
              <Radio label={<Typography className='text-green-500'>D. Smartphone is used for calls and text messages</Typography>} checked disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. Which of the following computer device is used to make copies of reports, photographs and other documents? </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Mouse" disabled  />
              <Radio label="B. Microphone"  disabled/>
              <Radio label={<Typography className='text-green-500'>C. Printer</Typography>} checked disabled/>
              <Radio label="D. Speaker" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. Jaf needs to scan his ID picture. What is the correct order of steps that he should follow?</p>
            <div className='border-2 p-2 text-center'>
                    <h1>1. Connect the scanner to the computer.</h1>
                    <h1>2. Place the picture to the scanner.</h1>
                    <h1>3. Press on the power button of the scanner</h1>
                    <h1>4. Click the scan button.</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. 1, 3, 2, 4</Typography>} checked  disabled/>
              <Radio label="B. 3, 2, 1, 4" disabled/>
              <Radio label="C. 4, 3, 2, 1"  disabled/>
              <Radio label="D. 2, 1, 3, 4"  disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>6. Jaime wants to save his project into a USB flash drive. What is the correct order of steps to save it? </p>
            <div className='border-2 p-2 text-center'>
                    <h1>1. Click File</h1>
                    <h1>2. Choose Save As</h1>
                    <h1>3. Name the file and click save</h1>
                    <h1>4. Insert the flash drive to USB slot</h1>
                </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. 3, 4, 2, 1"  disabled/>
              <Radio label="B. 2, 3, 1, 4" disabled/>
              <Radio label="C. 1, 2, 3, 4"  disabled/>
              <Radio label={<Typography className='text-green-500'>D. 4, 1, 2, 3</Typography>} checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer6}</span></p>
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
                {student.score_ls6_digital} / 6
              </span>
            </li>
          ))}
        </ul>
      </div>

      </div>
      </>
    )}
    </>
  );
};


