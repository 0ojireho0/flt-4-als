import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function StudentDashboard(){




    
  return (
    <>
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <h2 className="text-xl font-semibold">Jenelle Pimentel</h2>
            <p className="text-gray-500">LRN: 100234435694</p>
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

      <div className="flex justify-between mt-4 border-t pt-4">
          <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded font-medium"><Link to="/student/dashboard">Dashboard</Link></button>
          <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded font-medium"><Link to="/student/answerPIS">Answer my PIS</Link></button>
          <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded font-medium">Learnings</button>
          <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded font-medium">Assessments</button>
          <button className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded font-medium">Help</button>
        </div>

      



      {/* Main content */}
      <div className="bg-green-100 p-4 text-green-700 rounded-lg mb-6">
        Great Job! Your answers are submitted
      </div>

      <div className="grid grid-cols-3 gap-4">
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
            <p><strong>Full Name:</strong> Jenelle Pimentel</p>
            <p><strong>LRN:</strong> 100234435694</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Birthdate:</strong> April 15, 2002</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Address:</strong> 240 Brgy. Mangaglo Manila, NCR</p>
            <p><strong>Religion:</strong> Roman Catholic</p>
            <p><strong>Civil Status:</strong> Walang asawa</p>
            <p><strong>Occupation:</strong> Wala</p>
            <p><strong>About the Student:</strong> Ako ay isang masiyahing bata.</p>
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


