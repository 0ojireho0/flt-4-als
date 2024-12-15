import React from "react";
import manilahighbldg from "../assets/MANILA_HIGH_BLDG.png";
import mhslogo from "../assets/mhs_logo2.png";
import asrimg from "../assets/ASR_img.png"
import eLearningimg from "../assets/Elearning_img.png"
import FLTimg from "../assets/Functional Literacy_img.png"

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* First Page */}
      <div className="flex flex-col justify-center items-center md:flex-row md:bg-gray-300 w-full">
        <div className="flex flex-col justify-center items-center h-[20rem] w-full">
          <h1 className="font-semibold md:text-5xl md:text-center">
            MANILA HIGH SCHOOL
          </h1>
          <h1 className="text-[0.7rem] bg-green-800 text-white p-1 rounded-full md:text-2xl md:p-2 md:my-5">
            INTRAMUROS, MANILA
          </h1>
          <h1 className="text-4xl font-semibold my-5 text-green-800 text-center md:text-5xl lg:text-[4rem]">
            WELCOME TO <span className="text-black">MHSLEARN!</span>
          </h1>
          <h1 className="text-center text-gray-900 md:my-5 md:text-xl">
            Enhancing Learning with Innovation in Literacy and Technology
          </h1>
        </div>
        <div className="w-full hidden md:flex justify-center items-center">
          <div className="relative top-20 w-[50%] flex flex-col justify-center items-center">
            <div className="bg-white flex justify-center items-center rounded-bl-[15rem] pb-5 w-[40rem] rounded-br-[15rem] rounded-tl-md rounded-tr-md">
              <img
                src={manilahighbldg}
                className="w-[38rem] h-[20rem] rounded-bl-[15rem] rounded-br-[15rem] rounded-tl-md rounded-tr-md"
                alt=""
              />
            </div>
            <div className="rounded-full bg-white p-10 -mt-16">
              <img src={mhslogo} alt="" className="w-96" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={eLearningimg}
                alt="E-learning System"
                className="w-40 h-40 mb-4"
              />
              <h2 className="font-semibold text-lg mb-2">E-learning System</h2>
              <p className="text-gray-600">
                A web-based platform providing Manila High School students with
                tools for remote learning, including educational materials and
                progress tracking.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={FLTimg}
                alt="Functional Literacy Test"
                className="w-40 h-40 mb-4"
              />
              <h2 className="font-semibold text-lg mb-2">
                Functional Literacy Test
              </h2>
              <p className="text-gray-600">
                An upgraded test offering immediate feedback and readiness
                assessment for ALS students.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={asrimg}
                alt="Automatic Speech Recognition"
                className="w-40 h-40 mb-4"
              />
              <h2 className="font-semibold text-lg mb-2">
                Automatic Speech Recognition
              </h2>
              <p className="text-gray-600">
                Enables real-time speech conversion to text, enhancing literacy
                and comprehension skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
