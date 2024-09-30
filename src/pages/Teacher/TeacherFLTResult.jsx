import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function TeacherFLTResult(){
  const preTestResults = [
    { id: 1, name: "Avelino, Alex Christian", idNumber: "517011901717", progress: "100%", PIS: "9/10", LS1_Eng: "8/8", LS1_Fil: "4/6", LS2: "5/5", LS3: "4/8", LS4: "4/6", LS5: "5/5", LS6: "6/6", evaluation: "45/54 Junior H.S. (Grade 7-10)" },
    { id: 2, name: "Mesiona, Mark Theodore A.", idNumber: "136453160522", progress: "100%", PIS: "9/10", LS1_Eng: "5/8", LS1_Fil: "6/6", LS2: "5/5", LS3: "4/8", LS4: "4/6", LS5: "5/5", LS6: "6/6", evaluation: "43/54 Junior H.S. (Grade 7-10)" },
    { id: 3, name: "Ashley, Ashley D.", idNumber: "136453100031", progress: "100%", PIS: "10/10", LS1_Eng: "4/8", LS1_Fil: "3/5", LS2: "5/5", LS3: "3/8", LS4: "4/6", LS5: "5/5", LS6: "6/6", evaluation: "37/54 Junior H.S. (Grade 7-10)" },
    // Add more data as needed
  ];

  const postTestResults = [
    { id: 1, name: "De Leon, Jefferson D.", idNumber: "10234455412", progress: "100%", PIS: "9/10", LS1_Eng: "5/8", LS1_Fil: "2/6", LS2: "1/5", LS3: "1/8", LS4: "1/6", LS5: "2/5", LS6: "1/6", evaluation: "22/54 Advance Elementary (Grade 4-6)" },
    // Add more data as needed
  ];

  const navigate = useNavigate()
  const [getAllStudents, setgetAllStudents] = useState([])
  const [getUserType, setgetUserType] = useState("")
  const [getTeacherName, setgetTeacherName] = useState("")
  const [getAllScores, setGetAllScores] = useState(0)

  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
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
                        <td className="py-2 px-4 border">{result.ls1_english}</td>
                        <td className="py-2 px-4 border">{result.ls1_filipino}</td>
                        <td className="py-2 px-4 border">{result.ls2}</td>
                        <td className="py-2 px-4 border">{result.ls3}</td>
                        <td className="py-2 px-4 border">{result.ls4}</td>
                        <td className="py-2 px-4 border">{result.ls5}</td>
                        <td className="py-2 px-4 border">{result.ls6}</td>
                        <td className="py-2 px-4 border">{result.pis + result.ls1_english + result.ls1_filipino + result.ls2 + result.ls3 + result.ls4 + result.ls5 + result.ls6} / 54 <br /> {handleGetAllScores(result.ls1_english + result.ls1_filipino + result.ls2 + result.ls3 + result.ls4 + result.ls5 + result.ls6)}</td>
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
            {postTestResults.map((result, index) => (
              <tr key={result.id} className="text-center">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{result.name}</td>
                {/* <td className="py-2 px-4 border">{result.progress}</td> */}
                <td className="py-2 px-4 border">{result.PIS}</td>
                <td className="py-2 px-4 border">{result.LS1_Eng}</td>
                <td className="py-2 px-4 border">{result.LS1_Fil}</td>
                <td className="py-2 px-4 border">{result.LS2}</td>
                <td className="py-2 px-4 border">{result.LS3}</td>
                <td className="py-2 px-4 border">{result.LS4}</td>
                <td className="py-2 px-4 border">{result.LS5}</td>
                <td className="py-2 px-4 border">{result.LS6}</td>
                <td className="py-2 px-4 border">{result.evaluation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

