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
import ALSStudentPIS from './pages/Teacher/Students Response/ALSStudentPIS'
import ALSComEnglish from './pages/Teacher/Students Response/ALSComEnglish'
import ALSComFilipino from './pages/Teacher/Students Response/ALSComFilipino'
import ALSScientific from './pages/Teacher/Students Response/ALSScientific'
import ALSMath from './pages/Teacher/Students Response/ALSMath'
import ALSLifeCareer from './pages/Teacher/Students Response/ALSLifeCareer'
import ALSUnderstanding from './pages/Teacher/Students Response/ALSUnderstanding'
import ALSDigitalCitizenship from './pages/Teacher/Students Response/ALSDigitalCitizenship'
import NavbarStudent from './components/NavbarStudent'
import StudentAnswerPIS from './pages/ALS Student/StudentAnswerPIS'
import StudentDashboard from './pages/ALS Student/StudentDashboard'
import StudentLearnings from './pages/ALS Student/StudentLearnings'
import StudentLS1ComSkills from './pages/ALS Student/Modules/Basic Literacy/StudentLS1ComSkills'
import StudentLS2ProblemSolving from './pages/ALS Student/Modules/Basic Literacy/StudentLS2ProblemSolving'
import StudentLS5Uts from './pages/ALS Student/Modules/Advance Elementary/StudentLS5Uts'
import StudentLS2Scientific from './pages/ALS Student/Modules/Lower Elementary/StudentLS2Scientific'
import StudentLS3Mathematical from './pages/ALS Student/Modules/Lower Elementary/StudentLS3Mathematical'
import StudentLS5TheSelf from './pages/ALS Student/Modules/Lower Elementary/StudentLS5TheSelf'
import StudentLS1English from './pages/ALS Student/Modules/Advance Elementary/StudentLS1English'
import StudentLS1Filipino from './pages/ALS Student/Modules/Advance Elementary/StudentLS1Filipino'
import StudentLS2ScientificLiteracy from './pages/ALS Student/Modules/Advance Elementary/StudentLS2ScientificLiteracy'
import StudentLS3Mathematics from './pages/ALS Student/Modules/Advance Elementary/StudentLS3Mathematics'
import StudentLS4Life from './pages/ALS Student/Modules/Advance Elementary/StudentLS4Life'
import StudentLS5Understanding from './pages/ALS Student/Modules/Basic Literacy/StudentLS5Understanding'
import StudentLS6Digital from './pages/ALS Student/Modules/Advance Elementary/StudentLS6Digital'
import LS5TheSelf from './pages/Teacher/Modules/Lower Elementary/LS5TheSelf'
import LS5Uts from './pages/Teacher/Modules/Advance Elementary/LS5Uts'
import StudentAssessments from './pages/ALS Student/StudentAssessments'
import StudentPreTest from './pages/ALS Student/Assessments/StudentPreTest'

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

function LayoutStudent(){
  return(
    <>
      <NavbarStudent>
        <Outlet />
      </NavbarStudent>


    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
      },
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
        element: <LS5TheSelf />
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
        element: <LS5Uts />
      },
      {
        path: "/teacher/learning-modules/ael-ls6",
        element: <LS6Digital />
      },
      {
        path: "/teacher/als-student-pis",
        element: <ALSStudentPIS />
      },
      {
        path: "/teacher/com-english",
        element: <ALSComEnglish />
      },
      {
        path: "/teacher/com-filipino",
        element: <ALSComFilipino />
      },
      {
        path: "/teacher/scientific",
        element: <ALSScientific />
      },
      {
        path: "/teacher/math",
        element: <ALSMath />
      },
      {
        path: "/teacher/life-career",
        element: <ALSLifeCareer />
      },
      {
        path: "/teacher/uts",
        element: <ALSUnderstanding />
      },
      {
        path: "/teacher/digital-citizenship",
        element: <ALSDigitalCitizenship />
      }
    ]
  },
  {
    path: "/student",
    element: <LayoutStudent />,
    children: [
      {
        path: "/student/answerPIS",
        element: <StudentAnswerPIS />
      },
      {
        path: "/student",
        element: <Home />
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />
      },
      {
        path: "/student/learnings",
        element: <StudentLearnings />
      },
      {
        path: "/student/learning-modules/basic-ls1",
        element: <StudentLS1ComSkills />
      },
      {
        path: "/student/learning-modules/basic-ls2",
        element: <StudentLS2ProblemSolving />
      },
      {
        path: "/student/learning-modules/basic-ls5",
        element: <StudentLS5Understanding />
      },
      {
        path: "/student/learning-modules/lem-ls2",
        element: <StudentLS2Scientific />
      },
      {
        path: "/student/learning-modules/lem-ls3",
        element: <StudentLS3Mathematical />
      },
      {
        path: "/student/learning-modules/lem-ls5",
        element: <StudentLS5TheSelf />
      },
      {
        path: "/student/learning-modules/ael-ls1-english",
        element: <StudentLS1English />
      },
      {
        path: "/student/learning-modules/ael-ls1-filipino",
        element: <StudentLS1Filipino />
      },
      {
        path: "/student/learning-modules/ael-ls2",
        element: <StudentLS2ScientificLiteracy />
      },
      {
        path: "/student/learning-modules/ael-ls3",
        element: <StudentLS3Mathematics />
      },
      {
        path: "/student/learning-modules/ael-ls4",
        element: <StudentLS4Life />
      },
      {
        path: "/student/learning-modules/ael-ls5",
        element: <StudentLS5Uts />
      },
      {
        path: "/student/learning-modules/ael-ls6",
        element: <StudentLS6Digital />
      },
      {
        path: "/student/assessments",
        element: <StudentAssessments />
      },
      {
        path: "/student/pretest",
        element: <StudentPreTest />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
