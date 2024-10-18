import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography } from '@material-tailwind/react';

import question1 from "../../../assets/ls4-assessments/LS4 Q1.png"
import question2 from "../../../assets/ls4-assessments/LS4 Q2.png"
import question3 from "../../../assets/ls4-assessments/LS4 Q3.png"
import question4 from "../../../assets/ls4-assessments/LS4 Q4.png"
import question5 from "../../../assets/ls4-assessments/LS4 Q5.png"
import question6 from "../../../assets/ls4-assessments/LS4 Q6.png"

export default function ALSLifeCareerPostTest() {

    const [getActiveStudents, setGetActiveStudents] = useState(0)
    const [getAllStudents, setgetAllStudents] = useState([])
    const [showStudentScore, setshowStudentScore] = useState(false)
    const [fullname, setfullname] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [answer5, setAnswer5] = useState("")
    const [answer6, setAnswer6] = useState("")
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

      getSpecificStudents()

  },[])

  const handleGetStudentScore = (student) =>{
    console.log(student)
    setshowStudentScore(true)
    setfullname(student.fullname)
    setAnswer1(student.post_test_ls4_1)
    setAnswer2(student.post_test_ls4_2)
    setAnswer3(student.post_test_ls4_3)
    setAnswer4(student.post_test_ls4_4)
    setAnswer5(student.post_test_ls4_5)
    setAnswer6(student.post_test_ls4_6)
    setScore(student.post_test_score_ls4_life)    
  }
    
  return (
    <>
    <div className='flex flex-col md:flex-row p-6 bg-gray-100'>
    {showStudentScore ? (
        <>
        <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
          <h1 className="text-sm font-bold">LS4 Life and Career Skills</h1>
          <p className="text-green-600 font-semibold">{fullname} - {score}/6</p>
        </div>
        <div className="mb-4">
          <h2 className=" font-bold text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang titik ng tamang sagot sa sagutang papel para sa LS4</h2>
        </div>

        <form>
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>1. Gusto ni Nelia na madagdagan pa ang kanyan kaalaman at kasanayan sa pagluluto. Ano ang pinakamainam niyang gawin?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question1} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Magsanay sa pagluuluto nang mag-isa" disabled  />
              <Radio label="B. Magpaturo ng pagluluto sa kaibigan"  disabled />
              <Radio label={<Typography className='text-green-500'>C. Sumali sa pagsasanay tungkol sa pagluluto</Typography>} checked disabled />
              <Radio label="D. Magsaliksik sa internet tungkol sa pagluluto" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
            </div>
          </div>

          
          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>2. Si Dexter ay marunong gumawa ng iba't ibang home-made na tinapay. nong trabaho ang maaari niyang pagkakitaan? </p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question2} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. Panadero</Typography>} checked disabled />
              <Radio label="B. Sorbetero" disabled  />
              <Radio label="C. Serbidor" disabled />
              <Radio label="D. Kusinero" disabled />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>3. Maagang binubuksan ni Mang Roldan ang pinapasukang Auto Repair Shop. Tumatanggap siya ng mga mamimili kahit lampas na sa oras at sinisigurado niyang maayos ang kanyang trabaho. Ano ang magandang katangiang ipinakita niya bilang isang empleyado?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question3} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Masayahin" disabled />
              <Radio label={<Typography className='text-green-500'>B. Masipag</Typography>} disabled checked />
              <Radio label="C. Mahusay" disabled  />
              <Radio label="D. Mapagbigay" disabled  />
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>4. Ano ang dapat gamitin ng mga mananahi sa ASAS Dress Shop sa paglilinis ng mga makina sa pagtatahi? </p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question4} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. Basang tisyu" disabled  />
              <Radio label="B. Mamasa-masang tela"  disabled/>
              <Radio label="C. Magaspang na tela" disabled/>
              <Radio label={<Typography className='text-green-500'>D. Malambot at tuyong tela</Typography>} checked disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer4}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>5. Si Junjun ay isang construction worker sa White Forth Company. Alin sa mga sumusunod ang dapat ihanda at suotin ni Junjun bago pumasok?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question5} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label="A. leather shoes at barong tagalog"  disabled/>
              <Radio label="B. sombrero, salamin at panyo" disabled/>
              <Radio label={<Typography className='text-green-500'>C. helmet, bota, mask at gloves</Typography>} checked  disabled/>
              <Radio label="D. rubber shoes, shades at jacket"  disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer5}</span></p>
            </div>
          </div>

          <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
            <p>6. Alin sa mga sumusunod ang nagpapakita na ang may-ari ng negosyo ay nagbibigay ng maayos na serbisyo sa kaniyang mamimili?</p>
            <div className='border-2 p-2 flex justify-center items-center'>
              <img src={question6} className='w-1/2' alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <Radio label={<Typography className='text-green-500'>A. Pinapalitan ang mga depektibong gamit.</Typography>} checked disabled/>
              <Radio label="B. Walang pakialam ang security guard sa mga mamimili." disabled/>
              <Radio label="C. Walang priority lane." disabled/>
              <Radio label="D. Hindi pinapansin ng mga sales lady ang kailangan ng mamimili." disabled/>
            </div>
            <div>
              <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer6}</span></p>
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
                {student.post_test_score_ls4_life} / 6
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>


    </>
  )
}
