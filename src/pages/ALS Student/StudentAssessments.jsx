import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import fltpreposttest from "../../assets/FLT PREPOST.png"
import practicereading from "../../assets/PRACTICE READING.png"


export default function StudentAssessments(){

  const navigate = useNavigate()
  const [getFirstname, setgetFirstname] = useState("")
  const [getLRN, setgetLRN] = useState("")
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    setgetFirstname(user.fullname)
    setgetLRN(user.lrn)



  },[])

  const handleLogout = () =>{
    setShowLogoutConfirmation(true)
  
  }

  const handleConfirmLogout = () => {
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
              <p className="font-semibold">S.Y. 2024-2025</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
          </div>
          {/* <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div> */}
        </div>
      </div>

    

        <div className="bg-gray-100 min-h-screen p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Functional Literacy Test</h1>
        <p className="text-gray-700">
          The Functional Literacy Test (FLT) assesses preparedness for the learning strands of ALS K-12 BEC Curriculum.
          It includes measures of ability to supply personal information and prior knowledge of the six learning strands: 
          Communication Skills- English and Filipino, Scientific Literacy and Critical Thinking Skills, 
          Mathematical and Problem Solving Skills, Life and Career Skills, 
          Understanding the Self and Society, and Digital Citizenship.
        </p>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* FLT Pre-Test */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center mb-4">
            <img 
              src={fltpreposttest}
              alt="FLT Pre-Test Logo" 
              className="mx-auto mb-4 xl:w-[10rem]"
            />
            <h3 className="text-xl font-bold mb-2">FLT Pre-Test</h3>
            <p className="text-gray-600">
              The Functional Literacy Test (FLT) assesses preparedness for the learning strands of ALS K-12 BEC Curriculum. It includes measures of ability to supply personal information and prior knowledge of the six learning strands.
            </p>
          </div>
          <div className="text-center">
            <Link to="/student/pretest"><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Start</button></Link>
          </div>
        </div>

        {/* FLT Post-Test */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center mb-4">
            <img 
              src={fltpreposttest}
              alt="FLT Post-Test Logo" 
              className="mx-auto mb-4 xl:w-[10rem]"
            />
            <h3 className="text-xl font-bold mb-2">FLT Post-Test</h3>
            <p className="text-gray-600">
              To evaluate the level of reading and writing proficiency of ALS students, the FLT post-test is created and given at the end of the class year using the same material as the pre-test.
            </p>
          </div>
          <div className="text-center">
            <Link to="/student/posttest"><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Start</button></Link>
          </div>
        </div>

        {/* Reading and Comprehension Test */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-center mb-4">
            <img 
              src={practicereading} 
              alt="Reading and Comprehension Test Logo" 
              className="mx-auto mb-4 xl:w-[10rem]"
            />
            <h3 className="text-xl font-bold mb-2">Practice Reading and Comprehension</h3>
            <p className="text-gray-600">
              Assess students' reading and comprehension skills through a specialized test designed to gauge their understanding and interpretation of texts.
            </p>
          </div>
          <div className="text-center">
          <Link to="/student/reading-test"><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Start</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>

    {showLogoutConfirmation && (
      <div className='fixed inset-0 top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center'> 
        <div className='bg-white w-full flex justify-center items-center h-32 flex-col'>
            <h1>Are you sure you want to Logout?</h1>
            <div className='flex gap-10 mt-3'>
              <h1 className='p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer' onClick={handleConfirmLogout}>Confirm</h1>
              <h1 className='p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 cursor-pointer' onClick={() => setShowLogoutConfirmation(false)}>Cancel</h1>
            </div>
        </div>
      </div>
    )}


    </>
  );
}


