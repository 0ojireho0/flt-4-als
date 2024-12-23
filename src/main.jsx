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
import LS1PreTestEnglish from './pages/ALS Student/Assessments/LS1PreTestEnglish'
import LS1PreTestFilipino from './pages/ALS Student/Assessments/LS1PreTestFilipino'
import LS2PreTestScientific from './pages/ALS Student/Assessments/LS2PreTestScientific'
import LS3PreTestMathematical from './pages/ALS Student/Assessments/LS3PreTestMathematical'
import LS4PreTestLife from './pages/ALS Student/Assessments/LS4PreTestLife'
import LS5PreTestUnderstanding from './pages/ALS Student/Assessments/LS5PreTestUnderstanding'
import LS6PreTestDigital from './pages/ALS Student/Assessments/LS6PreTestDigital'
import StudentReadingTest from './pages/ALS Student/Assessments/StudentReadingTest'
import StudentPostTest from './pages/ALS Student/Assessments/StudentPostTest'
import LS1PostTestEnglish from './pages/ALS Student/Assessments/LS1PostTestEnglish'
import LS1PostTestFilipino from './pages/ALS Student/Assessments/LS1PostTestFilipino'
import LS2PostTestScientific from './pages/ALS Student/Assessments/LS2PostTestScientific'
import LS3PostTestMathematical from './pages/ALS Student/Assessments/LS3PostTestMathematical'
import LS4PostTestLife from './pages/ALS Student/Assessments/LS4PostTestLife'
import LS5PostTestUnderstanding from './pages/ALS Student/Assessments/LS5PostTestUnderstanding'
import LS6PostTestDigital from './pages/ALS Student/Assessments/LS6PostTestDigital'
import RegularStudentAdmin from './pages/Admin/RegularStudentAdmin'
import RegularTeacherAdmin from './pages/Admin/RegularTeacherAdmin'
import RegularStudentSignIn from './pages/Regular Student/RegularStudentSignIn'
import NavbarRegularStudent from './components/NavbarRegularStudent'
import RegularStudentDashboard from './pages/Regular Student/RegularStudentDashboard'
import RegularStudentAssessments from './pages/Regular Student/RegularStudentAssessments'
import RegularStudentGrade7 from './pages/Regular Student/Exams/RegularStudentGrade7'
import EnglishGrade7 from './pages/Regular Student/Exams/Grade7/EnglishGrade7'
import FilipinoGrade7 from './pages/Regular Student/Exams/Grade7/FilipinoGrade7'
import ScienceGrade7 from './pages/Regular Student/Exams/Grade7/ScienceGrade7'
import MathGrade7 from './pages/Regular Student/Exams/Grade7/MathGrade7'
import NavbarRegularTeacher from './components/NavbarRegularTeacher'
import RegularTeacherDashboard from './pages/Regular Teacher/RegularTeacherDashboard'
import RegularTeacherSignIn from './pages/Regular Teacher/RegularTeacherSignIn'
import RegularTeacherEnglish from './pages/Regular Teacher/Exam/RegularTeacherEnglish'
import RegularTeacherFilipino from './pages/Regular Teacher/Exam/RegularTeacherFilipino'
import RegularTeacherMath from './pages/Regular Teacher/Exam/RegularTeacherMath'
import RegularTeacherScience from './pages/Regular Teacher/Exam/RegularTeacherScience'
import RegularStudentGrade8 from './pages/Regular Student/Exams/RegularStudentGrade8'
import EnglishGrade8 from './pages/Regular Student/Exams/Grade8/EnglishGrade8'
import FilipinoGrade8 from './pages/Regular Student/Exams/Grade8/FilipinoGrade8'
import MathGrade8 from './pages/Regular Student/Exams/Grade8/MathGrade8'
import ScienceGrade8 from './pages/Regular Student/Exams/Grade8/ScienceGrade8'
import RegularStudentGrade9 from './pages/Regular Student/Exams/RegularStudentGrade9'
import EnglishGrade9 from './pages/Regular Student/Exams/Grade9/EnglishGrade9'
import FilipinoGrade9 from './pages/Regular Student/Exams/Grade9/FilipinoGrade9'
import MathGrade9 from './pages/Regular Student/Exams/Grade9/MathGrade9'
import ScienceGrade9 from './pages/Regular Student/Exams/Grade9/ScienceGrade9'
import RegularStudentGrade10 from './pages/Regular Student/Exams/RegularStudentGrade10'
import EnglishGrade10 from './pages/Regular Student/Exams/Grade10/EnglishGrade10'
import FilipinoGrade10 from './pages/Regular Student/Exams/Grade10/FilipinoGrade10'
import MathGrade10 from './pages/Regular Student/Exams/Grade10/MathGrade10'
import ScienceGrade10 from './pages/Regular Student/Exams/Grade10/ScienceGrade10'
import StudentReadingTestFilipino from './pages/ALS Student/Assessments/StudentReadingTestFilipino'
import StudentReadingTestMath from './pages/ALS Student/Assessments/StudentReadingTestMath'
import StudentReadingDigitalLiteracy from './pages/ALS Student/Assessments/StudentReadingTestDigitalLiteracy'
import StudentReadingEnglish from './pages/ALS Student/Assessments/StudentReadingTestEnglish'
import StudentReadingTestUTS from './pages/ALS Student/Assessments/StudentReadingTestUTS'
import RegularTeacherModules from './pages/Regular Teacher/RegularTeacherModules'
import RegularTeacherEnglishModule from './pages/Regular Teacher/Modules/RegularTeacherEnglishModule'
import RegularTeacherFilipinoModule from './pages/Regular Teacher/Modules/RegularTeacherFilipinoModule'
import RegularTeacherScienceModule from './pages/Regular Teacher/Modules/RegularTeacherScienceModule'
import RegularTeacherMathModule from './pages/Regular Teacher/Modules/RegularTeacherMathModule'
import RegularStudentModules from './pages/Regular Student/RegularStudentModules'
import RegularStudentEnglishModule from './pages/Regular Student/Modules/RegularStudentEnglishModule'
import RegularStudentFilipinoModule from './pages/Regular Student/Modules/RegularStudentFilipinoModule'
import RegularStudentMathModule from './pages/Regular Student/Modules/RegularStudentMathModule'
import RegularStudentScienceModule from './pages/Regular Student/Modules/RegularStudentScienceModule'


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

