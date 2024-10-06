// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';

export default function ALSComFilipino(){


  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [answer4, setAnswer4] = useState("")
  const [score, setScore] = useState(0)
  const [addScoreNumber4, setaddScoreNumber4] = useState("")
  const [getStudentID, setGetStudentID] = useState(0)
  const [getTeacherID, setGetTeacherID] = useState(0)
  const [disableScoreNumber4, setDisableScoreNumber4] = useState(false)



  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
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
    setAnswer1(student.ls1_filipino_part1_1)
    setAnswer2(student.ls1_filipino_part1_2)
    setAnswer3(student.ls1_filipino_part1_3)
    setAnswer4(student.ls1_filipino_part2_4)
    setScore(student.score_ls1_filipino)
    setGetStudentID(student.students_id)
    setGetTeacherID(student.teacher_id)

    if(student.submit_finalscore_ls1filipino !== null){
      setaddScoreNumber4(student.submit_finalscore_ls1filipino)
      setDisableScoreNumber4(true)
    }else{
      setaddScoreNumber4(null)
      setDisableScoreNumber4(false)
    }




    
  }

  const handleSubmitScore = async(e) =>{
    e.preventDefault()

    const numericAddScoreNumber4 = Number(addScoreNumber4);
    const numericScore = Number(score);

    const totalScore = numericAddScoreNumber4 + numericScore; 

    const sendScore = {
      student_id: getStudentID,
      total: totalScore
  }

  const submitData = {
    students_id: getStudentID,
    teacher_id: getTeacherID,
    addScoreNumber4: addScoreNumber4
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/submitStudentScoreLS1Filipino',sendScore);
    // console.log(response);

    if(response.status == 200){
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/submit-score-ls1filipino', submitData)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
    
    
  }


  return (
    <>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active ALS Student</h2>
        <h3 className="text-2xl">{getActiveStudents} Active</h3> {/* {getActiveStudents} */}
        {/* <p className="text-sm">{getAllStudent.length} Registered ALS Student/s</p> */}
      </div>
      <div className="bg-orange-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Current School Year</h2>
        <h3 className="text-2xl">S.Y. 2022-2023</h3>
        <p className="text-sm">Date: July 24, 2023</p>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Active Test Period</h2>
        <h3 className="text-2xl">Pre-test</h3>
        <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded-md">Start Post-test</button>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-lg text-center shadow-md">
        <h2 className="text-lg font-semibold">Test Status</h2>
        <h3 className="text-2xl">Closed</h3>
        <button className="mt-2 px-4 py-2 bg-white text-red-500 rounded-md">Start Accepting Test Response</button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row p-6 bg-gray-100">
      {/* Left Container */}
      <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">

      {/* Header */}
      {showStudentScore ? (
        <>
        <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS1 COMMUNICATION SKILLS (FILIPINO)</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/4</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Part I. Pagbasa</h2>
          <p className="text-gray-600 text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang tamang sagot sa sagutang papel para sa LS1 Filipino.</p>
        </div>

        <form onSubmit={handleSubmitScore}>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Basahin ang sitwasyon at piliin ang tamang sagot na nagpapakita ng magalang na pananalita</p>
            <div className='border-2 p-2'>
                <h1 className='text-justify'>Nais mong pumasok sa learning center ngunit ang iyong guro at ang kanyang kausap ay nasa pintuan. Ano ang iyong sasabihin sa kanila?</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Tumabi po kayo." disabled  />
              <Radio label="B. Dadaan po ako. Umalis po kayo." disabled />
              <Radio label={<Typography className='text-green-500'>C. Makikiraan po.</Typography>} checked disabled />
              <Radio label="D. Pwede bang dumaan?" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Alin sa mga sumusunod na pangungusap ang may tamang bantas?</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Ang araw ng kalayaan ay ipinagdiriwawng tuwing Hunyo 12?" disabled />
              <Radio label="B. Dadalo ka ba sa pagpupulong ngayong Huwebes." disabled  />
              <Radio label={<Typography className='text-green-500'>C. Naku, may sunog!</Typography>} checked disabled />
              <Radio label='D. "Ang mga bata ay masayang naglalaro."' disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. Basahin ang pangungusap at piliin ang pares ng mga salitang magkasalunugat ang kahulugan.</p>
            <div className='border-2 p-2'>
                <h1 className='text-justify'>Nalulungkot isipin na sa mata ng batas, nakalalamang ang mayamang may pantustos sa mga tagapagtanggol kaysa sa maralitang kahit pangkain ay wala.</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Nakalalamang - Nakalulungkot" disabled />
              <Radio label="B. Tagapagtanggol - Batas" disabled />
              <Radio label="C. Pantustos - Pangkain" disabled />
              <Radio label={<Typography className='text-green-500'>D. Mayaman - Maralita</Typography>} disabled checked />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mt-5'>
                    <h1 className='font-bold text-black/70 text-[0.8rem] '>Part II. Pagsulat</h1>
                    <h1 className='font-bold text-black/70 text-[0.8rem]'>Panuto: Basahin ang aytem. Isulat ang sagot sa sagutang papel. </h1>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. Isulat sa patlang ang baybay sa Filipino ng salitang hiran na "computer"</p>
            <div className='mt-2'>
                <Textarea label='Sagot' 
                value={answer4 == null ? "" : answer4} disabled onChange={(e) => setAnswer4(e.target.value)} 
                required 

                />
            </div>
            <div className='flex justify-end'>
              <Radio name='4' label="1 point" value={1} checked={addScoreNumber4 == "1"} disabled={disableScoreNumber4} onChange={(e) =>setaddScoreNumber4(e.target.value)} />
              <Radio name='4' label="0 point" value={0} checked={addScoreNumber4 == "0"} disabled={disableScoreNumber4} onChange={(e) =>setaddScoreNumber4(e.target.value)} />
            </div>
          </div>
          
          <div className='flex justify-center'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>

        </>
      ) : (
        <div className='text-center'>Select Student to show score</div>
      )}

 
      </div>

      {/* Right Container - Masterlist */}
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
                {student.score_ls1_filipino} / 4
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


