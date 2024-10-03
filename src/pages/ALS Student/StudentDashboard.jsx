import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';


export default function StudentDashboard(){

  const [getFirstname, setgetFirstname] = useState("")
  const [getLRN, setgetLRN] = useState("")
  const [getGender, setgetGender] = useState("")
  const [getBirthday, setgetBirthday] = useState("")
  const [getAddress, setgetAddress] = useState("")
  const [getReligion, setgetReligion] = useState("")
  const [getCivilStatus, setgetCivilStatus] = useState("")
  const [getOccupation, setgetOccupation] = useState("")


  const getAgeByBirthday = (birthday) =>{
    const birthDate = new Date(birthday);
    const today = new Date();

    return((today.getFullYear() - birthDate.getFullYear()) - 1)
  }

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    setgetFirstname(user.fullname)
    setgetLRN(user.lrn)
    setgetGender(user.gender)
    setgetBirthday(user.birthday)
    setgetAddress(`${user.house_number} ${user.city} ${user.barangay} ${user.province}`)
    setgetReligion(user.religion)
    setgetOccupation(user.occupation)
    setgetCivilStatus(user.civil_status)


  },[])


    
  return (
    <>
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Header */}
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


      



      {/* Main content */}
      {/* <div className="bg-green-100 p-4 text-green-700 rounded-lg mb-6">
        Great Job! Your answers are submitted
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        {/* Student ALS Level */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">STUDENT ALS LEVEL</h3>
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">0%</span>
            </div>
            <p className="text-center mt-4 text-red-500">FLT is not yet Completed</p>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">STUDENT INFORMATION</h3>
          <div>
            <p><strong>Full Name:</strong> {getFirstname}</p>
            <p><strong>LRN:</strong> {getLRN}</p>
            <p><strong>Gender:</strong> {getGender}</p>
            <p><strong>Birthdate:</strong> {dayjs(getBirthday).format('MMMM DD, YYYY')}</p>
            <p><strong>Age:</strong> {getAgeByBirthday(getBirthday)}</p>
            <p><strong>Address:</strong> {getAddress}</p>
            <p><strong>Religion:</strong> {getReligion}</p>
            <p><strong>Civil Status:</strong> {getCivilStatus}</p>
            <p><strong>Occupation:</strong> {getOccupation}</p>
          </div>
        </div>

        {/* FLT Accomplishment */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">FLT ACCOMPLISHMENT</h3>
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl">0%</span>
            </div>
            <p className="text-center mt-4">
              <strong>Done:</strong> 0 <br />
              <strong>Pending:</strong> 7
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


