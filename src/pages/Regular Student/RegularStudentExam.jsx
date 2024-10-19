import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function RegularStudentExam() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getScoreLS1English, setGetScoreLS1English] = useState(0)
    const [getScoreLS1Filipino, setGetScoreLS1Filipino] = useState(0)
    const [getScoreLS2, setGetScoreLS2] = useState(0)
    const [getScoreLS3, setGetScoreLS3] = useState(0)
    const [getScoreLS4, setGetScoreLS4] = useState(0)
    const [getScoreLS5, setGetScoreLS5] = useState(0)
    const [getScoreLS6, setGetScoreLS6] = useState(0)
    const navigate = useNavigate()
  
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user'))
      setgetFirstname(user.fullname)
      setgetLRN(user.lrn)

      getSpecificStudents()
    },[])

    const getSpecificStudents = async() =>{

      const user = JSON.parse(localStorage.getItem('user'))
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getStudents', { params: { students_id: parseInt(user.id) } });
        console.log(response)
        

        if(response.data[0].score_ls1_english == null){
          setGetScoreLS1English(0)
        }else{
          setGetScoreLS1English(response.data[0].score_ls1_english)
        }
        
        if(response.data[0].score_ls1_filipino == null){
          setGetScoreLS1Filipino(0)
        }else{
          setGetScoreLS1Filipino(response.data[0].score_ls1_filipino)
        }

        if(response.data[0].score_ls2_scientific == null){
          setGetScoreLS2(0)
        }else{
          setGetScoreLS2(response.data[0].score_ls2_scientific)
        }

        if(response.data[0].score_ls3_math == null){
          setGetScoreLS3(0)
        }else{
          setGetScoreLS3(response.data[0].score_ls3_math)
        }

        if(response.data[0].score_ls4_life == null){
          setGetScoreLS4(0)
        }else{
          setGetScoreLS4(response.data[0].score_ls4_life)
        }

        if(response.data[0].score_ls5_uts == null){
          setGetScoreLS5(0)
        }else{
          setGetScoreLS5(response.data[0].score_ls5_uts)
        }

        if(response.data[0].score_ls6_digital == null){
          setGetScoreLS6(0)
        }else{
          setGetScoreLS6(response.data[0].score_ls6_digital)
        }

    } catch (error) {
        console.log(error);
    }
  }

    const testData = [
        {
          id: 'LS1',
          title: 'Communication Skills (English)',
          score: `${getScoreLS1English}/8`,
          link: '/student/pretest-ls1-english'
        },
        {
          id: 'LS1',
          title: 'Communication Skills (Filipino)',
          score: `${getScoreLS1Filipino}/6`,
          link: '/student/pretest-ls1-filipino'

        },
        {
          id: 'LS2',
          title: 'Scientific Literacy And Critical Thinking Skills',
          score: `${getScoreLS2}/5`,
          link: '/student/pretest-ls2-scientific'
        },
        {
          id: 'LS3',
          title: 'Mathematical And Problem-Solving Skills',
          score: `${getScoreLS3}/8`,
          link: '/student/pretest-ls3-math'
        },
        {
          id: 'LS4',
          title: 'Life And Career Skills',
          score: `${getScoreLS4}/6`,
          link: '/student/pretest-ls4-life'
        },
        {
          id: 'LS5',
          title: 'Understanding The Self And Society',
          score: `${getScoreLS5}/5`,
          link: '/student/pretest-ls5-understanding'
        },
        {
          id: 'LS6',
          title: 'Digital Citizenship',
          score: `${getScoreLS6}/6`,
          link: '/student/pretest-ls6-citizenship'
        },
      ];

  return (
    <>
    <div className="p-4 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl font-semibold">{getFirstname}</h2>
            <p className="text-gray-500">LRN: {getLRN}</p>
          </div>
        </div>
        <div>
          <div className="flex space-x-4">
            <div>
              <p className="text-sm text-gray-500">Current School Year</p>
              <p className="font-semibold">S.Y. 2024-2025</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
          </div>
          {/* <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div> */}
        </div>
      </div>

        <div className="bg-gray-100 min-h-screen p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4">Pre-Test (School Year 2022-2023)</h1>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testData.map((test, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-4">
              {/* Circular Progress Placeholder */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Background Circle */}
        
                {/* Score */}
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                  {test.score}
                </div>
              </div>

              {/* Test Info */}
              <h3 className="text-md font-bold mb-2">{test.id}: {test.title}</h3>
            </div>

            {/* Start Button or Locked Icon */}
            <div className="text-center">
              <Link to={test.link}>           
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Start
                </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    





    </>
  )
}
