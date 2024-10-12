// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Radio, Typography, Textarea, Button } from '@material-tailwind/react';


export default function RegularTeacherFilipino(){


  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showStudentScore, setshowStudentScore] = useState(false)
  const [fullname, setfullname] = useState("")
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [score, setScore] = useState(0)
  const [getGrade, setGetGrade] = useState(0)

  const [showGrade7, setShowGrade7] = useState(false)
  const [ShowGrade8, setShowGrade8] = useState(false)
  const [ShowGrade9, setShowGrade9] = useState(false)
  const [ShowGrade10, setShowGrade10] = useState(false)


  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-teacher-teachernames', { params: { teacherId: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
      // console.log(response.data)
  } catch (error) {
      console.log(error);
  }
}

  useEffect(()=>{
    
    // const user = JSON.parse(localStorage.getItem('user'))


    // if(user == null || user.user_type !== "ALS Teacher"){
    //     navigate('/teacher/sign-in')
    //   }

      getSpecificStudents()

  },[])

  const handleGetStudentScore = (student) =>{
    console.log(student)
    setshowStudentScore(true)
    setfullname(student.fullname)
    setAnswer1(student.filipino_1)
    setAnswer2(student.filipino_2)
    setAnswer3(student.filipino_3)
    setScore(student.score_filipino)
    setGetGrade(student.grade)


    if(student.grade == 7){
      console.log("show questions for student 7")
      setShowGrade7(true)
      setShowGrade8(false)
      setShowGrade9(false)
      setShowGrade10(false)
    }else if (student.grade == 8){
      setShowGrade7(false)
      setShowGrade8(true)
      setShowGrade9(false)
      setShowGrade10(false)
      console.log("show questions for student 8")
    }else if(student.grade == 9){
      setShowGrade7(false)
      setShowGrade8(false)
      setShowGrade9(true)
      setShowGrade10(false)
      console.log("show questions for student 9")
    }else if(student.grade == 10){
      setShowGrade7(false)
      setShowGrade8(false)
      setShowGrade9(false)
      setShowGrade10(true)
      console.log("show questions for student 10")
    }else{
      console.log("error")
    }



    




    
  }




  return (
    <>

      
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-6">
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

    </div>



        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        {showStudentScore ? (
          <>
            {showGrade7 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">Filipino</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang tamang sagot sa sagutang papel para sa Filipino</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. Ano ang kasingkahulugan ng salitang "mabilis"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-filipino-1' label={<Typography className='text-green-500'>A. Mabagal</Typography>} checked disabled  />
                    <Radio name='grade7-filipino-1' label="B. Mapanlikha" disabled  />
                    <Radio name='grade7-filipino-1' label="C. Mabilis"  disabled />
                    <Radio name='grade7-filipino-1' label="D. Mabalasik" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Ano ang tawag sa isang uri ng tula na may labingdalawang pantig sa bawat taludtod at binubuo ng apat na taludtod bawat saknong? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-filipino-2' label="A. Dalit" disabled />
                    <Radio name='grade7-filipino-2' label="B. Korido" disabled  />
                    <Radio name='grade7-filipino-2' label="C. Soneto" disabled />
                    <Radio name='grade7-filipino-2' label={<Typography className='text-green-500'>D. Awit</Typography>} checked disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Alin sa mga sumusunod ang tamang gamit ng "ng" at "nang"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade7-filipino-3' label="A. Pumunta kami nang simbahan kahapon." disabled />
                    <Radio name='grade7-filipino-3' label={<Typography className='text-green-500'>B. Siya ang kumuha ng libro ko.</Typography>} checked  disabled />
                    <Radio name='grade7-filipino-3' label="C. Kumain kami ng mabilis at umalis agad." disabled />
                    <Radio name='grade7-filipino-3' label="D. Tumakbo siya ng mabilis papunta sa paaralan." disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade8 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">Filipino</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang tamang sagot sa sagutang papel para sa Filipino</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. Ano ang tawag sa isang kwentong bayan na naglalaman ng mga alamat o kwento tungkol sa mga diyos at diyosa?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-filipino-1' label="A. Kuwentong Makabayan"  disabled  />
                    <Radio name='grade8-filipino-1' label="B. Epiko" disabled  />
                    <Radio name='grade8-filipino-1' label={<Typography className='text-green-500'>C. Alamat</Typography>}  checked disabled />
                    <Radio name='grade8-filipino-1' label="D. Pabula" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Anong uri ng panitikan ang naglalarawan ng mga karanasan ng isang tao sa buhay? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-filipino-2' label="A. Sanaysay" disabled />
                    <Radio name='grade8-filipino-2' label={<Typography className='text-green-500'>B. Talambuhay</Typography>} checked disabled  />
                    <Radio name='grade8-filipino-2' label="C. Kwento" disabled />
                    <Radio name='grade8-filipino-2' label="D. Dula" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Sa aling tula makikita ang mga salitang may masining na anyo at malalim na kahulugan?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade8-filipino-3' label="A. Tula ng Pag-ibig" disabled />
                    <Radio name='grade8-filipino-3' label="B. Tula ng Kasaysayan"  disabled />
                    <Radio name='grade8-filipino-3' label="C. Tula ng Kalikasan" disabled />
                    <Radio name='grade8-filipino-3' label={<Typography className='text-green-500'>D. Liriko</Typography>} checked disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade9 ? (
              <>
              <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                <h1 className="text-sm font-bold lg:text-2xl">Filipino</h1>
                <p className="text-green-600 font-semibold">{fullname} - {score}/3</p>
                <p className="text-green-600 font-semibold">Grade: {getGrade} </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Panuto: Basahin ang bawat aytem. Bilugan ang tamang sagot sa sagutang papel para sa Filipino</p>
              </div>


                <form>
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>1. Ano ang tawag sa pagkakaiba ng tunog ng mga salita?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-filipino-1' label="A. Diptonggo"  disabled  />
                    <Radio name='grade9-filipino-1' label={<Typography className='text-green-500'>B. Idyoma</Typography>}  checked disabled  />
                    <Radio name='grade9-filipino-1' label="C. Paghahambing" disabled />
                    <Radio name='grade9-filipino-1' label="D. Aliterasyon" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer1}</span></p>
                  </div>
                </div>

                
                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>2. Sino ang kilalang makata na sumulat ng "Florante at Laura"? </p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-filipino-2' label="A. Jose Rizal" disabled />
                    <Radio name='grade9-filipino-2' label={<Typography className='text-green-500'>B. Francisco Balagtas</Typography>} checked disabled  />
                    <Radio name='grade9-filipino-2' label="C. Andres Bonifacio" disabled />
                    <Radio name='grade9-filipino-2' label="D. Emilio Jacinto" disabled />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer2}</span></p>
                  </div>
                </div>

                <div className='mb-6 p-4 border rounded-lg bg-white shadow-sm'>
                  <p>3. Anong uri ng panitikan ang "Noli Me Tangere"?</p>
                  <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Radio name='grade9-filipino-3' label="A. Kwento" disabled />
                    <Radio name='grade9-filipino-3' label="B. Nobela"  disabled />
                    <Radio name='grade9-filipino-3' label="C. Tula" disabled />
                    <Radio name='grade9-filipino-3' label={<Typography className='text-green-500'>D. Dula</Typography>} checked disabled  />
                  </div>
                  <div>
                    <p className='text-sm text-green-600'>Student Answer: <span className='font-semibold'>{answer3}</span></p>
                  </div>
                </div> 
              </form>
              </div>
              </>
            ) : ShowGrade10 ? (
              <>
                this is grade 10
              </>
            ) : (
              null
            )}
          </>
        ) : (
          <div className='text-center w-full'>Select Student to show score</div>
        )}
        
   



      <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
        {getAllStudents.map((student, index)=>{
            {/* console.log(student) */}
            return(
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer" onClick={() => handleGetStudentScore(student)}>
              <div >
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
                <p className="text-sm text-gray-500">Grade: {student.grade}</p>
              </div>
              <span className="text-sm font-semibold">
                {student.score_filipino} / 3
              </span>
            </li>

            )
        })}
        </ul>
      </div>
        </div>




    </>
  );
};


