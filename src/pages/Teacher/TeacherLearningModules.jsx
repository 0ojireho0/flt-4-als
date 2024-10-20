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


