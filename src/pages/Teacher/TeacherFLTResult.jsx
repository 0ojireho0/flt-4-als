import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function TeacherFLTResult(){

  const postTestResults = [
    { id: 1, name: "De Leon, Jefferson D.", idNumber: "10234455412", progress: "100%", PIS: "9/10", LS1_Eng: "5/8", LS1_Fil: "2/6", LS2: "1/5", LS3: "1/8", LS4: "1/6", LS5: "2/5", LS6: "1/6", evaluation: "22/54 Advance Elementary (Grade 4-6)" },
    // Add more data as needed
  ];

  const navigate = useNavigate()
  const [getAllStudents, setgetAllStudents] = useState([])
  const [getUserType, setgetUserType] = useState("")
  const [getTeacherName, setgetTeacherName] = useState("")
  const [getAllStudentsPostTest, setGetAllStudentsPostTest] = useState([])

  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
      const res = await axios.get('http://127.0.0.1:8000/api/get-specific-students-posttest', { params: { teacherId: user.id } })
      console.log(res.data)
      setGetAllStudentsPostTest(res.data)
      setgetAllStudents(response?.data)
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
  },[])

  const handleLogout = () =>{
    localStorage.removeItem('user'); 
    // console.log('Item removed from localStorage');
    navigate('/teacher/sign-in')
  
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


  return (
    <div className="p-4">
        <p>{getTeacherName} ({getUserType})</p>
        <div className='flex justify-end mb-3'>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleLogout}>Logout</button>
        </div>
      <h2 className="text-center font-bold text-xl mb-4">Student FLT Pre-Test Result</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-2 px-4">No.</th>
              <th className="py-2 px-4">Student</th>
              {/* <th className="py-2 px-4">Progress</th> */}
              <th className="py-2 px-4">PIS</th>
              <th className="py-2 px-4">LS1 Eng.</th>
              <th className="py-2 px-4">LS1 Fil</th>
              <th className="py-2 px-4">LS2</th>
              <th className="py-2 px-4">LS3</th>
              <th className="py-2 px-4">LS4</th>
              <th className="py-2 px-4">LS5</th>
              <th className="py-2 px-4">LS6</th>
              <th className="py-2 px-4">Evaluation</th>
            </tr>
          </thead>
          <tbody>
            {getAllStudents.map((result, index)=>{
                console.log(result)
                return(
                    <tr key={result.id} className="text-center">
                        <td className="py-2 px-4 border">{index + 1}</td>
                        <td className="py-2 px-4 border">{result.fullname}</td>
                        {/* <td className="py-2 px-4 border">{result.progress}</td> */}
                        <td className="py-2 px-4 border">{result.pis}</td>
                        <td className="py-2 px-4 border">{result.score_ls1_english}</td>
                        <td className="py-2 px-4 border">{result.score_ls1_filipino}</td>
                        <td className="py-2 px-4 border">{result.score_ls2_scientific}</td>
                        <td className="py-2 px-4 border">{result.score_ls3_math}</td>
                        <td className="py-2 px-4 border">{result.score_ls4_life}</td>
                        <td className="py-2 px-4 border">{result.score_ls5_uts}</td>
                        <td className="py-2 px-4 border">{result.score_ls6_digital}</td>
                        <td className="py-2 px-4 border">{result.pis + result.score_ls1_english + result.score_ls1_filipino + result.score_ls2_scientific + result.score_ls3_math + result.score_ls4_life + result.score_ls5_uts + result.score_ls6_digital} / 54 <br /> {handleGetAllScores(result.ls1_english + result.ls1_filipino + result.score_ls2_scientific + result.score_ls3_math + result.score_ls4_life + result.score_ls5_uts + result.score_ls6_digital)}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>

      <h2 className="text-center font-bold text-xl mt-8 mb-4">Student FLT Post-Test Result</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="py-2 px-4">No.</th>
              <th className="py-2 px-4">Student</th>
              {/* <th className="py-2 px-4">Progress</th> */}
              <th className="py-2 px-4">LS1 Eng.</th>
              <th className="py-2 px-4">LS1 Fil</th>
              <th className="py-2 px-4">LS2</th>
              <th className="py-2 px-4">LS3</th>
              <th className="py-2 px-4">LS4</th>
              <th className="py-2 px-4">LS5</th>
              <th className="py-2 px-4">LS6</th>
              <th className="py-2 px-4">Evaluation</th>
            </tr>
          </thead>
          <tbody>
            {getAllStudentsPostTest.map((result, index) => (
              <tr key={result.id} className="text-center">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{result.fullname}</td>
                {/* <td className="py-2 px-4 border">{result.progress}</td> */}
                <td className="py-2 px-4 border">{result.post_test_score_ls1_english}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls1_filipino}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls2_scientific}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls3_math}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls4_life}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls5_uts}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls6_digital}</td>
                <td className="py-2 px-4 border">{result.post_test_score_ls1_english + result.post_test_score_ls1_filipino + result.post_test_score_ls2_scientific + result.post_test_score_ls3_math + result.post_test_score_ls4_life + result.post_test_score_ls5_uts + result.post_test_score_ls6_digital} / 54 <br /> {handleGetAllScores(result.post_test_score_ls1_english + result.post_test_score_ls1_filipino + result.post_test_score_ls2_scientific + result.post_test_score_ls3_math + result.post_test_score_ls4_life + result.post_test_score_ls5_uts + result.post_test_score_ls6_digital)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

