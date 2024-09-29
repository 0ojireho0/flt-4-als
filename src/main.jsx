import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './pages/Signin'
import Admin from './pages/Admin/Admin'
import NavbarAdmin from './components/NavbarAdmin'
import AlsStudent from './pages/AlsStudent'
import Teacher from './pages/Teacher/Teacher'
import StudentAlsAdmin from './pages/Admin/StudentAlsAdmin'
import TeachersAdmin from './pages/Admin/TeachersAdmin'
import AdminLoginForm from './pages/Admin/AdminSignin'
import NavbarTeacher from './components/NavbarTeacher'
import TeacherAlsStudent from './pages/Teacher/TeacherAlsStudent'
import TeacherLoginForm from './pages/Teacher/TeacherSignin'
import TeacherFLTResult from './pages/Teacher/TeacherFLTResult'
import TeacherLearningModules from './pages/Teacher/TeacherLearningModules'
import LS1ComSkills from './pages/Teacher/Modules/Basic Literacy/LS1ComSkills'
import LS2ProblemSolving from './pages/Teacher/Modules/Basic Literacy/LS2ProblemSolving'
import LS5Understanding from './pages/Teacher/Modules/Basic Literacy/LS5Understanding'
import LS2Scientific from './pages/Teacher/Modules/Lower Elementary/LS2Scientific'
import LS3Mathematical from './pages/Teacher/Modules/Lower Elementary/LS3Mathematical'
import LS1English from './pages/Teacher/Modules/Advance Elementary/LS1English'
import LS1Filipino from './pages/Teacher/Modules/Advance Elementary/LS1Filipino'
import LS2ScientificLiteracy from './pages/Teacher/Modules/Advance Elementary/LS2ScientificLiteracy'
import LS3Mathematics from './pages/Teacher/Modules/Advance Elementary/LS3Mathematics'
import LS4Life from './pages/Teacher/Modules/Advance Elementary/LS4Life'
import LS6Digital from './pages/Teacher/Modules/Advance Elementary/LS6Digital'

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


function LayoutTeacher(){
  return(
    <>
    <NavbarTeacher>
      <Outlet />
    </NavbarTeacher>


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
      },
      {
        path: "/teacher/sign-in",
        element: <TeacherLoginForm />
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
  },
  {
    path: "/teacher",
    element: <LayoutTeacher />,
    children: [
      {
        path: "/teacher/dashboard",
        element: <Teacher />
      },
      {
        path: "/teacher/students-als",
        element: <TeacherAlsStudent />
      },
      {
        path: "/teacher/flt-result",
        element: <TeacherFLTResult />
      },
      {
        path: "/teacher/learning-modules",
        element: <TeacherLearningModules />
      },
      {
        path: "/teacher/learning-modules/basic-ls1",
        element: <LS1ComSkills />
      },
      {
        path: "/teacher/learning-modules/basic-ls2",
        element: <LS2ProblemSolving />
      },
      {
        path: "/teacher/learning-modules/basic-ls5",
        element: <LS5Understanding />
      },
      {
        path: "/teacher/learning-modules/lem-ls2",
        element: <LS2Scientific />
      },
      {
        path: "/teacher/learning-modules/lem-ls3",
        element: <LS3Mathematical />
      },
      {
        path: "/teacher/learning-modules/lem-ls5",
        element: <LS5Understanding />
      },
      {
        path: "/teacher/learning-modules/ael-ls1-english",
        element: <LS1English />
      },
      {
        path: "/teacher/learning-modules/ael-ls1-filipino",
        element: <LS1Filipino />
      },
      {
        path: "/teacher/learning-modules/ael-ls2",
        element: <LS2ScientificLiteracy />
      },
      {
        path: "/teacher/learning-modules/ael-ls3",
        element: <LS3Mathematics />
      },
      {
        path: "/teacher/learning-modules/ael-ls4",
        element: <LS4Life />
      },
      {
        path: "/teacher/learning-modules/ael-ls5",
        element: <LS5Understanding />
      },
      {
        path: "/teacher/learning-modules/ael-ls6",
        element: <LS6Digital />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
