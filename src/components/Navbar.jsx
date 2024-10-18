import React, { useState } from 'react'


import logo from "../assets/MHS_LOGO.png"

import { Link, NavLink } from 'react-router-dom'



// Icons
import { CiMenuBurger } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";


// Components
import { Button } from '@material-tailwind/react';



export default function Navbar({children}) {

    const [showNavbar, setShowNavbar] = useState(false)

    const navItems = [
        {
            id: 1,
            title: "Home",
            path: '/'
        },
        {
            id: 4, 
            title: "About",
            path: "/about"
        }
    ]


  return (
    <>  

        {/* Mobile */}
        {showNavbar ? (
            <> 
            <div className='bg-[#EDE9E9] fixed top-0 left-0 w-1/2 h-full flex flex-col z-10 items-center p-2 md:hidden'>
                <div className='flex justify-end w-full'>
                    <FaXmark className='text-2xl' onClick={() => setShowNavbar(!showNavbar)}/>
                </div>
                <div className='w-full border-b-2 border-black/30 flex justify-center items-center '>
                    <img src={logo} className=' object-contain w-[10rem] ' alt="logo lms" />
                </div>
                <div className='flex flex-col gap-3 mt-3'>
                        {navItems.map((item, i)=>{
                            return(
                                <NavLink key={i} to={item.path} className={({isActive}) => isActive ? "text-[#006299] " : "text-black"}>{item.title}</NavLink>
                            )
                        })}
                </div>
                <div className='mt-10'>
                    <Button className='bg-[#006299] ' size='sm'><Link to='/sign-in'>Sign In</Link></Button>
                </div>
            </div>

            <div className='mt-12'>
                {children}
            </div>
            
            
            </>
        ) : (
            <> 
            <div className='p-3 md:hidden'>
                <CiMenuBurger className='text-2xl' onClick={() => setShowNavbar(!showNavbar)} />
            </div>

            <div className='md:mt-16'>
                {children}
            </div>
            
            </>
        )}

        {/* Desktop */}
        <div className='hidden md:absolute md:top-0 md:flex w-full h-16 bg-[#EDE9E9] p-3 items-center justify-between  '>
            <div className='w-24'>
                <img src={logo} className='object-contain w-14' alt="" />
            </div>
            <div className='flex  gap-3 '>
                {navItems.map((item, i)=>{
                    return(
                        <NavLink key={i} to={item.path} className={({isActive}) => isActive ? "text-[#006299] " : "text-black"}>{item.title}</NavLink>
                    )
                })}
            </div>
            <div>
                <Button className='bg-[#006299]' size='sm'><Link to='/sign-in'>Sign In</Link></Button>
            </div>

        </div>
        
        <div>

        </div>
        



    </>
  )
}
