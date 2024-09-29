// Sidebar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import logo from "../assets/logo-lms.png"

export default function NavbarAdmin({ children }) {


  const navItems = [
    {
      id: 1,
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      id: 2,
      title: 'Students for ALS',
      path: '/admin/students-als'
    },
    {
      id: 3,
      title: 'Teachers and Admins',
      path: '/admin/teachers-admins'
    }
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
              <li key={i} className='mb-6'>
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
