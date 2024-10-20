import React, { useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";

import axios from "axios";

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export default function RegularStudentAdmin() {

  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showAddStudentModal, setShowAddStudentModal] = useState(false)
  const [getAllStudent, setGetAllStudent] = useState([])
  const [showPersonalInformationSheet, setShowPersonalInformationSheet] = useState(true)
  const [getFullName, setgetFullName] = useState("")
  const navigate = useNavigate();

  const [gender, setGender] = useState("")
  const [houseNumber, sethouseNumber] = useState("")
  const [barangay, setbarangay] = useState("")
  const [city, setcity] = useState("")
  const [province, setprovince] = useState("")
  const [religion, setreligion] = useState("")
  const [grade, setGrade] = useState(0)
  const [birthday, setbirthday] = useState("")
  const [fullname, setfullname] = useState("")
  const [accountid, setaccountid] = useState(0)
  const [dateCreated, setdateCreated] = useState("")
  const [status, setstatus] = useState("")
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [getStatus, setgetStatus] = useState("")
  const [section, setSection] = useState("")

  const [getData, setgetData] = useState([])
  const [listOfTeachers, setlistOfTeachers] = useState([])


  const [addFullName, setaddFullName] = useState("")
  const [addLRN, setaddLRN] = useState("")
  const [addEmail, setAddEmail] = useState("")
  const [addPassword, setAddPassword] = useState("")
  const [addGender, setAddGender] = useState("")
  const [addHouseNumber, setaddHouseNumber] = useState("")
  const [addBarangay, setaddBarangay] = useState("")
  const [addCity, setaddCity] = useState("")
  const [addProvince, setaddProvince] = useState("")
  const [addReligion, setaddReligion] = useState("")
  const [addGrade, setAddGrade] = useState(7)
  const [addBirthday, setaddBirthday] = useState("")
  const [addSection, setaddSection] = useState("")

  const [teachers, setTeachers] = useState(0)


  const handleShowSettingsModal = () =>{
    setShowSettingsModal(!showSettingsModal)
    console.log(getData)
    setaccountid(getData.id)
    setdateCreated(getData.created_at)
    setstatus(getData.active_status)
    setemail(getData.email)
  }

  const fetchStudent = async() =>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/regular-student')
      // console.log(res.data.students)
      setGetAllStudent(res.data.students)
    } catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user == null || user.user_type !== "Admin"){
      navigate('/employee/sign-in')
    }else{
      setgetFullName(user.fullname)
      // console.log(user)
    }
    
    fetchStudent()
    getListOfTeachers()

  },[])

  const getListOfTeachers = async() =>{
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/regular-teacher')
      // console.log(res.data);
      setlistOfTeachers(res.data.teachers)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetStudentData = (student) =>{
    // console.log(student)
    setGender(student.gender)
    sethouseNumber(student.house_number)
    setbarangay(student.barangay)
    setcity(student.city)
    setprovince(student.province)
    setreligion(student.religion)
    setGrade(student.grade)
    setbirthday(student.birthday)
    setShowPersonalInformationSheet(false)
    setfullname(student.fullname)
    setgetStatus(student.active_status)
    setgetData(student)
    setSection(student.section)
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };





  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const updatedData = {
        active_status: status, // Current status
        password: password // New password
    };

    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/student/${accountid}`, updatedData);
        console.log(response);
        if(response.status == 200){
          toast.success('Updated successfully');
          setShowSettingsModal(!showSettingsModal)
        }
  
    } catch (error) {
        console.error('Error updating student:', error);
    }
};

  const handleCreateStudent = async(e) =>{
    e.preventDefault(); // Prevent the default form submission

    const studentData = {
      fullname: addFullName,
      lrn: addLRN,
      email: addEmail,
      password: addPassword,
      gender: addGender,
      birthday: addBirthday,
      house_number: addHouseNumber,
      barangay: addBarangay,
      city: addCity,
      province: addProvince,
      religion: addReligion,
      grade: parseInt(addGrade),
      teacher: parseInt(teachers),
      section: addSection

    };
  
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/create-regular-student', studentData);
      
    //   console.log(res)
      // console.log(response)
      setShowAddStudentModal(false);
      if(res.status == 201){
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/regular-student')
            // console.log(res)
            if(res.status == 200){
                const getStudentsTeachers = {
                    regular_students_id: res.data.students[res.data.students.length - 1].id,
                    regular_teachers_id: parseInt(teachers)
                }
                try {
                    const res = await axios.post('http://127.0.0.1:8000/api/new-regularstudent-teacher', getStudentsTeachers)
                    console.log(res)
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
      }
    
      

   


    } catch (error) {
      console.error('Error creating student:', error);
      // Handle error (e.g., show an error message to the user)
    }
  }

  const handleDelete = async (studentId) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/api/student/${studentId}`); // Update the URL as needed
      // console.log('Student deleted successfully:', studentId);
      if(res.status == 200){
        toast.success('Deleted Successfully')
      }

    } catch (error) {
      console.error('Error deleting student:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  const handleLogout = () =>{
    localStorage.removeItem('user'); 
    // console.log('Item removed from localStorage');
    navigate('/sign-in')

  }


  return (

    <>
      <Toaster />
      <div className='w-full flex justify-end items-center gap-3 md:w-full'>
        <h1>{getFullName}</h1>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={handleLogout}>Logout</button>
      </div>
      <div className='mt-3'>
        <h1 className='text-2xl font-bold'>ALS Student</h1>
      </div>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 '>
        <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">Current School Year</h2>
            <p className="text-gray-600">S.Y. 2024 - 2025</p>
        </div>
        <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold">ALS Student</h2>
          <p className="text-gray-600">{fullname}</p>
          <span className="bg-yellow-400 text-white text-sm py-1 px-2 rounded-full">
            {getStatus} ALS Student
          </span>
          {showSettingsModal ? (
            <Button size="sm" className="mt-3 bg-black/80 w-44 hover:bg-black/50" onClick={handleShowSettingsModal}>Back to Main </Button>
          ) : (
            <Button size="sm" className="mt-3 bg-black/80 w-44 hover:bg-black/50" onClick={handleShowSettingsModal}>Account Settings</Button>
          )}
        </div>
        <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold">Active Student</h2>
          <p className="text-gray-600">{getAllStudent.length}</p>
        </div>
      </div>

      {showSettingsModal ? (
        <>
        <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Student Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Account Details */}
        <div className="mb-4">
          <label className="block text-gray-700">Account ID</label>
          <input
            type="text"
            name="accountId"
            disabled
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={accountid}


          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date Registered</label>
          <input
            type="text"
            name="dateRegistered"
            disabled
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={dateCreated}

          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Account Status</label>
          <select
            name="accountStatus"
            value={status} // Set the current status as the value
            onChange={(e) => setstatus(e.target.value)} // Update the status on change
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Reset Password */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            name="username"
            disabled
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={email}

          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Confirm new password"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>


        </>
      ) : (
        <> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
            <div className="bg-white p-8 shadow rounded-lg">
              <h1 className="text-center font-bold text-2xl mb-3">Personal Information Sheet</h1>
              {showPersonalInformationSheet ? (
                <>
                  <div className="text-center">No data</div>
                </>
              ) : (
                <>
                <form>
                  <div className=" lg:grid lg:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 font-bold">Gender</label>
                      <div className="flex items-center">
                        <label className="mr-4">
                          <input type="radio" name="gender" value="male" 
                          checked={gender === "Male"}  
                        //   onChange={(e) => handleChange(index, "gender", e.target.value)} 

                          />
                          <span className="ml-2">Male</span>
                        </label>
                        <label>
                          <input type="radio" name="gender" value="female"                                    
                            checked={gender === "Female"}
                            // onChange={(e) => handleChange(index, "gender", e.target.value)} 

                            />
                          <span className="ml-2">Female</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 font-bold">Birthday</label>
                      <div className="flex">
                          <input type="date" className="border p-2 w-full"     
                          value={birthday.split(" ")[0]}
                        //   onChange={(e) => handleChange(index, "birthday", e.target.value)} 
                           />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block mb-1 font-bold">Address</label>
                      <div className="flex mb-2">
                        <input
                          type="text"
                          placeholder="House Number / Street"
                          className="border p-2 w-1/2 mr-2"
                          value={houseNumber}
                        //   onChange={(e) => handleChange(index, "house_number", e.target.value)}
                        />
                        <input type="text" placeholder="Barangay" className="border p-2 w-1/2"                                 
                          value={barangay}
                        //   onChange={(e) => handleChange(index, "barangay", e.target.value)} 

                          />
                      </div>
                      <div className="flex">
                        <input type="text" placeholder="City" className="border p-2 w-1/2 mr-2" 
                          value={city}
                        //   onChange={(e) => handleChange(index, "city", e.target.value)}

                                            />
                        <input type="text" placeholder="Province" className="border p-2 w-1/2"
                                            value={province}
                                            // onChange={(e) => handleChange(index, "province", e.target.value)} 

                                            />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-1 font-bold">Religion</label>
                      <input
                        type="text"
                        placeholder="Roman Catholic"
                        className="border p-2 w-full"
                        value={religion}
                        // onChange={(e) => handleChange(index, "religion", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-bold">Grade</label>
                      <input
                        type="text"
                        placeholder="Roman Catholic"
                        className="border p-2 w-full"
                        value={grade}
                        // onChange={(e) => handleChange(index, "grade", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-bold">Section</label>
                      <input
                        type="text"
                        placeholder="Roman Catholic"
                        className="border p-2 w-full"
                        value={section}
                        // onChange={(e) => handleChange(index, "grade", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button>Submit</Button>
                  </div>
                </form>

                  
                </>
              )}
            </div>

            <div className="bg-white p-8 shadow rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Student Masterlist</h2>
                <button className="bg-green-500 text-white py-2 px-4 rounded" 
                onClick={() => setShowAddStudentModal(!showAddStudentModal)}>
                  Add Student
                </button>
              </div>

              <ul className="overflow-y-auto max-h-96">
                <li className="mb-4">
                {getAllStudent.map((student, i)=>{
                  return(
                    <div className="flex justify-between items-center" key={i}>
                    <div className="cursor-pointer" onClick={()=> handleGetStudentData(student)}>
                      <h3 className="font-bold">{student.fullname} </h3>
                      <p className="text-sm text-gray-500">{student.lrn}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                      <span className="text-green-500 font-bold">{student.active_status}</span>
                      <span className="text-green-500 font-bold" onClick={() => handleDelete(student.id)}>Delete</span>
                    </div>
                  </div>
                  )
                })}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {showAddStudentModal && (
        <> 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-3 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[70rem] mt-[60rem] md:mt-0 ">
            <h2 className="text-xl font-bold mb-4">Register New Student</h2>
            <p className="mb-4 text-sm">Enter student details and student account to register</p>

            {/* Form */}
            <form onSubmit={handleCreateStudent} className="">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:md-grid-cols-4 gap-4">
              <div className="">
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Full Name"
                  value={addFullName} 
                  onChange={(e) => setaddFullName(e.target.value)}
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">LRN</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="LRN"
                  value={addLRN} 
                  onChange={(e) => setaddLRN(e.target.value)}
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                  value={addEmail} 
                  onChange={(e) => setAddEmail(e.target.value)}
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Password"
                  value={addPassword} 
                  onChange={(e) => setAddPassword(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Birthday</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Birthday"
                  value={addBirthday} 
                  onChange={(e) => setaddBirthday(e.target.value)}
                />
              </div>
              <div className=""> 
                <label className="block mb-1 font-medium">Gender</label>
                <select
                  name="gender"
                  value={addGender}
                  onChange={(e) => setAddGender(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="">
                <label className="block mb-1 font-medium">House Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="House Number"
                  value={addHouseNumber} 
                  onChange={(e) => setaddHouseNumber(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Barangay</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Barangay"
                  value={addBarangay} 
                  onChange={(e) => setaddBarangay(e.target.value)}
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="City"
                  value={addCity} 
                  onChange={(e) => setaddCity(e.target.value)}
                />
              </div>

              <div className="">
                <label className="block mb-1 font-medium">Province</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Province"
                  value={addProvince} 
                  onChange={(e) => setaddProvince(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Religion</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Religion"
                  value={addReligion} 
                  onChange={(e) => setaddReligion(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block mb-1 font-medium">Grade</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Religion"
                  value={addGrade} 
                  onChange={(e) => setAddGrade(e.target.value)}
                />
              </div>
    
              <div className=""> 
                <label className="block mb-1 font-medium">Teacher</label>
                <select
                  name="teacher"
                  value={teachers}
                  onChange={(e) => setTeachers(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Teacher</option>
                  {listOfTeachers.map((teacher, i)=>{
                    return(
                      <>
                      <option value={teacher.id} key={i} >{teacher.fullname}</option>

                      </>
                    )
                  })}
                </select>
              </div>

              <div className=""> 
                <label className="block mb-1 font-medium">Section</label>
                <select
                  name="gender"
                  value={addSection}
                  onChange={(e) => setaddSection(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Section</option>
                  <option value="1">Section 1</option>
                  <option value="2">Section 2</option>
                  <option value="3">Section 3</option>
                </select>
              </div>
              </div>
              
              

              {/* Buttons */}
              <div className="flex justify-end col-span-2 space-x-2 mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                >
                  Create
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
                  onClick={() => setShowAddStudentModal(!showAddStudentModal)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>

        
        
        </>
      )}



  </>
  );
  
}
