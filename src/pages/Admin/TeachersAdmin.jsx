import React, { useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


export default function TeachersAdmin() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [getEmployeesData, setGetEmployeesData] = useState([]);
  const [showPersonalInformationSheet, setShowPersonalInformationSheet] = useState(true);
  const [getFullName, setgetFullName] = useState("")
  const navigate = useNavigate();
  const [getActiveAdmin, setGetActiveAdmin] = useState(0)
  const [getActiveTeacher, setgetActiveTeacher] = useState(0)


  const [getActiveStatus, setGetActiveStatus] = useState("")
  const [barangay, setbarangay] = useState("")
  const [birthday, setbirthday] = useState("")
  const [city, setcity] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  const [email, setemail] = useState("")
  const [fullname, setfullname] = useState("")
  const [gender, setGender] = useState("")
  const [houseNumber, sethouseNumber] = useState("")
  const [accountid, setaccountid] = useState(0)
  const [province, setprovince] = useState("")
  const [userType, setUserType] = useState("")
  const [password, setPassword] = useState("")

  const [addFullName, setaddFullName] = useState("")
  const [addEmail, setAddEmail] = useState("")
  const [addPassword, setAddPassword] = useState("")
  const [addGender, setAddGender] = useState("")
  const [addHouseNumber, setaddHouseNumber] = useState("")
  const [addBarangay, setaddBarangay] = useState("")
  const [addCity, setaddCity] = useState("")
  const [addProvince, setaddProvince] = useState("")
  const [addBirthday, setaddBirthday] = useState("")
  const [addUserType, setAddUserType] = useState("")
  const [addContactNumber, setAddContactNumber] = useState("")
  const [addActveStatus, setAddActveStatus] = useState("Active")

  const handleShowSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/employee");
      // console.log(res?.data?.employees)
      setGetEmployeesData(res?.data?.employees);
      console.log(res?.data?.employees)

      const adminCount = res?.data?.employees.filter(employee => employee.user_type === 'Admin').length;
      setGetActiveAdmin(adminCount)

      const teacherCount = res?.data?.employees.filter(employee => employee.user_type === 'ALS Teacher').length;
      setgetActiveTeacher(teacherCount)
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))

    if(user == null || user.user_type !== "Admin"){
      navigate('/employee/sign-in')
    }else{
      setgetFullName(user.fullname)
      // console.log(user)
    }
    fetchData();


    
  }, []);


  const handleGetEmployeesData = (data) =>{
    console.log(data)
    setShowPersonalInformationSheet(false)
    setGetActiveStatus(data.active_status)
    setbarangay(data.barangay)
    setbirthday(data?.birthday)
    setcity(data?.city)
    setContactNumber(data?.contact_number)
    setCreatedAt(data?.created_at)
    setemail(data?.email)
    setfullname(data?.fullname)
    setGender(data?.gender)
    sethouseNumber(data?.house_number)
    setaccountid(data?.id)
    setprovince(data?.province)
    // setUserType(data?.user_type)

  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const updatedData = {
        active_status: getActiveStatus, // Current status
        password: password // New password
    };

    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/employee/${accountid}`, updatedData);
        console.log(response);
        if(response.status == 200){
          toast.success('Updated successfully');
          setShowSettingsModal(!showSettingsModal)
        }
  
    } catch (error) {
        console.error('Error updating student:', error);
    }
};

const handleChange = (index, name, value) => {
  const updatedStudents = [...getAllStudent];
  updatedStudents[index][name] = value;
  setGetAllStudent(updatedStudents);
};

const handleCreateStudent = async(e) =>{
  e.preventDefault(); // Prevent the default form submission

  const emplyeeData = {
    fullname: addFullName,
    email: addEmail,
    password: addPassword,
    gender: addGender,
    birthday: addBirthday,
    house_number: addHouseNumber,
    barangay: addBarangay,
    city: addCity,
    province: addProvince,
    contact_number: addContactNumber,
    user_type: "ALS Teacher",


  };

  try {
    const res = await axios.post('http://127.0.0.1:8000/api/teacher/', emplyeeData); // Update the URL as needed'
    const response = await axios.post('http://127.0.0.1:8000/api/employee/', emplyeeData); // Update the URL as needed'
    if(response.status == 201 || res.status == 201){
      setShowAddEmployeeModal(false);
      toast.success('Updated Successfully')
    }
    

  } catch (error) {
    console.error('Error creating student:', error);
    // Handle error (e.g., show an error message to the user)
  }
}

const handleDelete = async (employeeId) => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/employee/${employeeId}`); // Update the URL as needed
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
        <h1 className='text-2xl font-bold'>Teacher</h1>
      </div>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 '>
        <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">Current School Year</h2>
            <p className="text-gray-600">S.Y. 2024 - 2025</p>
        </div>
        <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">Employee</h2>
            <p className="text-gray-600">{fullname}</p>
            <span className="bg-yellow-400 text-white text-sm py-1 px-2 rounded-full">
              {getActiveStatus} Employee
            </span>
            {showSettingsModal ? (
              <Button
                size="sm"
                className="mt-3 bg-black/80 w-44 hover:bg-black/50"
                onClick={handleShowSettingsModal}
              >
                Back to Main{" "}
              </Button>
            ) : (
              <Button
                size="sm"
                className="mt-3 bg-black/80 w-44 hover:bg-black/50"
                onClick={handleShowSettingsModal}
              >
                Account Settings
              </Button>
            )}
          </div>
          <div className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold">Active Teachers</h2>
            <p className="text-gray-600">{getEmployeesData.length} Active</p>
            <div className="flex justify-center items-center mt-3">
              <div className="">
                <div>
                  <p className="text-gray-600">{getActiveTeacher} Teacher(s)</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      {showSettingsModal ? (
        <>
        <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Teacher Account</h1>
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
          <label className="block text-gray-700">Account Status</label>
          <select
            name="accountStatus"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={getActiveStatus} // Set the current status as the value
            onChange={(e) => setGetActiveStatus(e.target.value)} // Update the status on change
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Reset Password */}
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
                <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="col-span-2">
                        <label className="block mb-1 font-bold">
                          Employee Name
                        </label>
                        <div className="flex mb-2">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="border p-2 w-full mr-2"
                            value={fullname}
                            onChange={(e) => handleChange(index, "fullname", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-1 font-bold">
                          Employee Address
                        </label>
                        <div className="flex mb-2">
                          <input
                            type="text"
                            placeholder="House Number / Street"
                            className="border p-2 w-1/2 mr-2"
                            value={houseNumber}
                            onChange={(e) => handleChange(index, "house_number", e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Barangay"
                            className="border p-2 w-1/2"
                            value={barangay}
                            onChange={(e) => handleChange(index, "barangay", e.target.value)}
                          />
                        </div>
                        <div className="flex">
                          <input
                            type="text"
                            placeholder="City"
                            className="border p-2 w-1/2 mr-2"
                            value={city}
                            onChange={(e) => handleChange(index, "city", e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Province"
                            className="border p-2 w-1/2"
                            value={province}
                            onChange={(e) => handleChange(index, "province", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-1 font-bold">Birthday</label>
                        <div className="flex">
                          <input type="date" className="border p-2 w-full" value={birthday.split(" ")[0]} onChange={(e) => handleChange(index, "birthday", e.target.value)}  />
                        </div>
                      </div>
                      <div className="col-span-2 grid-cols-2 grid">
                        <div>
                          <label className="block mb-1 font-bold">Gender</label>
                          <div className="flex mb-2">
                            <input
                              type="text"
                              placeholder="Gender"
                              className="border p-2 w-full mr-2"
                              value={gender}
                              onChange={(e) => handleChange(index, "gender", e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block mb-1 font-bold">
                            Contact Number
                          </label>
                          <div className="flex mb-2">
                            <input
                              type="text"
                              placeholder="Contact Number"
                              className="border p-2 w-full mr-2"
                              value={contactNumber}
                              onChange={(e) => handleChange(index, "contact_number", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label className="block mb-1 font-bold">Email</label>
                        <div className="flex mb-2">
                          <input
                            type="text"
                            placeholder="Email"
                            className="border p-2 w-full mr-2"
                            value={email}
                            onChange={(e) => handleChange(index, "email", e.target.value)}
                          />
                        </div>
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
                  <h2 className="text-lg font-bold">Teacher Masterlist</h2>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded"
                    onClick={() =>
                      setShowAddEmployeeModal(!showAddEmployeeModal)
                    }
                  >
                    Add Employee
                  </button>
                </div>
                <ul className="overflow-y-auto max-h-96">
                  <li className="mb-4">
                    {getEmployeesData.map((data, i) => {
                      return (
                        <div
                          className="flex justify-between items-center"
                          key={i}
                        >
                          <div className="cursor-pointer" onClick={() => handleGetEmployeesData(data)}>
                            <h3 className="font-bold">{data.fullname}</h3>
                            <p className="text-sm text-gray-500">
                              {data.user_type}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-10">
                            <span className="text-green-500 font-bold">{data.active_status}</span>
                            <span className="text-green-500 font-bold" onClick={() => handleDelete(data.id)}>Delete</span>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                </ul>
            </div>
          </div>
        </>
      )}

      {showAddEmployeeModal && (
        <> 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-3 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[70rem] mt-[35rem] md:mt-0 ">
            <h2 className="text-xl font-bold mb-4">
                    Register New Employee User
            </h2>

            <p className="mb-4 text-sm">
                    Enter employee details and employee account to register
            </p>

            {/* Form */}
            <form onSubmit={handleCreateStudent} className="">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:md-grid-cols-4 gap-4">
            <div>
                        <label className="block mb-1 font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="First Name"
                          value={addFullName} 
                          onChange={(e) => setaddFullName(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          House Number / Street
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="House Number / Street"
                          value={addHouseNumber} 
                          onChange={(e) => setaddHouseNumber(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Barangay
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Barangay"
                          value={addBarangay} 
                          onChange={(e) => setaddBarangay(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">City</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="City"
                          value={addCity} 
                          onChange={(e) => setaddCity(e.target.value)}
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Province
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Province"
                          value={addProvince} 
                          onChange={(e) => setaddProvince(e.target.value)}
                        />
                      </div>

                      {/* Birthdate */}
                      <div>
                        <label className="block mb-1 font-medium">
                          Birthdate
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={addBirthday} 
                          onChange={(e) => setaddBirthday(e.target.value)}
                        />
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="block mb-1 font-medium">Gender</label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={addGender} 
                        onChange={(e) => setAddGender(e.target.value)}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      {/* Contact Number */}
                      <div>
                        <label className="block mb-1 font-medium">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Contact Number"
                          value={addContactNumber} 
                          onChange={(e) => setAddContactNumber(e.target.value)}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Email"
                          value={addEmail} 
                          onChange={(e) => setAddEmail(e.target.value)}
                        />
                      </div>

                      {/* Employee Account */}

                      <div>
                        <label className="block mb-1 font-medium">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Password"
                          value={addPassword} 
                          onChange={(e) => setAddPassword(e.target.value)}
                        />
                      </div>

                      <div>
                        {/* <label className="block mb-1 font-medium">
                          User Type
                        </label> */}
                        {/* <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={addUserType} 
                          onChange={(e) => setAddUserType(e.target.value)}>
                          <option value="">Select User Type</option>
                          <option value="Admin">Admin</option>
                          <option value="ALS Teacher">Teacher</option>
                        </select> */}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400"
                        onClick={() =>
                          setShowAddEmployeeModal(!showAddEmployeeModal)
                        }
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
