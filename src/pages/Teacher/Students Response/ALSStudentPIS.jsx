// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function ALSStudentPIS(){

  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])
  const [showDatafromDatabaseModal, setshowDatafromDatabaseModal] = useState(false)
  const [showDataFromAnswerModal, setshowDataFromAnswerModal] = useState(false)
  const [score, setScore] = useState(0)
  const [getStudentID, setgetStudentID] = useState(0)
  const [getTeacherID, setgetTeacherID] = useState(0)

  const [getDatabaseFullname, setgetDatabaseFullname] = useState("")
  const [getDatabaseGender, setGetDatabaseGender] = useState("");
  const [getDatabaseBirthday, setGetDatabaseBirthday] = useState("");
  const [getDatabaseHouseNumber, setGetDatabaseHouseNumber] = useState("");
  const [getDatabaseBarangay, setGetDatabaseBarangay] = useState("");
  const [getDatabaseCity, setGetDatabaseCity] = useState("");
  const [getDatabaseProvince, setGetDatabaseProvince] = useState("");
  const [getDatabaseReligion, setGetDatabaseReligion] = useState("");
  const [getDatabaseCivilStatus, setGetDatabaseCivilStatus] = useState("");
  const [getDatabaseOccupation, setGetDatabaseOccupation] = useState("");
  const [getDatabaseEducation, setGetDatabaseEducation] = useState("");
  const [getDatabaseLRN, setgetDatabaseLRN] = useState("")
  

  const [getAnswerFullname, setGetAnswerFullname] = useState("");
  const [getAnswerGender, setGetAnswerGender] = useState("");
  const [getAnswerBirthday, setGetAnswerBirthday] = useState("");
  const [getAnswerHouseNumber, setGetAnswerHouseNumber] = useState("");
  const [getAnswerBarangay, setGetAnswerBarangay] = useState("");
  const [getAnswerCity, setGetAnswerCity] = useState("");
  const [getAnswerProvince, setGetAnswerProvince] = useState("");
  const [getAnswerReligion, setGetAnswerReligion] = useState("");
  const [getAnswerCivilStatus, setGetAnswerCivilStatus] = useState("");
  const [getAnswerOccupation, setGetAnswerOccupation] = useState("");
  const [getAnswerEducation, setGetAnswerEducation] = useState("");



  useEffect(()=>{
    
    const user = JSON.parse(localStorage.getItem('user'))


    if(user == null || user.user_type !== "ALS Teacher"){
        navigate('/teacher/sign-in')
      }else{
        // setgetTeacherName(user.fullname)
        // setgetUserType(user.user_type)
        // console.log(user.id)
      }
      getSpecificStudents()
      


  },[])
  

  

  const getSpecificStudents = async() =>{

    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-specific-students', { params: { teacherId: user.id } });
      setgetAllStudents(response?.data)
      setGetActiveStudents(response.data.length)
  } catch (error) {
      console.log(error);
  }
}




  const handleGetSpecificStudent = async(student) =>{
    console.log(student)
    setgetStudentID(student.id)
    setgetTeacherID(student.teacher_id)
    setshowDatafromDatabaseModal(true)
    setshowDataFromAnswerModal(true)
    setgetDatabaseFullname(student.fullname)
    setGetDatabaseGender(student.gender)
    setGetDatabaseBirthday(student.birthday)
    setGetDatabaseHouseNumber(student.house_number)
    setGetDatabaseBarangay(student.barangay)
    setGetDatabaseCity(student.city)
    setGetDatabaseProvince(student.province)
    setGetDatabaseReligion(student.religion)
    setGetDatabaseCivilStatus(student.civil_status)
    setGetDatabaseOccupation(student.occupation)
    setGetDatabaseEducation(student.education)
    setgetDatabaseLRN(student.lrn)

    setGetAnswerFullname("")
    setGetAnswerGender("")
    setGetAnswerBirthday("")
    setGetAnswerHouseNumber("")
    setGetAnswerBarangay("")
    setGetAnswerCity("")
    setGetAnswerProvince("")
    setGetAnswerReligion("")
    setGetAnswerCivilStatus("")
    setGetAnswerOccupation("")
    setGetAnswerEducation("")

    setScore(0)
    // setgetStudentID(student.id)

    try {
      const res = await axios.get('http://127.0.0.1:8000/api/student-pis', {params: {students_id: student.id}})
      // console.log(res.data[0])
      setGetAnswerFullname(res.data[0].fullname)
      setGetAnswerGender(res.data[0].gender)
      setGetAnswerBirthday(res.data[0].birthday)
      setGetAnswerHouseNumber(res.data[0].house_number)
      setGetAnswerBarangay(res.data[0].barangay)
      setGetAnswerCity(res.data[0].city)
      setGetAnswerProvince(res.data[0].province)
      setGetAnswerReligion(res.data[0].religion)
      setGetAnswerCivilStatus(res.data[0].civil_status)
      setGetAnswerOccupation(res.data[0].occupation)
      setGetAnswerEducation(res.data[0].education)

    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitScore = async(e) =>{
    e.preventDefault()
    // console.log(getStudentID, getTeacherID, parseInt(score))

    // try {
    //   const res = await axios.post('/submit-score')
    // } catch (error) {
      
    // }

  }

  return (
    <>
        {/* Header Section */}
        <div className="grid grid-cols-4 gap-4 mb-6">
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
    <div className="grid gap-5 grid-cols-2 p-6 bg-gray-100">


      {/* FROM DATABASE */}
      {showDatafromDatabaseModal ? (
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
        {/* Student Details */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">From Database</h1>
            <p>{getDatabaseFullname}</p>
            <p className="text-gray-500">LRN: {getDatabaseLRN}</p>
          </div>
          <div>
            <p className="font-semibold">Date: July 24, 2023</p>
          </div>
        </div>

        <h2 className="text-center text-xl font-bold mb-4">PERSONAL INFORMATION SHEET</h2>
        
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">1. Ano ang iyong pangalan?</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border rounded w-full py-1 px-2"
                placeholder="Unang Pangalan"
                value={getDatabaseFullname}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">2. Ano ang iyong kasarian?</label>
            <div className="flex gap-4 items-center">
            <select
                  name="gender"
                  // disabled={disableGender}
                  value={getDatabaseGender}
                  // onChange={(e) => setAddGender(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">3. Kailan ka isinilang o ipinanganak?</label>
            <div className="flex gap-2">
              <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Birthday"
                    // disabled={disableBirthday}
                    value={getDatabaseBirthday.split(" ")[0]} 
                    // onChange={(e) => setaddBirthday(e.target.value)}
                    // required
                  />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">4. Saan ka nakatira?</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="">
                <label className="block mb-1 font-medium">House Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="House Number"
                  value={getDatabaseHouseNumber} 
                  // disabled={disableHouseNumber}
                  // onChange={(e) => setaddHouseNumber(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Barangay</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Barangay"
                  value={getDatabaseBarangay} 
                  // disabled={disableBarangay}
                  // onChange={(e) => setaddBarangay(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="City"
                  value={getDatabaseCity} 
                  // disabled={disableCity}
                  // onChange={(e) => setaddCity(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Province</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Province"
                  value={getDatabaseProvince} 
                  // disabled={disableProvince}
                  // onChange={(e) => setaddProvince(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Religion</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Religion"
                  value={getDatabaseReligion} 
                  // disabled={disableReligion}
                  // onChange={(e) => setaddReligion(e.target.value)}
                  required
                />
              </div>
              <div className=""> {/* Makes the gender dropdown span both columns */}
                <label className="block mb-1 font-medium">Civil Status</label>
                <select
                  name="status"
                  value={getDatabaseCivilStatus}
                  // disabled={disableCivilStatus}
                  // onChange={(e) => setaddCivilStatus(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  // required
                >
                  <option value="">Select Status</option>
                  <option value="May Asawa">May Asawa</option>
                  <option value="Walang Asawa">Walang Asawa</option>
                  <option value="Biyudo / Biyuda">Biyudo / Biyuda</option>
                  <option value="Hiwalay sa asawa">Hiwalay sa Asawa</option>
                </select>
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Occupation</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Occupation"
                  value={getDatabaseOccupation} 
                  // disabled={disableOccupation}
                  // onChange={(e) => setaddOccupation(e.target.value)}
                  // required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Education</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Education"
                  value={getDatabaseEducation} 
                  // disabled={disableEducation}
                  // onChange={(e) => setaddEducation(e.target.value)}
                  // required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      ) : (
        <div className='text-center'>Select Student's data</div>
      )}

  

      {/* INPUTTED NG MISMONG STUDENT */}
      {showDataFromAnswerModal ? (
        <div className="w-full  bg-white p-6 rounded-lg shadow-md">
        {/* Student Details */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">Answered PIS</h1>
            <p>{getDatabaseFullname}</p>
            <p className="text-gray-500">LRN: {getDatabaseLRN}</p>
          </div>
          <div>
            <p className="font-semibold">Date: July 24, 2023</p>
          </div>
        </div>

        <h2 className="text-center text-xl font-bold mb-4">PERSONAL INFORMATION SHEET</h2>
        
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={handleSubmitScore}>
        <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">1. Ano ang iyong pangalan?</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border rounded w-full py-1 px-2"
                placeholder="Unang Pangalan"
                value={getAnswerFullname}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">2. Ano ang iyong kasarian?</label>
            <div className="flex gap-4 items-center">
            <select
                  name="gender"
                  // disabled={disableGender}
                  value={getAnswerGender}
                  // onChange={(e) => setAddGender(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">3. Kailan ka isinilang o ipinanganak?</label>
            <div className="flex gap-2">
              <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Birthday"
                    // disabled={disableBirthday}
                    value={getAnswerBirthday.split(" ")[0]} 
                    // onChange={(e) => setaddBirthday(e.target.value)}
                    // required
                  />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-bold mb-1">4. Saan ka nakatira?</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="">
                <label className="block mb-1 font-medium">House Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="House Number"
                  value={getAnswerHouseNumber} 
                  // disabled={disableHouseNumber}
                  // onChange={(e) => setaddHouseNumber(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Barangay</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Barangay"
                  value={getAnswerBarangay} 
                  // disabled={disableBarangay}
                  // onChange={(e) => setaddBarangay(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="City"
                  value={getAnswerCity} 
                  // disabled={disableCity}
                  // onChange={(e) => setaddCity(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Province</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Province"
                  value={getAnswerProvince} 
                  // disabled={disableProvince}
                  // onChange={(e) => setaddProvince(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Religion</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Religion"
                  value={getAnswerReligion} 
                  // disabled={disableReligion}
                  // onChange={(e) => setaddReligion(e.target.value)}
                  required
                />
              </div>
              <div className=""> {/* Makes the gender dropdown span both columns */}
                <label className="block mb-1 font-medium">Civil Status</label>
                <select
                  name="status"
                  value={getAnswerCivilStatus}
                  // disabled={disableCivilStatus}
                  // onChange={(e) => setaddCivilStatus(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  // required
                >
                  <option value="">Select Status</option>
                  <option value="May Asawa">May Asawa</option>
                  <option value="Walang Asawa">Walang Asawa</option>
                  <option value="Biyudo / Biyuda">Biyudo / Biyuda</option>
                  <option value="Hiwalay sa asawa">Hiwalay sa Asawa</option>
                </select>
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Occupation</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Occupation"
                  value={getAnswerOccupation} 
                  // disabled={disableOccupation}
                  // onChange={(e) => setaddOccupation(e.target.value)}
                  // required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Education</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Education"
                  value={getAnswerEducation} 
                  // disabled={disableEducation}
                  // onChange={(e) => setaddEducation(e.target.value)}
                  // required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Score</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Education"
                  value={score} 
                  // disabled={disableEducation}
                  onChange={(e) => setScore(e.target.value)}
                  // required
                />
              </div>
            </div>
            <div className='mt-3 flex justify-center items-center'>
              <button type='submit' className='bg-blue-600 p-2 rounded-full text-white' >Submit Score</button>
            </div>
          </div>
        </form>
      </div>
      ) : (
        <div className='text-center'>Select Student's data</div>
      )}

      <div className="w-[20rem] p-6 bg-white rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
          {getAllStudents.map((student, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2 cursor-pointer">
              <div onClick={()=>handleGetSpecificStudent(student)}>
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
              </div>
              <span className={`text-sm font-semibold ${student.score === '10/10' ? 'text-green-600' : 'text-yellow-500'}`}>
                {student.score}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


