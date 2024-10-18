// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';
import question7 from "../../../assets/ls1-english-assessments/question7.png"
import question8 from "../../../assets/ls1-english-assessments/Childhoood_Bullying.mp3"
import ALSComEnglishPostTest from './ALSComEnglishPostTest';

import question1 from "../../../assets/ls1-english-assessments/LS1 Q1.png"
import question2 from "../../../assets/ls1-english-assessments/LS1 Q2.png"
import question4 from "../../../assets/ls1-english-assessments/LS1 Q4.png"
import question5 from "../../../assets/ls1-english-assessments/LS1 Q5.png"


export default function ALSComEnglish(){


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
  const [addScoreNumber6, setaddScoreNumber6] = useState("")
  const [addScoreNumber7, setaddScoreNumber7] = useState("")
  const [addScoreNumber8, setaddScoreNumber8] = useState("")
  const [getStudentID, setGetStudentID] = useState(0)
  const [getTeacherID, setGetTeacherID] = useState(0)
  const [disableScoreNumber6, setDisableScoreNumber6] = useState(false)
  const [disableScoreNumber7, setDisableScoreNumber7] = useState(false)
  const [disableScoreNumber8, setDisableScoreNumber8] = useState(false)
  const [audioURL, setAudioURL] = useState(null);
  const [audioURL2, setAudioURL2] = useState(null)
  const [disableButton, setDisableButton] = useState(false)
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
    setAnswer1(student.ls1_english_part1_1)
    setAnswer2(student.ls1_english_part1_2)
    setAnswer3(student.ls1_english_part1_3)
    setAnswer4(student.ls1_english_part1_4)
    setAnswer5(student.ls1_english_part1_5)
    setAnswer6(student.ls1_english_part2_6)
    setAnswer7(student.ls1_english_part3_7)
    setAnswer8(student.ls1_english_part3_8)
    setScore(student.score_ls1_english)
    setGetStudentID(student.students_id)
    setGetTeacherID(student.teacher_id)
    setAudioURL(student.audio_ls1_english_part3_7)
    setAudioURL2(student.audio_ls1_english_part3_8)


    if(student.submit_finalscore_ls1english !== null){
      setaddScoreNumber6(student.submit_finalscore_ls1english)
      setDisableScoreNumber6(true)
    }else{
      setaddScoreNumber6(null)
      setDisableScoreNumber6(false)
    }

    if(student.submit_finalscore_ls1english_part7 !== null){
      setaddScoreNumber7(student.submit_finalscore_ls1english_part7)
      setDisableScoreNumber7(true)
    }else{
      setaddScoreNumber7(null)
      setDisableScoreNumber7(false)
    }

    if(student.submit_finalscore_ls1english_part8 !== null){
      setaddScoreNumber8(student.submit_finalscore_ls1english_part8)
      setDisableScoreNumber8(true)
    }else{
      setaddScoreNumber8(null)
      setDisableScoreNumber8(false)
    }

    if(student.submit_finalscore_ls1english !== null && student.submit_finalscore_ls1english_part7 !== null & student.submit_finalscore_ls1english_part8 !== null){
      setDisableButton(true)
    }else{
      setDisableButton(false)
    }

    




    
  }

  const handleSubmitScore = async(e) =>{
    e.preventDefault()
    console.log(addScoreNumber8)

    const numericAddScoreNumber6 = Number(addScoreNumber6);
    const numericAddScoreNumber7 = Number(addScoreNumber7);
    const numericAddScoreNumber8 = Number(addScoreNumber8)
    const numericScore = Number(score);

    const totalScore = numericAddScoreNumber6 + numericAddScoreNumber7 + numericScore + numericAddScoreNumber8; 

    const sendScore = {
      student_id: getStudentID,
      total: totalScore
  }

  const submitData = {
    students_id: getStudentID,
    teacher_id: getTeacherID,
    addScoreNumber6: parseInt(addScoreNumber6),
    addScoreNumber7: parseInt(addScoreNumber7),
    addScoreNumber8: parseInt(addScoreNumber8)
    
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/submitStudentScoreLS1English',sendScore);
    // console.log(response);

    if(response.status == 200){
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/submit-score-ls1english', submitData)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
    
    
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
        <h3 className="text-2xl">S.Y. 2024-2025</h3>
        {/* <p className="text-sm">Date: July 24, 2023</p> */}
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
        <ALSComEnglishPostTest />

        </>
      ) : (
        <>
        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        {showStudentScore ? (
          <>
          <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS1 COMMUNICATION SKILLS (ENGLISH)</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/6</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Part I. Reading</h2>
          <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for LS1 English.</p>
        </div>


          <form onSubmit={handleSubmitScore}>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. <span className='underline'>Green</span> light in the traffic means _______.</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question1} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. Go</Typography>} disabled checked />
              <Radio label="B. Ready" disabled />
              <Radio label="C. Stop" disabled />
              <Radio label="D. Slow Down" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Identify the type of sentence according to use.</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question2} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Imperative" disabled />
              <Radio label={<Typography className='text-green-500'>B. Exclamatory</Typography>} disabled checked />
              <Radio label="C. Declarative" disabled />
              <Radio label="D. Interrogative" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. What is the main idea of the given paragraph?</p>
            <div className='border-2 p-2 text-center'>
                <h1>The Sun is very important. Without it, there would be only darkness and our planet would be very cold and be without liquid water. Our planet would also be without people, animals, and plants because these things need sunlight and water to live.</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Things need sunlight to live" disabled />
              <Radio label="B. There would be darkness in our planet" disabled />
              <Radio label="C. It would be very cold on Earth" disabled />
              <Radio label={<Typography className='text-green-500'>D. The importance of the Sun</Typography>} disabled checked />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. Fill in the blank with the correct word from the options below that will make the statement <strong>POSITIVE</strong>. Choose the letter of the correct answer.</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question4} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. definitely</Typography>} disabled checked />
              <Radio label="B. hardly" disabled/>
              <Radio label="C. never" disabled/>
              <Radio label="D. not" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. What is the main idea of the given paragraph?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question5} className='w-1/2' alt="" />
            </div>
            <div className='border-2 p-2 text-center'>
                <h1>All living things are made up of cells. Since humans are alive, we are also made of cells. Our body tissues are made up of cells. Tissue makes our body organs. Organs make our body systems. Cells are the building blocks of our bodies.</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Cells are building blocks of our bodies." disabled/>
              <Radio label="B. Body tissues are made up of cells." disabled/>
              <Radio label="C. Body organs are made up of tissue." disabled/>
              <Radio label={<Typography className='text-green-500'>D. Living things are made up of cells.</Typography>} checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>6. Choose one (1) member of your family and write a simple sentence to describe him/her. (1 point)</p>
            <div className='w-full mt-2'>
              <Textarea label='Student Answer' disabled value={answer6 == null ? "" : answer6} />
            </div>
            <div className='flex justify-end'>
              <Radio name='6' label="1 point" value={1} checked={addScoreNumber6 == "1"} disabled={disableScoreNumber6} onChange={(e) =>setaddScoreNumber6(e.target.value)} />
              <Radio name='6' label="0 point" value={0} checked={addScoreNumber6 == "0"} disabled={disableScoreNumber6} onChange={(e) =>setaddScoreNumber6(e.target.value)} />
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>7. Look at the picture. What are the people doing in the picture? Give your answer in one complete sentence.</p>
            <div className='border-2 p-2 flex justify-center items-center'>
                <img src={question7} alt="" />
            </div>
            <div className='w-full mt-2'>
              <Textarea label='Student Answer' disabled value={answer7 == null ? "" : answer7} />
            </div>
            {audioURL ? (
                <div>
                    <h2>Audio Recording:</h2>
                    <audio controls>
                        <source src={audioURL} type="audio/webm" />
                        Your browser does not support the audio tag.
                    </audio>
                    {/* <a href={audioURL} download="audio_recording.webm">Download Audio</a> */}
                </div>
            ) : (
                <p>Student is not answering number 7</p>
            )}
            <div className='flex justify-end'>
              <Radio name='7' label="1 point" value={1} checked={addScoreNumber7 == "1"} disabled={disableScoreNumber7} onChange={(e) =>setaddScoreNumber7(e.target.value)} />
              <Radio name='7' label="0 point" value={0} checked={addScoreNumber7 == "0"} disabled={disableScoreNumber7} onChange={(e) =>setaddScoreNumber7(e.target.value)} />
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>8. I will read an article. Listen carefully and try to understand what it means. Then explain what you understand, using at least (1) complete sentence. (Read the article slowly, and then use the Audio to save your voice). (1 point)</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <audio controls src={question8}></audio>
            </div>
            <div className='w-full mt-2'>
              <Textarea label='Student Answer' disabled value={answer8 == null ? "" : answer8} />
            </div>
            {audioURL2 ? (
                <div>
                    <h2>Audio Recording:</h2>
                    <audio controls>
                        <source src={audioURL2} type="audio/webm" />
                        Your browser does not support the audio tag.
                    </audio>
                    {/* <a href={audioURL2} download="audio_recording.webm">Download Audio</a> */}
                </div>
            ) : (
                <p>Student is not answering number 8</p>
            )}
            <div className='flex justify-end'>
              <Radio name='8' label="1 point" value={1} checked={addScoreNumber8 == "1"} disabled={disableScoreNumber8} onChange={(e) =>setaddScoreNumber8(e.target.value)} />
              <Radio name='8' label="0 point" value={0} checked={addScoreNumber8 == "0"} disabled={disableScoreNumber8} onChange={(e) =>setaddScoreNumber8(e.target.value)} />
            </div>
          </div>
          
          <div className='flex justify-center'>
            <Button type='submit' disabled={disableButton}>Submit</Button>
          </div>
        </form>
        </div>
          </>
        ) : (
          <div className='text-center w-full'>Select Student to show score</div>
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
                {student.score_ls1_english} / 6
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


