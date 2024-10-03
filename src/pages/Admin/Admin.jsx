// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Admin() {

  const [getFullName, setgetFullName] = useState("")
  const [getAllStudent, setGetAllStudent] = useState([])
  const [getActiveAdmin, setGetActiveAdmin] = useState(0)
  const [getActiveTeacher, setgetActiveTeacher] = useState(0)
  const navigate = useNavigate();

  const fetchStudent = async() =>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/student')
      // console.log(res.data.students)
      setGetAllStudent(res.data.students)
    } catch (error) {
      console.log(error)
    }
    
  }

  const fetchEmployee = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/employee");

      const adminCount = res?.data?.employees.filter(employee => employee.user_type === 'Admin').length;
      setGetActiveAdmin(adminCount)

      const teacherCount = res?.data?.employees.filter(employee => employee.user_type === 'ALS Teacher').length;
      setgetActiveTeacher(teacherCount)
      
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.fullname)


    if(user == null || user.user_type !== "Admin"){
      navigate('/employee/sign-in')
    }else{
      setgetFullName(user.fullname)
      console.log(user)
    }

    fetchStudent()
    fetchEmployee()


  }, [])

  const handleLogout = () =>{
    localStorage.removeItem('user'); 
    // console.log('Item removed from localStorage');
    navigate('/sign-in')

  }


  return (
    <>
      <div className='w-full flex justify-end items-center gap-3 md:w-full'>
        <h1>{getFullName}</h1>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleLogout}>Logout</button>
      </div>
      <div className='mt-3'>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 '>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Current School Year</h3>
          <p className="text-gray-600">S.Y. 2024-2025</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Active ALS Students</h3>
          <p className="text-gray-600">{getAllStudent.length} Active</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">ALS Teachers</h3>
          <p className="text-gray-600">{getActiveTeacher} Active</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold">Admin</h3>
          <p className="text-gray-600">{getActiveAdmin} Active</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6 mt-5">
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




    </>
  );
};


