// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';


export default function RegularTeacherMath(){


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
    setAnswer1(student.math_1)
    setAnswer2(student.math_2)
    setAnswer3(student.math_3)
    setScore(student.score_math)
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
                <h1 className="text-sm font-bold lg:text-2xl">Math</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for Math.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the value of 5<sup>2</sup> + 3<sup>2</sup></p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-math-1' label="A. 25" disabled  />
                    <Radio name='grade7-math-1' label={<Typography className='text-green-500'>B. 34</Typography>} checked disabled  />
                    <Radio name='grade7-math-1' label="C. 26"  disabled />
                    <Radio name='grade7-math-1' label="D. 35" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. What is the greatest common factor (GCF) of 24 and 36? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-math-2' label="A. 6" disabled />
                    <Radio name='grade7-math-2' label="B. 8" disabled  />
                    <Radio name='grade7-math-2' label={<Typography className='text-green-500'>C. 12</Typography>} checked disabled />
                    <Radio name='grade7-math-2' label="D. 18"  disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Solve for x: 3x + 5 = 14</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-math-3' label={<Typography className='text-green-500'>A. x = 2</Typography>} checked disabled />
                    <Radio name='grade7-math-3' label="B. x = 3"  disabled />
                    <Radio name='grade7-math-3' label="C. x = 4" disabled />
                    <Radio name='grade7-math-3' label="D. x = 5" disabled  />
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
                <h1 className="text-sm font-bold lg:text-2xl">Math</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for Math.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the value of 7<sup>2</sup>?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-math-1' label="A. 14" disabled  />
                    <Radio name='grade8-math-1' label="B. 21" disabled  />
                    <Radio name='grade8-math-1' label={<Typography className='text-green-500'>C. 49</Typography>} checked  disabled />
                    <Radio name='grade8-math-1' label="D. 56" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. What is the slope of the line represented by the equation y = 3x + 2? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-math-2' label="A. 2" disabled />
                    <Radio name='grade8-math-2' label={<Typography className='text-green-500'>B. 3</Typography>} checked disabled  />
                    <Radio name='grade8-math-2' label="C. -3" disabled />
                    <Radio name='grade8-math-2' label="D. 0"  disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. If a triangle has sides of lengths 5 cm, 12 cm, and 13 cm, what type of triangle is it?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-math-3' label="A. Acute" disabled />
                    <Radio name='grade8-math-3' label={<Typography className='text-green-500'>B. Right</Typography>} checked  disabled />
                    <Radio name='grade8-math-3' label="C. Obtuse" disabled />
                    <Radio name='grade8-math-3' label="D. Equilateral" disabled  />
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
                <h1 className="text-sm font-bold lg:text-2xl">Math</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for Math.</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. What is the solution to the inequality 2x - 3 {'<'} 7? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-math-1' label={<Typography className='text-green-500'>A. x {'<'} 5</Typography>} checked disabled  />
                    <Radio name='grade9-math-1' label="B. x > 5" disabled  />
                    <Radio name='grade9-math-1' label="C. x < 2" disabled />
                    <Radio name='grade9-math-1' label="D. x > 2" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. What is the value of 4<sup>2</sup> + 3<sup>2</sup>? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-math-2' label="A. 16" disabled />
                    <Radio name='grade9-math-2' label={<Typography className='text-green-500'>B. 25</Typography>} checked disabled  />
                    <Radio name='grade9-math-2' label="C. 20" disabled />
                    <Radio name='grade9-math-2' label="D. 30"  disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. If a triangle has sides of lengths 5 cm, 12 cm, and 13 cm, what type of triangle is it?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-math-3' label="A. 5 units" disabled />
                    <Radio name='grade9-math-3' label={<Typography className='text-green-500'>B. 7 units</Typography>} checked  disabled />
                    <Radio name='grade9-math-3' label="C. 10 units" disabled />
                    <Radio name='grade9-math-3' label="D. 15 units" disabled  />
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
                this is grade 10
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
                {student.score_math} / 3
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


