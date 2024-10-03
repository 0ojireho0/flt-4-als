// Sidebar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import logo from "../assets/MHS_LOGO.png"
import { useState } from 'react';

import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";




export default function NavbarAdmin({ children }) {

  const [showSidebar, setShowSidebar] = useState(false)

  const navItems = [
    {
      id: 1,
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: <MdDashboard />
    },
    {
      id: 2,
      title: 'Students for ALS',
      path: '/admin/students-als',
      icon: <PiStudent />
    },
    {
      id: 3,
      title: 'Teachers',
      path: '/admin/teachers-admins',
      icon: <FaChalkboardTeacher />
    }
  ]


  return (
    <>
    {showSidebar ? (
      <> 


      <div className='bg-black/30 w-full h-screen'>

        <div className='w-52 h-screen fixed bg-black/30 p-5 z-10'>

          <div className='flex justify-end items-center'>
            <FaXmark className='text-2xl' onClick={() =>setShowSidebar(!showSidebar)} />
          </div>

          <div className=' w-full flex justify-center items-center'>
            <div className='w-24'>
              <img src={logo} className='w-full object-contain' alt="" />
            </div>
          </div>

          <div>
            <ul>
              {navItems.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mt-10'>
                      <NavLink to={item.path} className="flex items-center gap-2 "><span>{item.icon}</span>{item.title}</NavLink>
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
        <div className='w-52 bg-black/30 fixed h-screen  '>
          <div className='w-full flex justify-center items-center p-5'>
              <div className=' w-24 '>
                <img src={logo} alt="" />
              </div>
          </div>
          <div>
            <ul className='p-5'>
              {navItems.map((item, i)=>{
                return(
                  <>
                    <li key={i} className='mt-10'>
                      <NavLink to={item.path} className={({isActive}) => isActive ? "flex items-center gap-2 text-white" : "flex items-center gap-2 "}><span>{item.icon}</span>{item.title}</NavLink>
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