function LayoutRegularStudent(){
  return(
    <>
    <NavbarRegularStudent>
      <Outlet />
    </NavbarRegularStudent>

    </>
  )
}

function LayoutRegularTeacher(){
  return(
    <NavbarRegularTeacher>
      <Outlet />
    </NavbarRegularTeacher>
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
      },
      {
        path: "/regular-student/sign-in",
        element: <RegularStudentSignIn />
      },
      {
        path: "/regular-teacher/sign-in",
        element: <RegularTeacherSignIn />
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
      },
      {
        path: "/admin/regular-students",
        element: <RegularStudentAdmin />
      },
      {
        path: "/admin/regular-teachers",
        element: <RegularTeacherAdmin />
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
      },
      {
        path: "/student/pretest-ls1-english",
        element: <LS1PreTestEnglish />
      },
      {
        path: "/student/pretest-ls1-filipino",
        element: <LS1PreTestFilipino />
      },
      {
        path: "/student/pretest-ls2-scientific",
        element: <LS2PreTestScientific />
      },
      {
        path: "/student/pretest-ls3-math",
        element: <LS3PreTestMathematical />
      },
      {
        path: "/student/pretest-ls4-life",
        element: <LS4PreTestLife />
      },
      {
        path: "/student/pretest-ls5-understanding",
        element: <LS5PreTestUnderstanding />
      },
      {
        path: "/student/pretest-ls6-citizenship",
        element: <LS6PreTestDigital />
      },
      {
        path: "/student/reading-test",
        element: <StudentReadingTest />
      },
      {
        path: "/student/posttest",
        element: <StudentPostTest />
      },
      {
        path: "/student/posttest-ls1-english",
        element: <LS1PostTestEnglish />
      },
      {
        path: "/student/posttest-ls1-filipino",
        element: <LS1PostTestFilipino />
      },
      {
        path: "/student/posttest-ls2-scientific",
        element: <LS2PostTestScientific />
      },
      {
        path: "/student/posttest-ls3-math",
        element: <LS3PostTestMathematical />
      },
      {
        path: "/student/posttest-ls4-life",
        element: <LS4PostTestLife />
      },
      {
        path: "/student/posttest-ls5-understanding",
        element: <LS5PostTestUnderstanding />
      },
      {
        path: "/student/posttest-ls6-citizenship",
        element: <LS6PostTestDigital />
      },
      {
        path: "/student/reading-test-filipino",
        element: <StudentReadingTestFilipino />
      },
      {
        path: "/student/reading-test-math",
        element: <StudentReadingTestMath />
      },
      {
        path: "/student/reading-test-digital",
        element: <StudentReadingDigitalLiteracy />
      },
      {
        path: "/student/reading-test-english",
        element: <StudentReadingEnglish />
      },
      {
        path: "/student/reading-test-uts",
        element: <StudentReadingTestUTS />
      }
    ]
  },
  {
    path: "/regular-student",
    element: <LayoutRegularStudent />,
    children: [
      {
        path:"/regular-student/dashboard",
        element: <RegularStudentDashboard />
      },
      {
        path: "/regular-student/assessments",
        element: <RegularStudentAssessments />
      },
      {
        path: "/regular-student/exam-for-grade7",
        element: <RegularStudentGrade7 />
      },
      {
        path: "/regular-student/exam-for-grade8",
        element: <RegularStudentGrade8 />
      },
      {
        path: "/regular-student/grade7-english",
        element: <EnglishGrade7 />
      },
      {
        path: '/regular-student/grade7-filipino',
        element: <FilipinoGrade7 />
      },
      {
        path: '/regular-student/grade7-scientific',
        element: <ScienceGrade7 />
      },
      {
        path: '/regular-student/grade7-math',
        element: <MathGrade7 />
      },
      {
        path: '/regular-student/grade8-english',
        element: <EnglishGrade8 />
      },
      {
        path: '/regular-student/grade8-filipino',
        element: <FilipinoGrade8 />
      },
      {
        path: '/regular-student/grade8-math',
        element: <MathGrade8 />
      },
      {
        path: '/regular-student/grade8-scientific',
        element: <ScienceGrade8 />
      },
      {
        path: '/regular-student/exam-for-grade9',
        element: <RegularStudentGrade9 />
      },
      {
        path: '/regular-student/grade9-english',
        element: <EnglishGrade9 />
      },
      {
        path: '/regular-student/grade9-filipino',
        element: <FilipinoGrade9 />
      },
      {
        path: '/regular-student/grade9-math',
        element: <MathGrade9 />
      },
      {
        path: '/regular-student/grade9-scientific',
        element: <ScienceGrade9 />
      },
      {
        path: '/regular-student/exam-for-grade10',
        element: <RegularStudentGrade10 />
      },
      {
        path: '/regular-student/grade10-english',
        element: <EnglishGrade10 />
      },
      {
        path: '/regular-student/grade10-filipino',
        element: <FilipinoGrade10 />
      },
      {
        path: '/regular-student/grade10-math',
        element: <MathGrade10 />
      },
      {
        path: '/regular-student/grade10-scientific',
        element: <ScienceGrade10 />
      },
      {
        path: '/regular-student/learnings',
        element: <RegularStudentModules />
      },
      {
        path: '/regular-student/english-modules',
        element: <RegularStudentEnglishModule />
      },  
      {
        path: '/regular-student/filipino-modules',
        element: <RegularStudentFilipinoModule />
      },
      {
        path: '/regular-student/math-modules',
        element: <RegularStudentMathModule />
      },
      {
        path: '/regular-student/science-modules',
        element: <RegularStudentScienceModule />
      }
  

    ]
  },
  {
    path:'/regular-teacher' ,
    element: <LayoutRegularTeacher />,
    children: [
      {
        path: "/regular-teacher/dashboard",
        element: <RegularTeacherDashboard />
      },
      {
        path: "/regular-teacher/english",
        element: <RegularTeacherEnglish />
      },
      {
        path: "/regular-teacher/filipino",
        element: <RegularTeacherFilipino />
      },
      {
        path: "/regular-teacher/math",
        element: <RegularTeacherMath />
      },
      {
        path: "/regular-teacher/science",
        element: <RegularTeacherScience />
      },
      {
        path: "/regular-teacher/modules",
        element: <RegularTeacherModules />
      },
      {
        path: "/regular-teacher/english-modules",
        element: <RegularTeacherEnglishModule />
      },
      {
        path: "/regular-teacher/filipino-modules",
        element: <RegularTeacherFilipinoModule />
      },
      {
        path: "/regular-teacher/science-modules",
        element: <RegularTeacherScienceModule />
      },
      {
        path: "/regular-teacher/math-modules",
        element: <RegularTeacherMathModule />
      }
    ]
  }
])

  createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
