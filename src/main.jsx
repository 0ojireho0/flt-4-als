import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Admin from './pages/Admin/Admin'
import NavbarAdmin from './components/NavbarAdmin'
import AlsStudent from './pages/AlsStudent'
import Teacher from './pages/Teacher'
import StudentAlsAdmin from './pages/Admin/StudentAlsAdmin'
import TeachersAdmin from './pages/Admin/TeachersAdmin'
import AdminLoginForm from './pages/Admin/AdminSignin'

// Layout component that includes the Navbar
function Layout() {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  )
}

function LayoutAdmin(){
  return(
    <>
    <NavbarAdmin>
      <Outlet />
    </NavbarAdmin>


    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/learning",
        element: <div>Learning Page</div>
      },
      {
        path: "/assessments",
        element: <div>Assessments Page</div>
      },
      {
        path: "/about",
        element: <div>About Page</div>
      },
      {
        path: "/sign-in",
        element: <Signin />
      },
      {
        path: "/als-student",
        element: <AlsStudent />
      },
      {
        path: "/teacher",
        element: <Teacher />
      },
      {
        path: "/employee/sign-in",
        element: <AdminLoginForm />
      }
    ]
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Admin />
      },
      {
        path: "/admin/students-als",
        element: <StudentAlsAdmin />
      },
      {
        path: "/admin/teachers-admins",
        element: <TeachersAdmin />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
