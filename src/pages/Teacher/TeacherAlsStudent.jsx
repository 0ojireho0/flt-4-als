import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TeacherAlsStudent () {

  const navigate = useNavigate()
  const [getAllStudents, setgetAllStudents] = useState([])
  const [getUserType, setgetUserType] = useState("")
  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [showPreTestModal, setShowPreTestModal] = useState(false)
  const [getTeacherName, setgetTeacherName] = useState("")
  const [getFullNameStudent, setGetFullNameStudent] = useState("")
  const [getAllScores, setGetAllScores] = useState(0)
  const [ls1Filipino, setls1Filipino] = useState(0)
  const [ls1english, setls1english] = useState(0)
  const [ls2, setls2] = useState(0)
  const [ls3, setls3] = useState(0)
  const [ls4, setls4] = useState(0)
  const [ls5, setls5] = useState(0)
  const [ls6, setls6] = useState(0)
  const [pis, setpis] = useState(0)

  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
      console.log(response.data)
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
  } catch (error) {
      console.log(error);
  }
}



  useEffect(()=>{

    const user = JSON.parse(localStorage.getItem('user'))


    if(user == null || user.user_type !== "ALS Teacher"){
        navigate('/teacher/sign-in')
      }else{
        setgetTeacherName(user.fullname)
        setgetUserType(user.user_type)
        // console.log(user.id)
      }


    getSpecificStudents()



  }, [])


  const handleShowPreTestModal = (student) =>{
    setShowPreTestModal(!showPreTestModal)
    setGetFullNameStudent(student.fullname)
    setGetAllScores(student.pis + student.score_ls1_filipino + student.score_ls1_english + student.score_ls2_scientific + student.score_ls3_math + student.score_ls4_life + student.score_ls5_uts + student.score_ls6_digital)
    setls1Filipino(student.score_ls1_filipino)
    setls1english(student.score_ls1_english)
    setls2(student.score_ls2_scientific)
    setls3(student.score_ls3_math)
    setls4(student.score_ls4_life)
    setls5(student.score_ls5_uts)
    setls6(student.score_ls6_digital)
    setpis(student.pis)
 
  }

  const handleGetAllScores = (score) => {
    if(score >= 28 && score <= 54){
        return "Junior HS (Grade 7-10)"
    }else if(score >= 14 && score <= 27){
        return "Advanced Elem. (Grade 4-6)"
    }else if(score >= 10 && score <= 13){
        return "Lower Elem. (Grade 2-3)"
    }else{
        return "Basic Level (Grade 1)"
    }
    
  }

  const handleGetPISScore = (score) =>{
    if(score >= 7 && score <= 10){
      return "Junior HS (Grade 7-10)"
    } else if(score == 6){
      return "Advance Elem. (Grade 4-6)"
    } else if(score == 5){
      return "Lower Elem. (Grade 2-3)"
    }else{
      return "Basic Level (Grade 1)"
    }
  }

  const handleGetEnglishScore = (score) =>{
    if(score >= 5 && score <= 8){
      return "Junior HS (Grade 7-10)"
    } else if(score == 4){
      return "Advance Elem. (Grade 4-6)"
    } else if(score == 3){
      return "Lower Elem. (Grade 2-3)"
    }else{
      return "Basic Level (Grade 1)"
    }
  }

  const handleGetFilipinoScore = (score) =>{
    if(score >= 4 && score <= 6){
      return "Junior HS (Grade 7-10)"
    } else if(score == 3){
      return "Advance Elem. (Grade 4-6)"
    } else if(score == 2){
      return "Lower Elem. (Grade 2-3)"
    }else{
      return "Basic Level (Grade 1)"
    }
  }

  const handleGetScientificScore = (score) =>{
    if(score >= 3 && score <= 5){
      return "Junior HS (Grade 7-10)"
    } else if(score >= 1 && score <= 2){
      return "Advance Elem. (Grade 4-6)"
    }else{
      return "Lower Elem. (Grade 2-3)"
    }
  }

  const handleGetMathScore = (score) =>{
    if(score >= 5 && score <= 8){
      return "Junior HS (Grade 7-10)"
    } else if(score == 4){
      return "Advance Elem. (Grade 4-6)"
    }else if(score == 3){
      return "Lower Elem. (Grade 2-3)"
    }
    else{
      return "Basic Level (Grade 1)"
    }
  }

  const handleGetLifeScore = (score) =>{
    if(score >= 4 && score <= 6){
      return "Junior HS (Grade 7-10)"
    } else if(score >= 1 && score <= 3){
      return "Advance Elem. (Grade 4-6)"
    }else{
      return "Lower Elem. (Grade 2-3)"
    }
  }

  const handleGetUTSScore = (score) =>{
    if(score >= 4 && score <= 5){
      return "Junior HS (Grade 7-10)"
    } else if(score >= 1 && score <= 3){
      return "Advance Elem. (Grade 4-6)"
    }else{
      return "Lower Elem. (Grade 2-3)"
    }
  }
  
  const handleGetDigitalScore = (score) =>{
    if(score >= 3 && score <= 6){
      return "Junior HS (Grade 7-10)"
    } else if(score >= 1 && score <= 2){
      return "Advance Elem. (Grade 4-6)"
    }else{
      return "Lower Elem. (Grade 2-3)"
    }
  }

  const handleLogout = () =>{
    localStorage.removeItem('user'); 
    // console.log('Item removed from localStorage');
    navigate('/teacher/sign-in')
  
  }

  return (
    <>
   <div className="p-6 bg-gray-100 min-h-screen">
    <p>{getTeacherName} ({getUserType})</p>
        <div className='flex justify-end mb-3'>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleLogout}>Logout</button>
        </div>
      {/* Top Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">Active ALS Students</h3>
          <p className="text-green-600 text-2xl">{getActiveStudents} Active</p>
          {/* <p className="text-red-500">13 Registered ALS Student/s</p> */}
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">Current School Year</h3>
          <p className="text-blue-600 text-2xl">S.Y. 2022-2023</p>
          <p>Date: July 24, 2023</p>
        </div>
        {/* <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">Active Test Period</h3>
          <p className="text-blue-600 text-2xl">Pre-test</p>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2">
            Start Post-test
          </button>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">Test Status</h3>
          <p className="text-red-600 text-2xl">Closed</p>
          <button className="bg-green-500 text-white rounded-lg px-4 py-2 mt-2">
            Start Accepting Test Response
          </button>
        </div> */}
      </div>

      {/* Student Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getAllStudents.map((student, index)=>{
            {/* console.log(student) */}
            return(
                <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500"
                >
                    <div className="flex items-center mb-4">

                    <div>
                        <h4 className="text-lg font-bold">{student.fullname}</h4>
                    </div>
                    </div>
                    <p className="text-gray-700">
                    {/* Pre-test: <span className="font-bold">{handlePreTest(student.ls1_english, student.ls1_filipino, student.ls2, student.ls3, student.ls4, student.ls5, student.ls6)}</span> */}
                    </p>
                    <p className="text-gray-700">
                    {/* Post-test: <span className="font-bold">{handlePreTest(student.ls1_english, student.ls1_filipino, student.ls2, student.ls3, student.ls4, student.ls5, student.ls6)}</span> */}
                    </p>
                    <p className="text-gray-500">LRN: {student.lrn}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3 justify-between mt-4">
                    <button className="bg-green-500 text-white rounded-lg px-4 py-2" onClick={() => handleShowPreTestModal(student)}>
                        Pre-Test Score Sheet
                    </button>
                    <button className="bg-green-500 text-white rounded-lg px-4 py-2">
                         Post-Test Score Sheet
                    </button>
                    </div>
                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                        View P.I.S
                    </button>
                </div>
            )
        })}
      </div>
    </div>

    {showPreTestModal && (
        <> 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-3 overflow-auto">
            <div className="bg-white rounded-lg shadow-lg w-full p-6  mt-[50rem] md:mt-0 ">
                {/* Close Button */}
                <button
                onClick={()=>setShowPreTestModal(!showPreTestModal)}
                className=" text-gray-600 hover:text-gray-900"
                >
                &#x2715;
                </button>
                
                <h2 className="text-2xl font-bold text-center mb-4">FLT Learning Score Sheet</h2>
                
                <div className="mb-6">
                <p><strong>Name:</strong> {getFullNameStudent} </p>
                <p><strong>Overall Score:</strong> {getAllScores} / 54 </p>
                <p><strong>ALS Level:</strong> {handleGetAllScores(getAllScores)} </p>
                {/* <p><strong>Date:</strong></p> */}
                </div>
                
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                    <th className="border border-gray-300 px-4 py-2">Strands</th>
                    <th className="border border-gray-300 px-4 py-2">Score</th>
                    <th className="border border-gray-300 px-4 py-2">Level of Learning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">PIS</td>
                        <td className="border border-gray-300 px-4 py-2">{pis}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetPISScore(pis)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS1 Communication Skills - English</td>
                        <td className="border border-gray-300 px-4 py-2">{ls1english}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetEnglishScore(ls1english)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS1 Communication Skills - Filipino</td>
                        <td className="border border-gray-300 px-4 py-2">{ls1Filipino}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetFilipinoScore(ls1Filipino)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS2 Scientific and Critical Thinking Skills</td>
                        <td className="border border-gray-300 px-4 py-2">{ls2}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetScientificScore(ls2)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS3 Mathematical and Problem-solving Skills</td>
                        <td className="border border-gray-300 px-4 py-2">{ls3}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetMathScore(ls3)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS4 Life and Career</td>
                        <td className="border border-gray-300 px-4 py-2">{ls4}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetLifeScore(ls4)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS5 Understanding the Self and the Society</td>
                        <td className="border border-gray-300 px-4 py-2">{ls5}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetUTSScore(ls5)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">LS6 Digital Citizenship</td>
                        <td className="border border-gray-300 px-4 py-2">{ls6}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetDigitalScore(ls6)}</td>
                    </tr>
                    <tr className="bg-black/30">
                        <td className="border border-gray-300 px-4 py-2">Overall Score</td>
                        <td className="border border-gray-300 px-4 py-2">{getAllScores}</td>
                        <td className="border border-gray-300 px-4 py-2">{handleGetAllScores(getAllScores)}</td>
                    </tr>
                </tbody>
                </table>
                
                <div className="mt-6">
                <p>Name ALS Teacher</p>
                <p><strong>{getTeacherName}</strong></p>
                </div>
            </div>
            </div>
        
        
        
        
        </>
    )}








    </>

    


  );
};

