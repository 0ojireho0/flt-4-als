import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function RegularStudentAssessments(){

  const navigate = useNavigate()
  const [getFirstname, setgetFirstname] = useState("")
  const [getLRN, setgetLRN] = useState("")

  const [getGrade, setGetGrade] = useState(0)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    setgetFirstname(user.fullname)
    setgetLRN(user.lrn)
    setGetGrade(user.grade)
   



  },[])

  const handleGoToExams = () =>{

    if(getGrade == 10){
        console.log("navigate to exam 10")
    }else if(getGrade == 9){
        console.log("navigate to 9")
    }else if(getGrade == 8){
        console.log("navigate to 8")
    }else if(getGrade == 7){
        // console.log("navigate to 7")
        navigate('/regular-student/exam-for-grade7')
    }
    


  }

  const handleLogout = () =>{
    localStorage.removeItem('user'); 
    // console.log('Item removed from localStorage');
    navigate('/sign-in')
  
  }

    
  return (
    <>
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Header */}
      <div className='w-full flex justify-end items-center gap-3 md:w-full'>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-3" onClick={handleLogout} >Logout</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl font-semibold">{getFirstname}</h2>
            <p className="text-gray-500">LRN: {getLRN}</p>
          </div>
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

    

        <div className="bg-gray-100 min-h-screen p-8">
      {/* Title */}


      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
        {/* FLT Pre-Test */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center mb-4">
            <img 
              src="https://via.placeholder.com/50" 
              alt="FLT Pre-Test Logo" 
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Periodical Exam</h3>
            <p className="text-gray-600">
            The periodical test will assess knowledge in Science (biology and chemistry concepts), Math (algebra, geometry, and statistics), English (reading comprehension and grammar), and Filipino (language skills and literary understanding).
            </p>
          </div>
          <div className="text-center">
            <button onClick={handleGoToExams} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Start</button>
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}


