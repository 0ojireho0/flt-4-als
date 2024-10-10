// StudentDashboard.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function TeacherLearningModules(){
  // Sample data to represent the dashboard contents
  const sections = [
    {
      title: "Basic Literacy",
      items: [
        { id: 1, label: "LS1: Communication Skills", url: "/teacher/learning-modules/basic-ls1" },
        { id: 2, label: "LS2: Problem Solving Skills and Critical Thinking",  url: "/teacher/learning-modules/basic-ls2" },
        { id: 5, label: "LS5: Understanding the Self and the Society",  url: "/teacher/learning-modules/basic-ls5" }
      ],
    },
    {
      title: "Lower Elementary Level",
      items: [
        { id: 2, label: "LS2: Scientific and Critical Thinking Skills",  url: "/teacher/learning-modules/lem-ls2" },
        { id: 3, label: "LS3: Mathematical and Problem-solving Skills",  url: "/teacher/learning-modules/lem-ls3" },
        { id: 5, label: "LS5: Understanding the Self and the Society",  url: "/teacher/learning-modules/lem-ls5" }
      ],
    },
    {
      title: "Advanced Elementary Level",
      items: [
        { id: 1, label: "LS1: Communication Skills (English)",  url: "/teacher/learning-modules/ael-ls1-english"  },
        { id: 1, label: "LS1: Communication Skills (Filipino)", url: "/teacher/learning-modules/ael-ls1-filipino" },
        { id: 2, label: "LS2: Scientific Literacy and Critical Thinking", url: "/teacher/learning-modules/ael-ls2" },
        { id: 3, label: "LS3: Mathematics and Problem Solving Skills", url: "/teacher/learning-modules/ael-ls3" },
        { id: 4, label: "LS4: Life and Career", url: "/teacher/learning-modules/ael-ls4" },
        { id: 5, label: "LS5: Understanding the Self and the Society", url: "/teacher/learning-modules/ael-ls5" },
        { id: 6, label: "LS6: Digital Citizenship", url: "/teacher/learning-modules/ael-ls6" }
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="text-green-600 text-xl font-bold">10 Active</span>
          <p className="text-gray-500">Active ALS Student</p>
          <p className="text-red-500">13 Registered ALS Student/s</p>
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="text-orange-500 text-xl font-bold">S.Y. 2022-2023</span>
          <p className="text-gray-500">Current School Year</p>
          <p className="text-gray-500">Date: July 24, 2023</p>
        </div>
        {/* <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="text-blue-600 text-xl font-bold">Pre-test</span>
          <p className="text-gray-500">Active Test Period</p>
          <button className="bg-blue-500 text-white py-1 px-3 mt-2 rounded">Start Post-Test</button>
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="text-red-500 text-xl font-bold">Closed</span>
          <p className="text-gray-500">Test Status</p>
          <button className="bg-green-500 text-white py-1 px-3 mt-2 rounded">Start Accepting Test Response</button>
        </div> */}
      </div>

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


