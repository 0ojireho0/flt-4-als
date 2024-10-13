// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';


export default function RegularTeacherEnglish(){


  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [score, setScore] = useState(0)
  const [getGrade, setGetGrade] = useState(0)

  const [showGrade7, setShowGrade7] = useState(false)
  const [ShowGrade8, setShowGrade8] = useState(false)
  const [ShowGrade9, setShowGrade9] = useState(false)
  const [ShowGrade10, setShowGrade10] = useState(false)


  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-teacher-teachernames', { params: { teacherId: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
      // console.log(response.data)
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
    setGetGrade(student.grade)


    if(student.grade == 7){
      console.log("show questions for student 7")
      setShowGrade7(true)
      setShowGrade8(false)
      setShowGrade9(false)
      setShowGrade10(false)
    }else if (student.grade == 8){
      setShowGrade7(false)
      setShowGrade8(true)
      setShowGrade9(false)
      setShowGrade10(false)
      console.log("show questions for student 8")
    }else if(student.grade == 9){
      setShowGrade7(false)
      setShowGrade8(false)
      setShowGrade9(true)
      setShowGrade10(false)
      console.log("show questions for student 9")
    }else if(student.grade == 10){
      setShowGrade7(false)
      setShowGrade8(false)
      setShowGrade9(false)
      setShowGrade10(true)
      console.log("show questions for student 10")
    }else{
      console.log("error")
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
        <h3 className="text-2xl">S.Y. 2022-2023</h3>
        <p className="text-sm">Date: July 24, 2023</p>
      </div>

    </div>
    


        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        {showStudentScore ? (
          <>
            {showGrade7 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">English</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for English.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the first letter of the word "Apple"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-english-1' label="A. B"  disabled  />
                    <Radio name='grade7-english-1' label={<Typography className='text-green-500'>B. A</Typography>} disabled checked />
                    <Radio name='grade7-english-1' label="C. C" disabled />
                    <Radio name='grade7-english-1' label="D. P" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Which of these is a color? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-english-2' label="A. Dog" disabled />
                    <Radio name='grade7-english-2' label={<Typography className='text-green-500'>B. Green</Typography>} disabled checked />
                    <Radio name='grade7-english-2' label="C. Jump" disabled />
                    <Radio name='grade7-english-2' label="D. Book" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. What is the opposite of "big"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-english-3' label="A. Tall" disabled />
                    <Radio name='grade7-english-3' label={<Typography className='text-green-500'>B. Small</Typography>} checked  disabled />
                    <Radio name='grade7-english-3' label="C. Loud" disabled />
                    <Radio name='grade7-english-3' label="D. Soft" disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade8 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">English</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for English.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the primary purpose of a thesis statement in an essay?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-english-1' label="A. To summarize the conclusion"  disabled  />
                    <Radio name='grade8-english-1' label={<Typography className='text-green-500'>B. To present the main argument</Typography>} disabled checked />
                    <Radio name='grade8-english-1' label="C. To provide background information" disabled />
                    <Radio name='grade8-english-1' label="D. To list the sources used" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Which of the following is an example of a simile? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-english-2' label="A. The stars danced in the sky." disabled />
                    <Radio name='grade8-english-2' label={<Typography className='text-green-500'>B. Her smile was like sunshine.</Typography>} disabled checked />
                    <Radio name='grade8-english-2' label="C. Time is a thief." disabled />
                    <Radio name='grade8-english-2' label="D. He ran like the wind." disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. In which point of view is a story told if the narrator uses "I" or "we"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-english-3' label="A. Third person limited" disabled />
                    <Radio name='grade8-english-3' label="B. Third person omniscient"  disabled />
                    <Radio name='grade8-english-3' label={<Typography className='text-green-500'>C. First person</Typography>} checked disabled />
                    <Radio name='grade8-english-3' label="D. Second person" disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade9 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">English</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for English.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What literary device is used in the phrase "the wind howled through the night"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-english-1' label="A. Simile"  disabled  />
                    <Radio name='grade9-english-1' label={<Typography className='text-green-500'>B. Personification</Typography>} disabled checked />
                    <Radio name='grade9-english-1' label="C. Alliteration" disabled />
                    <Radio name='grade9-english-1' label="D. Hyperbole" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. In a story, the turning point or most intense moment is called: </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-english-2' label="A. Exposition" disabled />
                    <Radio name='grade9-english-2' label={<Typography className='text-green-500'>B. Climax</Typography>} disabled checked />
                    <Radio name='grade9-english-2' label="C. Resolution" disabled />
                    <Radio name='grade9-english-2' label="D. Rising Action" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Which of the following is a key characteristic of a narrative essay?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-english-3' label="A. It presents facts and figures." disabled />
                    <Radio name='grade9-english-3' label={<Typography className='text-green-500'>B. It tells a story with a clear sequence of events.</Typography>} checked  disabled />
                    <Radio name='grade9-english-3' label="C. It analyzes a piece of literature." disabled />
                    <Radio name='grade9-english-3' label="D. It discusses a specific topic in depth." disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade10 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">English</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for English.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the primary purpose of a persuasive essay?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade10-english-1' label="A. To entertain the reader"  disabled  />
                    <Radio name='grade10-english-1' label="B. To inform the reader" disabled  />
                    <Radio name='grade10-english-1' label={<Typography className='text-green-500'>C. To convince the reader of a specific viewpoint</Typography>} checked disabled />
                    <Radio name='grade10-english-1' label="D. To narrate a personal experience" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Which of the following is an example of an oxymoron? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade10-english-2' label="A. Bitter sweet" disabled />
                    <Radio name='grade10-english-2' label="B. Loud whisper" disabled />
                    <Radio name='grade10-english-2' label="C. Open secret" disabled />
                    <Radio name='grade10-english-2' label={<Typography className='text-green-500'>D. All of the above</Typography>} checked disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Which of the following is a key characteristic of a narrative essay?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade10-english-3' label="A. A character's internal conflict" disabled />
                    <Radio name='grade10-english-3' label={<Typography className='text-green-500'>B. A hint about what will happen later in the story</Typography>} checked  disabled />
                    <Radio name='grade10-english-3' label="C. A comparison between two unlike things" disabled />
                    <Radio name='grade10-english-3' label="D. The central message of the work" disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : (
              null
            )}
          </>
        ) : (
          <div className='text-center w-full'>Select Student to show score</div>
        )}
        
   



      <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
        {getAllStudents.map((student, index)=>{
            {/* console.log(student) */}
            return(
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => handleGetStudentScore(student)}>
              <div >
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
                <p className="text-sm text-gray-500">Grade: {student.grade}</p>
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


