// App.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';




export default function RegularStudentModules() {

    const [getStudentFullname, setgetStudentFullname] = useState("")
    const [getStudentLRN, setgetStudentLRN] = useState("")
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        setgetStudentFullname(user.fullname)
        setgetStudentLRN(user.lrn)

    }, [])




    const sections = [
        {
          title: "Modules",
          items: [
            { id: 1, label: "English", url: "/regular-student/english-modules" },
            { id: 2, label: "Filipino",  url: "/regular-student/filipino-modules" },
            { id: 3, label: "Science",  url: "/regular-student/science-modules" },
            { id: 4, label: "Math",  url: "/regular-student/math-modules" }
          ],
        },
      ];

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
   <div className="">
      {/* Header Section */}
      <div className='w-full flex justify-end items-center gap-3 md:w-full'>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-3" onClick={handleLogout}>Logout</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl font-semibold">{getStudentFullname}</h2>
            <p className="text-gray-500">LRN: {getStudentLRN}</p>
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

      {/* Welcome Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold text-center text-blue-500 mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-2 bg-gray-100 rounded hover:bg-gray-200 transition">
                  <li className='list-none'><NavLink to={item.url}><span className="text-gray-700">{item.label}</span></NavLink></li>
                  <button className="text-blue-500 hover:text-blue-700">
                    <i className="fas fa-info-circle"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
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
};

