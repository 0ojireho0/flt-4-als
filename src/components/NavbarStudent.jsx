import React, { useState } from 'react'


import logo from "../assets/MHS_LOGO.png"

import { Link, NavLink, useNavigate } from 'react-router-dom'



// Icons
import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";


// Components

import { Button } from '@material-tailwind/react';



export default function NavbarStudent({children}) {

    const [showSidebar, setShowSidebar] = useState(false)
    const navigate = useNavigate()

    const navItems = [
        {
            id: 1,
            title: "My Profile",
            path: '/student/dashboard'
        },
        {
            id: 2,
            title: "Answer my PIS",
            path: "/student/answerPIS"
        }, 
        {
            id: 3,
            title: "Learnings",
            path: "/student/learnings"
        },
        {
            id: 4, 
            title: "Assessments",
            path: "/student/assessments"
        }
    ]

    const handleLogout = () =>{
        localStorage.removeItem('user'); 
        // console.log('Item removed from localStorage');
        navigate('/sign-in')
      
      }

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
                    <li key={i} className='mt-10' onClick={() =>setShowSidebar(!showSidebar)}>
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
  )
}
