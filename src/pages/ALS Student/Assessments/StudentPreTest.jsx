import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function StudentPreTest() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const navigate = useNavigate()
  
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user'))
      setgetFirstname(user.fullname)
      setgetLRN(user.lrn)
    },[])

    const testData = [
        {
          id: 'LS1',
          title: 'Communication Skills (English)',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls1-english'
        },
        {
          id: 'LS1',
          title: 'Communication Skills (Filipino)',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls1-filipino'

        },
        {
          id: 'LS2',
          title: 'Scientific Literacy And Critical Thinking Skills',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls2-scientific'
        },
        {
          id: 'LS3',
          title: 'Mathematical And Problem-Solving Skills',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls3-math'
        },
        {
          id: 'LS4',
          title: 'Life And Career Skills',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls4-life'
        },
        {
          id: 'LS5',
          title: 'Understanding The Self And Society',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls5-understanding'
        },
        {
          id: 'LS6',
          title: 'Digital Citizenship',
          score: '0/0',
          avg: '0%',
          status: 'Not yet Answered',
          link: '/student/pretest-ls6-citizenship'
        },
      ];

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

        <div className="bg-gray-100 min-h-screen p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4">Pre-Test (School Year 2022-2023)</h1>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testData.map((test, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-4">
              {/* Circular Progress Placeholder */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Background Circle */}
        
                {/* Score */}
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                  {test.score}
                </div>
              </div>

              {/* Test Info */}
              <h3 className="text-md font-bold mb-2">{test.id}: {test.title}</h3>
              <p className="text-gray-600">{test.avg} avg.</p>
              <p className="text-gray-400">{test.status}</p>
            </div>

            {/* Start Button or Locked Icon */}
            <div className="text-center">
              <Link to={test.link}>           
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Start
                </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    





    </>
  )
}
