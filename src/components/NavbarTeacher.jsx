// Sidebar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import logo from "../assets/logo-lms.png"

export default function NavbarTeacher({ children }) {


  const navItems = [
    {
      id: 1,
      title: 'Dashboard',
      path: '/teacher/dashboard'
    },
    {
      id: 2,
      title: 'ALS Student',
      path: '/teacher/students-als'
    },
    {
      id: 3,
      title: 'FLT Result',
      path: '/teacher/flt-result'
    },
    {
        id: 4,
        title: 'Learning Modules',
        path: '/teacher/learning-modules'
      },

  ]

  const navItemsFLTresponse = [
    {
      id: 1,
      title: 'ALS Student P.I.S',
      path: '/teacher/als-student-pis'
    },
    {
      id: 2,
      title: 'LS1 Com. Skills (English)',
      path: '/teacher/com-english'
    },
    {
      id: 3,
      title: 'LS1 Com. Skills (filipino)',
      path: '/teacher/com-english'
    },
    {
        id: 4,
        title: 'LS2 Scientific Literacy',
        path: '/teacher/scientific'
      },
      {
        id: 5,
        title: 'LS3 Mathematics',
        path: '/teacher/math'
      },
      {
        id: 6,
        title: 'LS4 Life & Career',
        path: '/teacher/life-career'
      },
      {
        id: 7,
        title: 'LS5 Understanding the Self',
        path: '/teacher/uts'
      },
      {
        id: 8,
        title: 'LS6 Digital Citizenship',
        path: '/teacher/digital-citizenship'
      },
  ]


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-screen p-5 fixed">
        <div className="flex items-center justify-center mb-10">
          {/* Dummy logo */}
          <img src={logo} alt="Logo" className="rounded-full w-24" />
          <h1 className="ml-4 text-xl font-bold">FLT4ALS</h1>
        </div>
        <ul>
          {navItems.map((items, i)=>{
            return(
              <li key={i} className='mb-3 text-center'>
                <NavLink to={items.path} className={({isActive}) => isActive ? "text-blue-600" : "text-red-600"}>{items.title}</NavLink>
              </li>
            )
          })}
        </ul>

        <ul>
            <p className='mb-3'>FLT Response</p>
            {navItemsFLTresponse.map((items, i)=>{
            return(
              <li key={i} className='mb-3 text-center'>
                <NavLink to={items.path} className={({isActive}) => isActive ? "text-blue-600" : "text-red-600"}>{items.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-grow bg-gray-100 min-h-screen p-8">
        {children}
      </div>
    </div>
  );
};
