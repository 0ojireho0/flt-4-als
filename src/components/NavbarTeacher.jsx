// Sidebar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import logo from "../assets/MHS_LOGO.png"
import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { LuFileOutput } from "react-icons/lu";
import { GoFileSubmodule } from "react-icons/go";


export default function NavbarTeacher({ children }) {

  const [showSidebar, setShowSidebar] = useState(false)

  const navItems = [
    {
      id: 1,
      title: 'Dashboard',
      path: '/teacher/dashboard',
      icon: <MdDashboard />
    },
    {
      id: 2,
      title: 'ALS Student',
      path: '/teacher/students-als',
      icon: <PiStudent />
    },
    {
      id: 3,
      title: 'FLT Result',
      path: '/teacher/flt-result',
      icon: <LuFileOutput />
    },
    {
        id: 4,
        title: 'Learning Modules',
        path: '/teacher/learning-modules',
        icon: <GoFileSubmodule />
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
      path: '/teacher/com-filipino'
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
    <>
    {showSidebar ? (
      <> 


      <div className='bg-black/30 w-full h-screen'>

        <div className='w-52 h-screen fixed bg-black/30 p-5 z-10 overflow-auto'>

          <div className='flex justify-end items-center'>
            <FaXmark className='text-2xl' onClick={() =>setShowSidebar(!showSidebar)} />
          </div>

          <div className=' w-full flex justify-center items-center'>
            <div className='w-24'>
              <img src={logo} className='w-full object-contain' alt="" />
            </div>
          </div>

          <div className='mt-3'>
            <ul>
              {navItems.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mb-10'>
                      <NavLink to={item.path} className="flex items-center gap-2 "><span>{item.icon}</span>{item.title}</NavLink>
                    </li>

                  </>
                )
              })}
            </ul>
              <h1 className='text-white text-lg'>Student Response</h1>
            <ul>
            {navItemsFLTresponse.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mt-3'>
                      <NavLink to={item.path} className="flex items-center gap-2 ">{item.title}</NavLink>
                    </li>

                  </>
                )
              })}
            </ul>
          </div>
        </div>

      </div>


      </>
    ) : (
      <> 
      <div className='p-5 md:hidden'>
        <CiMenuBurger className='text-2xl' onClick={()=>setShowSidebar(!showSidebar)}/>
      </div>

      <div className='hidden md:flex '>
        <div className='w-52 bg-black/30 fixed h-screen overflow-auto '>
          <div className='w-full flex justify-center items-center p-5'>
              <div className=' w-24 '>
                <img src={logo} alt="" />
              </div>
          </div>
          <div>
            <ul className='p-5 mt-3'>
              {navItems.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mb-10'>
                      <NavLink to={item.path} className={({isActive}) => isActive ? "flex items-center gap-2 text-white" : "flex items-center gap-2 "}><span>{item.icon}</span>{item.title}</NavLink>
                    </li>

                  </>
                )
              })}
            </ul>
            <h1 className='text-white text-lg'>Student Response</h1>
            <ul className='p-5'>
            {navItemsFLTresponse.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mb-3'>
                      <NavLink to={item.path} className={({isActive}) => isActive ? "flex items-center gap-2 text-white" : "flex items-center gap-2 "}>{item.title}</NavLink>
                    </li>

                  </>
                )
              })}
            </ul>
          </div>
        </div>

        <div className='p-5 ml-52 w-full'>
          {children}
        </div>


      </div>

      <div className='p-5 md:hidden' >
          {children}
        </div>


      
      </>
    )}
  



    </>
  );
};
