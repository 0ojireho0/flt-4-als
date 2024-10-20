import React from 'react'
import { NavLink } from 'react-router-dom';
export default function RegularTeacherModules() {

    const sections = [
        {
          title: "Modules",
          items: [
            { id: 1, label: "English", url: "/regular-teacher/english-modules" },
            { id: 2, label: "Filipino",  url: "/regular-teacher/filipino-modules" },
            { id: 3, label: "Science",  url: "/regular-teacher/science-modules" },
            { id: 4, label: "Math",  url: "/regular-teacher/math-modules" }
          ],
        },
      ];

  return (
    <>
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



    </>
  )
}
