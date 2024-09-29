// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

  const [getFullName, setgetFullName] = useState("")
  const navigate = useNavigate();


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.fullname)


    if(user == null || user.user_type !== "Admin"){
      navigate('/employee/sign-in')
    }else{
      setgetFullName(user.fullname)
      console.log(user)
    }
    


  }, [])


  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center">
          <p className="mr-4 text-gray-600">{getFullName}</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">UPDATE</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Current School Year</h3>
          <p className="text-gray-600">S.Y. 2024-2025</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Active ALS Students</h3>
          <p className="text-gray-600">9 Active</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">ALS Teachers</h3>
          <p className="text-gray-600">2 Active</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Admin</h3>
          <p className="text-gray-600">1 Active</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Functional Literacy Test</h2>
        <p className="text-gray-700 mb-4">
          The Functional Literacy Test (FLT) assesses preparedness for the learning strands...
        </p>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">STUDENTS</button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Functional Literacy Test Results</h2>
        <p className="text-gray-700">
          The teacher will be able to determine and evaluate the knowledge and skills of the pupils...
        </p>
      </div>
    </div>
  );
};


