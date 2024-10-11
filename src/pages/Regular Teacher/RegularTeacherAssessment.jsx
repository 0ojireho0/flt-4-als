// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';


export default function RegularTeacherAssessment(){


  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [showPostTest, setShowPostTest] = useState(false)
  const [score, setScore] = useState(0)


  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-teacher-teachernames', { params: { regular_teacher_id: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
      console.log(response.data)
  } catch (error) {
      console.log(error);
  }
}

  useEffect(()=>{
    
    // const user = JSON.parse(localStorage.getItem('user'))


    // if(user == null || user.user_type !== "ALS Teacher"){
    //     navigate('/teacher/sign-in')
    //   }

      getSpecificStudents()

  },[])

  const handleGetStudentScore = (student) =>{
    console.log(student)
    setshowStudentScore(true)
    setfullname(student.fullname)
    setAnswer1(student.english_1)
    setAnswer2(student.english_2)
    setAnswer3(student.english_3)
    setScore(student.score_english)




    




    
  }

//   const handleSubmitScore = async(e) =>{
//     e.preventDefault()
//     console.log(addScoreNumber8)

//     const numericAddScoreNumber6 = Number(addScoreNumber6);
//     const numericAddScoreNumber7 = Number(addScoreNumber7);
//     const numericAddScoreNumber8 = Number(addScoreNumber8)
//     const numericScore = Number(score);

//     const totalScore = numericAddScoreNumber6 + numericAddScoreNumber7 + numericScore + numericAddScoreNumber8; 

//     const sendScore = {
//       student_id: getStudentID,
//       total: totalScore
//   }

//   const submitData = {
//     students_id: getStudentID,
//     teacher_id: getTeacherID,
//     addScoreNumber6: parseInt(addScoreNumber6),
//     addScoreNumber7: parseInt(addScoreNumber7),
//     addScoreNumber8: parseInt(addScoreNumber8)
    
//   }

//   try {
//     const response = await axios.post('http://127.0.0.1:8000/api/submitStudentScoreLS1English',sendScore);
//     // console.log(response);

//     if(response.status == 200){
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/api/submit-score-ls1english', submitData)
//         console.log(response)
//       } catch (error) {
//         console.log(error)
//       }
//     }
    
//   } catch (error) {
//     console.error('Error submitting answer:', error);
//   }
    
    
//   }


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


        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        {showStudentScore ? (
          <>
          <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS1 COMMUNICATION SKILLS (ENGLISH)</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Part I. Reading</h2>
          <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for LS1 English.</p>
        </div>


          <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. What is the first letter of the word "Apple"?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="B"  disabled  />
              <Radio label={<Typography className='text-green-500'>B. A</Typography>} disabled checked />
              <Radio label="C. C" disabled />
              <Radio label="D. P" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Which of these is a color? </p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Dog" disabled />
              <Radio label={<Typography className='text-green-500'>B. Green</Typography>} disabled checked />
              <Radio label="C. Jump" disabled />
              <Radio label="D. Book" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. What is the opposite of "big"?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Tall" disabled />
              <Radio label={<Typography className='text-green-500'>B. Small</Typography>} checked  disabled />
              <Radio label="C. Loud" disabled />
              <Radio label="D. Soft" disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

      

      

 
          
          {/* <div className='flex justify-center'>
            <Button type='submit' disabled={disableButton}>Submit</Button>
          </div> */}
        </form>
        </div>
          </>
        ) : (
          <div className='text-center w-full'>Select Student to show score</div>
        )}
        
   



      <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
        {getAllStudents.map((student, index)=>{
            console.log(student)
            return(
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => handleGetStudentScore(student)}>
              <div >
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
              </div>
              <span className="text-sm font-semibold">
                {student.score_english} / 3
              </span>
            </li>

            )
        })}
        </ul>
      </div>
        </div>




    </>
  );
};


