// App.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';




export default function StudentAnswerPIS() {

    const [getStudentFullname, setgetStudentFullname] = useState("")
    const [getStudentLRN, setgetStudentLRN] = useState("")


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        setgetStudentFullname(user.fullname)
        setgetStudentLRN(user.lrn)

    }, [])




    const sections = [
        {
          title: "Basic Literacy",
          items: [
            { id: 1, label: "LS1: Communication Skills", url: "/student/learning-modules/basic-ls1" },
            { id: 2, label: "LS2: Problem Solving Skills and Critical Thinking",  url: "/student/learning-modules/basic-ls2" },
            { id: 5, label: "LS5: Understanding the Self and the Society",  url: "/student/learning-modules/basic-ls5" }
          ],
        },
        {
          title: "Lower Elementary Level",
          items: [
            { id: 2, label: "LS2: Scientific and Critical Thinking Skills",  url: "/student/learning-modules/lem-ls2" },
            { id: 3, label: "LS3: Mathematical and Problem-solving Skills",  url: "/student/learning-modules/lem-ls3" },
            { id: 5, label: "LS5: Understanding the Self and the Society",  url: "/student/learning-modules/lem-ls5" }
          ],
        },
        {
          title: "Advanced Elementary Level",
          items: [
            { id: 1, label: "LS1: Communication Skills (English)",  url: "/student/learning-modules/ael-ls1-english"  },
            { id: 1, label: "LS1: Communication Skills (Filipino)", url: "/student/learning-modules/ael-ls1-filipino" },
            { id: 2, label: "LS2: Scientific Literacy and Critical Thinking", url: "/student/learning-modules/ael-ls2" },
            { id: 3, label: "LS3: Mathematics and Problem Solving Skills", url: "/student/learning-modules/ael-ls3" },
            { id: 4, label: "LS4: Life and Career", url: "/student/learning-modules/ael-ls4" },
            { id: 5, label: "LS5: Understanding the Self and the Society", url: "/student/learning-modules/ael-ls5" },
            { id: 6, label: "LS6: Digital Citizenship", url: "/student/learning-modules/ael-ls6" }
          ],
        },
      ];


  return (
    <div className="">
      {/* Header Section */}
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
              <p className="font-semibold">S.Y. 2022-2023</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
          </div>
          <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div>
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
  );
};

