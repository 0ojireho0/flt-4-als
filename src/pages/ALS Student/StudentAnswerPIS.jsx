// App.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function StudentAnswerPIS() {

    const [getStudentFullname, setgetStudentFullname] = useState("")
    const [getStudentLRN, setgetStudentLRN] = useState("")

    const [addFullName, setaddFullName] = useState("")
    const [addGender, setAddGender] = useState("")
    const [addHouseNumber, setaddHouseNumber] = useState("")
    const [addBarangay, setaddBarangay] = useState("")
    const [addCity, setaddCity] = useState("")
    const [addProvince, setaddProvince] = useState("")
    const [addReligion, setaddReligion] = useState("")
    const [addCivilStatus, setaddCivilStatus] = useState("")
    const [addOccupation, setaddOccupation] = useState("")
    const [addEducation, setaddEducation] = useState("")
    const [addBirthday, setaddBirthday] = useState("")
    const [getStudentID, setgetStudentID] = useState(0)

    const [disableFullname, setdisableFullname] = useState(false)
    const [disableGender, setdisableGender] = useState(false)
    const [disableBirthday, setdisableBirthday] = useState(false)
    const [disableHouseNumber, setdisableHouseNumber] = useState(false)
    const [disableBarangay, setdisableBarangay] = useState(false)
    const [disableCity, setdisableCity] = useState(false)
    const [disableProvince, setdisableProvince] = useState(false)
    const [disableReligion, setdisableReligion] = useState(false)
    const [disableCivilStatus, setdisableCivilStatus] = useState(false)
    const [disableOccupation, setdisableOccupation] = useState(false)
    const [disableEducation, setdisableEducation] = useState(false)
    

    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false)
    const navigate = useNavigate() 


    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        
        setgetStudentFullname(user.fullname)
        setgetStudentLRN(user.lrn)
        setgetStudentID(user.id)

        getSpecificStudents()
    }, [])

    const getSpecificStudents = async() =>{

      const user = JSON.parse(localStorage.getItem('user'))
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/student-pis', { params: { students_id: user.id } });
        console.log(response)

        if(response.data.length == 1){
          setdisableFullname(true)
          setaddFullName(response.data[0].fullname)
  
          setAddGender(response.data[0].gender)
          setdisableGender(true)
  
          setaddBirthday(response.data[0].birthday)
          setdisableBirthday(true)
  
          setaddHouseNumber(response.data[0].house_number)
          setdisableHouseNumber(true)
  
          setaddBarangay(response.data[0].barangay)
          setdisableBarangay(true)
  
          setaddCity(response.data[0].city)
          setdisableCity(true)
  
          setaddProvince(response.data[0].province)
          setdisableProvince(true)
  
          setaddReligion(response.data[0].religion)
          setdisableReligion(true)
  
          setaddCivilStatus(response.data[0].civil_status)
          setdisableCivilStatus(true)
  
          setaddOccupation(response.data[0].occupation)
          setdisableOccupation(true)
  
          setaddEducation(response.data[0].education)
          setdisableEducation(true)
        }else{
          setdisableFullname(false)
        }

    } catch (error) {
        console.log(error);
    }
  }

    const handleSubmitPIS = async(e) =>{
        e.preventDefault();
        const studentPIS = {
            students_id: getStudentID,
            fullname: addFullName,
            gender: addGender,
            birthday: addBirthday,
            house_number: addHouseNumber,
            barangay: addBarangay, 
            city: addCity,
            province: addProvince,
            religion: addReligion,
            civil_status: addCivilStatus,
            occupation: addOccupation,
            education: addEducation
        }

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/student-pis', studentPIS)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () =>{
      setShowLogoutConfirmation(true)
    
    }

    const handleConfirmLogout = () => {
      localStorage.removeItem('user'); 
      // console.log('Item removed from localStorage');
      navigate('/sign-in')
    }

  return (
    <>
   <div className="">
      {/* Header Section */}
      <div className='w-full flex justify-end items-center gap-3 md:w-full'>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-3" onClick={handleLogout}>Logout</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl font-semibold">{getStudentFullname}</h2>
            <p className="text-gray-500">LRN: {getStudentLRN}</p>
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

      {/* Welcome Banner */}
      <div className="bg-green-500 text-white text-center py-2 mt-4 rounded-md max-w-4xl mx-auto">
        Welcome! New Student
      </div>

      {/* Form Section */}
      <div className="bg-white mt-6 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="bg-blue-500 text-white py-2 px-4 rounded-t-md">
          <h2 className="font-bold">PERSONAL INFORMATION SHEET</h2>
        </div>

        {/* Instruction */}
        <p className="py-2 text-gray-700">
          A. Panuto: Sagutan and mga sumusunod na tanong.
        </p>

        {/* Input Fields */}
        <div className="space-y-4">
            <form onSubmit={handleSubmitPIS}>
          <div>
            <label className="font-semibold">1. Ano ang iyong buong pangalan?</label>
            <div className="flex space-x-4 mt-2">
              <input
                type="text"
                placeholder="Halimbawa: Juan D. Dela Cruz"
                className="border rounded p-2 w-full"
                disabled={disableFullname}
                value={addFullName} 
                onChange={(e) => setaddFullName(e.target.value)}
                required
              />

            </div>
          </div>

          <div>
            <label className="font-semibold">2. Ano ang iyong kasarian?</label>
            <div className="flex space-x-6 mt-2">
                <select
                  name="gender"
                  disabled={disableGender}
                  value={addGender}
                  onChange={(e) => setAddGender(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Mamili ng Kasarian</option>
                  <option value="Male">Lalaki</option>
                  <option value="Female">Babae</option>
                </select>
            </div>
          </div>

          <div>
            <label className="font-semibold">3. Kailan ka isinilang o ipinanganak?</label>
            <div className="flex space-x-4 mt-2">
            <div className="w-96">
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Birthday"
                  disabled={disableBirthday}
                  value={addBirthday.split(" ")[0]} 
                  onChange={(e) => setaddBirthday(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="font-semibold">4. Saan ka nakatira?</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="">
                <label className="block mb-1 font-medium">House Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="House Number/Street Name"
                  value={addHouseNumber} 
                  disabled={disableHouseNumber}
                  onChange={(e) => setaddHouseNumber(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Barangay</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Barangay"
                  value={addBarangay} 
                  disabled={disableBarangay}
                  onChange={(e) => setaddBarangay(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="City/Municipality"
                  value={addCity} 
                  disabled={disableCity}
                  onChange={(e) => setaddCity(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Province</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Province"
                  value={addProvince} 
                  disabled={disableProvince}
                  onChange={(e) => setaddProvince(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Religion</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Religion"
                  value={addReligion} 
                  disabled={disableReligion}
                  onChange={(e) => setaddReligion(e.target.value)}
                  required
                />
              </div>
              <div className=""> {/* Makes the gender dropdown span both columns */}
                <label className="block mb-1 font-medium">Civil Status</label>
                <select
                  name="status"
                  value={addCivilStatus}
                  disabled={disableCivilStatus}
                  onChange={(e) => setaddCivilStatus(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="May Asawa">Married</option>
                  <option value="Walang Asawa">Single</option>
                  <option value="Biyudo / Biyuda">Widowed</option>
                  <option value="Hiwalay sa asawa">Annulled</option>
                </select>
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Occupation</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Occupation/Trabaho"
                  value={addOccupation} 
                  disabled={disableOccupation}
                  onChange={(e) => setaddOccupation(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Education</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Highest Educational Attainment/Pinakamataas na Natapos na Antas ng Edukasyon"
                  value={addEducation} 
                  disabled={disableEducation}
                  onChange={(e) => setaddEducation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='flex justify-end'>
            <button
                  type="submit"
                  className=" mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                >
                  Submit
                </button>
            </div>
          </div>
            </form>
        </div>
      </div>
    </div>

    {showLogoutConfirmation && (
      <div className='fixed inset-0 top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center'> 
        <div className='bg-white w-full flex justify-center items-center h-32 flex-col'>
            <h1>Are you sure you want to Logout?</h1>
            <div className='flex gap-10 mt-3'>
              <h1 className='p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer' onClick={handleConfirmLogout}>Confirm</h1>
              <h1 className='p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 cursor-pointer' onClick={() => setShowLogoutConfirmation(false)}>Cancel</h1>
            </div>
        </div>
      </div>
    )}




    </>
  );
};

