// StudentInfoSheet.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function ALSMath(){
    const questions = [
        {
          id: 1,
          question: "GREEN light in the traffic sign means.",
          options: [
            { label: "A", text: "Go" },
            { label: "B", text: "Ready" },
            { label: "C", text: "Stop" },
            { label: "D", text: "Slow Down" },
          ],
          studentAnswer: "A",
          correctAnswer: "A",
        },
        {
          id: 2,
          question: "Identify the type of sentence according to use.",
          example: "I won the lottery!",
          options: [
            { label: "A", text: "Imperative" },
            { label: "B", text: "Exclamatory" },
            { label: "C", text: "Declarative" },
            { label: "D", text: "Interrogative" },
          ],
          studentAnswer: "B",
          correctAnswer: "B",
        },
        {
          id: 3,
          question: "What is the main idea of the given paragraph?",
          paragraph:
            "The Sun is very important. Without it, there would be only darkness and our planet would be very cold and be without liquid water. Our planet would also be without people, animals, and plants because these things need sunlight and water to live.",
          options: [
            { label: "A", text: "Things need sunlight to live." },
            { label: "B", text: "There would be darkness in our planet." },
            { label: "C", text: "It would be very cold on Earth." },
            { label: "D", text: "The importance of the Sun." },
          ],
          studentAnswer: "D",
          correctAnswer: "D",
        },
      ];

  const [getActiveStudents, setGetActiveStudents] = useState(0)
  const [getAllStudents, setgetAllStudents] = useState([])


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

  const masterlist = [
    { name: 'Avelino, Alex Christian', lrn: '517011901717', score: '9/10' },
    { name: 'Mesiona, Mark Theodore A.', lrn: '136453160522', score: '9/10' },
    { name: 'Ashley, Ashley D.', lrn: '136453100031', score: '10/10' },
    // Add more students as needed
  ];

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
    <div className="flex p-6 bg-gray-100">
      {/* Left Container */}
      <div className="w-full lg:w-8/12 bg-white p-6 rounded-lg shadow-md">

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">LS3 Mathematics and Problem Solving Skills</h1>
        <p className="text-green-600 font-semibold">Score: 8/8 (July 14, 2023)</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Part I. Reading</h2>
        <p className="text-gray-600">Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for LS1 English.</p>
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
          <p className="font-bold">
            {index + 1}. {question.question}
          </p>

          {/* Display paragraph or example if exists */}
          {question.paragraph && (
            <div className="my-2 p-3 bg-gray-100 rounded text-gray-700">{question.paragraph}</div>
          )}
          {question.example && (
            <div className="my-2 p-2 bg-gray-100 rounded text-gray-700 italic text-center">{question.example}</div>
          )}

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {question.options.map((option) => (
              <label key={option.label} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option.label}
                  disabled
                  checked={option.label === question.studentAnswer}
                  className="form-radio text-green-500"
                />
                <span className={`${option.label === question.studentAnswer ? 'font-bold text-green-600' : ''}`}>
                  {option.label}. {option.text}
                </span>
              </label>
            ))}
          </div>

          {/* Student Answer Display */}
          <p className="mt-2 text-sm text-green-600">
            Student Answer: <span className="font-semibold">{question.studentAnswer}</span>
          </p>
        </div>
      ))}

 
      </div>

      {/* Right Container - Masterlist */}
      <div className="w-full lg:w-4/12 p-6 bg-white ml-4 rounded-lg shadow-md mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4">Student Masterlist</h2>
        <ul className="space-y-2">
          {getAllStudents.map((student, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{student.fullname}</p>
                <p className="text-sm text-gray-500">{student.lrn}</p>
              </div>
              <span className={`text-sm font-semibold ${student.score === '10/10' ? 'text-green-600' : 'text-yellow-500'}`}>
                {student.ls1_english} / 8
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


