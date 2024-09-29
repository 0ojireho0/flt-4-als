import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Teacher() {

  const navigate = useNavigate(); 
  const [getAllStudent, setGetAllStudent] = useState([])
  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getFullName, setgetFullName] = useState("")
  const [getUserType, setgetUserType] = useState("")

//   useEffect(()=>{
//     const user = JSON.parse(localStorage.getItem('user'))
//     console.log(user)

//     if(!user){
//       navigate('/sign-in'); 
//     }else if (user.role !== "Teacher for ALS"){
//       navigate('/sign-in')
//     }
    
// })

const fetchStudent = async() =>{
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/student')
    // console.log(res.data.students)
    setGetAllStudent(res.data.students)



    // console.log(res?.data?.students)
  } catch (error) {
    console.log(error)
  }
  
}

useEffect(()=>{

  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user.fullname)


  if(user == null || user.user_type !== "ALS Teacher"){
    navigate('/teacher/sign-in')
  }else{
    setgetFullName(user.fullname)
    setgetUserType(user.user_type)
    // console.log(user.id)
  }

  const getSpecificStudents = async() =>{
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });



        setGetActiveStudents(response.data.length)
        console.log(response.data)
        // console.log(response.data.length)
    } catch (error) {
        console.log(error);
    }
  }
  getSpecificStudents()

  fetchStudent()
},[])

const handleLogout = () =>{
  localStorage.removeItem('user'); 
  // console.log('Item removed from localStorage');
  navigate('/teacher/sign-in')

}



  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <p>{getFullName} ({getUserType})</p>
    <div className='flex justify-end mb-3'>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleLogout}>Logout</button>
    </div>
    {/* Header Section */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active ALS Student</h2>
        <h3 className="text-2xl">{getActiveStudents} Active</h3>
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

    {/* Functional Literacy Test Section */}
    <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Functional Literacy Test</h2>
      <p className="text-gray-600 mb-4">
        The Functional Literacy Test (FLT) assesses preparedness for the learning strands of ALS K-12 BEC Curriculum. 
        It includes measures of ability to supply personal information and prior knowledge of the six learning strands: 
        Communication Skills - English and Filipino, Scientific Literacy and Critical Thinking Skills, Mathematical and 
        Problem Solving Skills, Life and Career Skills, Understanding the Self and Society, and Digital Citizenship.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">My Students</button>
    </div>

    {/* Functional Literacy Test Results Section */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Functional Literacy Test Results</h2>
      <p className="text-gray-600 mb-4">
        The teacher will be able to determine and evaluate the knowledge and skills of the pupils in a variety of topics, 
        including language, mathematics, and science, using the FLT test result. Based on their strengths and areas for 
        development in their disciplines, the scoring system, which assesses the competence level of pupils, will give a 
        clear indicator of what category level they belong to in class.
      </p>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">FLT Results</button>
    </div>
  </div>
  )
}
