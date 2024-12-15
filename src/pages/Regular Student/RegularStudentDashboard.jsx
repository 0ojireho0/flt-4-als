import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function RegularStudentDashboard() {
  const [getFirstname, setgetFirstname] = useState("");
  const [getLRN, setgetLRN] = useState("");
  const [getGender, setgetGender] = useState("");
  const [getBirthday, setgetBirthday] = useState("");
  const [getAddress, setgetAddress] = useState("");
  const [getReligion, setgetReligion] = useState("");
  const [getGrade, setGetGrade] = useState(0);
  const [getTeacherFullname, setGetTeacherFullname] = useState("");
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const navigate = useNavigate();

  const getAgeByBirthday = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();

    return today.getFullYear() - birthDate.getFullYear() - 1;
  };

  const getTeacherName = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const details = {
      regular_student_id: parseInt(user.id),
      regular_teacher_id: parseInt(user.regular_teacher_id),
    };

    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/get-teacher-teachername",
        { params: details }
      );
      setGetTeacherFullname(res.data.details[0].fullname);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setgetFirstname(user.fullname);
    setgetLRN(user.lrn);
    setgetGender(user.gender);
    setgetBirthday(user.birthday);
    setgetAddress(
      `${user.house_number} ${user.city} ${user.barangay} ${user.province}`
    );
    setgetReligion(user.religion);
    setGetGrade(user.grade);

    getTeacherName();
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("user");
    navigate("/sign-in");
  };

  return (
    <>
      <div className="p-4 min-h-screen bg-gray-100">
        <div className="w-full flex justify-end items-center gap-3 md:w-full">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

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
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">
                📄
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
          {/* Student Information */}
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center flex-col">
            <h3 className="text-xl font-semibold mb-4">STUDENT INFORMATION</h3>
            <div>
              <p>
                <strong>Full Name:</strong> {getFirstname}
              </p>
              <p>
                <strong>LRN:</strong> {getLRN}
              </p>
              <p>
                <strong>Gender:</strong> {getGender}
              </p>
              <p>
                <strong>Birthdate:</strong> {dayjs(getBirthday).format(
                  "MMMM DD, YYYY"
                )}
              </p>
              <p>
                <strong>Age:</strong> {getAgeByBirthday(getBirthday)}
              </p>
              <p>
                <strong>Address:</strong> {getAddress}
              </p>
              <p>
                <strong>Religion:</strong> {getReligion}
              </p>
              <p>
                <strong>Grade:</strong> {getGrade}
              </p>
              <p>
                <strong>Teacher:</strong> {getTeacherFullname}
              </p>
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Performance Overview</h3>
            <div className="relative w-40 h-40">
              {/* Pie chart using pure CSS */}
              <div
                className="w-full h-full rounded-full bg-green-500"
                style={{
                  clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-500"
                style={{
                  clipPath: "polygon(50% 50%, 0 100%, 0 0, 100% 0)",
                }}
              ></div>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500"
                style={{
                  clipPath: "polygon(50% 50%, 0 0, 100% 0)",
                }}
              ></div>
              {/* Center Circle */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <span className="text-sm font-semibold">60%</span>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded"></span>
                <p>Completed</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-500 rounded"></span>
                <p>In Progress</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-500 rounded"></span>
                <p>Not Started</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLogoutConfirmation && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
          <div className="bg-white w-full flex justify-center items-center h-32 flex-col">
            <h1>Are you sure you want to Logout?</h1>
            <div className="flex gap-10 mt-3">
              <h1
                className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer"
                onClick={handleConfirmLogout}
              >
                Confirm
              </h1>
              <h1
                className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 cursor-pointer"
                onClick={() => setShowLogoutConfirmation(false)}
              >
                Cancel
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
