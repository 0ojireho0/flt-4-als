import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function RegularStudentGrade8() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getScoreEnglish, setGetScoreEnglish] = useState(0)
    const [getScoreFilipino, setGetScoreFilipino] = useState(0)
    const [getScoreScience, setGetScoreScience] = useState(0)
    const [getScoreMath, setGetScoreMath] = useState(0)
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
        const response = await axios.get('http://127.0.0.1:8000/api/get-teacher-teachername', { params: { regular_student_id: parseInt(user.id), regular_teacher_id: parseInt(user.regular_teacher_id) } });
        console.log(response.data.details[0])
        
        if(response.data.details[0].score_english == null){
            setGetScoreEnglish(0)
        }else{
            setGetScoreEnglish(response.data.details[0].score_english)
        }
        
        if(response.data.details[0].score_filipino == null){
            setGetScoreFilipino(0)
        }else{
          setGetScoreFilipino(response.data.details[0].score_filipino)
        }
        if(response.data.details[0].score_science == null){
            setGetScoreScience(0)
        }else{
          setGetScoreScience(response.data.details[0].score_science)
        }
        if(response.data.details[0].score_math == null){
          setGetScoreMath(0)
        }else{
          setGetScoreMath(response.data.details[0].score_math)
        }


        // if(response.data[0].score_ls1_english == null){
        //   setGetScoreLS1English(0)
        // }else{
        //   setGetScoreLS1English(response.data[0].score_ls1_english)
        // }
        
  

    } catch (error) {
        console.log(error);
    }
  }

    const testData = [
        {
          title: 'English',
          score: `${getScoreEnglish}/3`,
          link: '/regular-student/grade8-english'
        },
        {
          title: 'Filipino',
          score: `${getScoreFilipino}/3`,
          link: '/regular-student/grade8-filipino'

        },
        {
          title: 'Science',
          score: `${getScoreScience}/3`,
          link: '/regular-student/grade8-scientific'
        },
        {
          title: 'Math',
          score: `${getScoreMath}/3`,
          link: '/regular-student/grade8-math'
        },

      ];

  return (
    <>
    <div className="p-4  bg-gray-100">
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
              <p className="font-semibold">S.Y. 2022-2023</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
          </div>
          <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div>
        </div>
      </div>

        <div className="bg-gray-100  p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4">Periodical Exam for Grade 8</h1>
      </div>

      {/* Test Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-md font-bold mb-2">{test.title}</h3>
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
