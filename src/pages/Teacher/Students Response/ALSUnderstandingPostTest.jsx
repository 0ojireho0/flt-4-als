import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography } from '@material-tailwind/react';

import question1 from "../../../assets/ls5-assessments/LS5 Q1.png"
import question2 from "../../../assets/ls5-assessments/LS5 Q2.png"
import question3 from "../../../assets/ls5-assessments/LS5 Q3.png"
import question4 from "../../../assets/ls5-assessments/LS5 Q4.png"
import question5 from "../../../assets/ls5-assessments/LS5 Q5.png"

export default function ALSUnderstandingPostTest() {

    const [getActiveStudents, setGetActiveStudents] = useState(0)
    const [getAllStudents, setgetAllStudents] = useState([])
    const [showStudentScore, setshowStudentScore] = useState(false)
    const [fullname, setfullname] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [answer5, setAnswer5] = useState("")
  
    const [score, setScore] = useState(0)

    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students-posttest', { params: { teacherId: user.id } });
          setgetAllStudents(response?.data)
          setGetActiveStudents(response.data.length)
          console.log(response)
      } catch (error) {
          console.log(error);
      }
    }
    
      useEffect(()=>{
        
        const user = JSON.parse(localStorage.getItem('user'))
    
    
        if(user == null || user.user_type !== "ALS Teacher"){
            navigate('/teacher/sign-in')
          }
    
          getSpecificStudents()
    
      },[])
    
      const handleGetStudentScore = (student) =>{
        console.log(student)
        setshowStudentScore(true)
        setfullname(student.fullname)
        setAnswer1(student.post_test_ls5_1)
        setAnswer2(student.post_test_ls5_2)
        setAnswer3(student.post_test_ls5_3)
        setAnswer4(student.post_test_ls5_4)
        setAnswer5(student.post_test_ls5_5)
    
        setScore(student.post_test_score_ls5_uts)
    
        
      }

  return (
    <>
    <div className='flex flex-col md:flex-row p-6 bg-gray-100'>
    {showStudentScore ? (
        <>
        <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS5 Understanding the Self and Society</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/5</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang titik ng tamang sagot sa sagutang papel para sa LS5</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Ano ang pinakatamang gawin kapag inabutan ka ng lindol sa learning center?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question1} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Ligpitin ang mahahalagang bagay." disabled  />
              <Radio label="B. Tumakbo nang mabilis palabas."  disabled />
              <Radio label="C. Sumandal sa mataas na pader." disabled />
              <Radio label={<Typography className='text-green-500'>D. Magtago sa ilalim ng matibay na mesa.</Typography>} checked disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Batay sa larawan, alin ang tamang pagkakasunod-sunod ng mga kaganapan sa buhay ng isang tao? </p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question2} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. 3-2-4-1</Typography>} checked disabled />
              <Radio label="B. 4-3-2-1" disabled  />
              <Radio label="C. 1-4-2-3" disabled />
              <Radio label="D. 2-3-4-1" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. Napansin mong alas dose na ng gabi ngunit malakas pa rin ang tugtog at boses ng iyong kapitbahay. Hindi makatulong ang pamilya mo. Ano ang dapat mong gawin?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question3} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. Kausapin siya nang mahinahon.</Typography>} disabled checked />
              <Radio label="B. Igalang ang karapatan niya." disabled />
              <Radio label="C. Tumawag agad ng pulis." disabled  />
              <Radio label="D. Tiisin na lang ang ingay." disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. Maagang nag-asawa sina Celso at Jade. Nagkaanak agad sila ngunit naging iresponsable si Celso. Humantong ito sa kanilang paghihiwalay. May karapatan bang humingi si Jade ng suportang pinansyal kay Celso para sa kanilang anak? </p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question4} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Hindi, dahil hiwalay na sila." disabled  />
              <Radio label="B. Hindi, dahil sandali lang naman silang nagsama."  disabled/>
              <Radio label={<Typography className='text-green-500'>C. Oo, may pananagutan si Celso sa bata.</Typography>} checked disabled/>
              <Radio label="D. Oo, dahil may trabaho naman si Celso" disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. Nakita ni Luis ang isang matandang babae na balak tumawid sa "pedestrian lane." Nilapitan niya ang matanda at inalalayan sa pagtawid. Ano ang katangiang taglay niya?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question5} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Matiyaga"  disabled/>
              <Radio label={<Typography className='text-green-500'>B. Matulungin</Typography>} checked disabled/>
              <Radio label="C. Mapag-aruga"  disabled/>
              <Radio label="D. Magalang"  disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>
        </form>

        </div>
        </>
    ) : (
        <>
        <div className='text-center w-full'>Select Student to show score</div>
        </>
    )}
    <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
          {getAllStudents.map((student, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => handleGetStudentScore(student)}>
              <div >
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
              </div>
              <span className="text-sm font-semibold">
                {student.post_test_score_ls5_uts} / 5
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>


    </>
  )
}
