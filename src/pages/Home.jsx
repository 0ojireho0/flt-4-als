import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import bgLogo from "../assets/background-logo.jpg";
import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { FaFileAlt } from 'react-icons/fa';
import footerImg from "../assets/footer-img.png";


export default function Home() {
    const navigate = useNavigate(); 

    useEffect(() => {

        const user = localStorage.getItem('user'); 
        if (!user) {
            navigate('/sign-in'); 
        }
    }, []); 

    return (
        <>
            <div className='w-full'>
                <img src={bgLogo} className="object-cover w-full h-[80rem] opacity-50 md:h-[40rem] xl:h-[30rem]" alt="" />
                <div className='absolute top-16 w-full flex flex-col justify-center items-center'>
                    <div className='w-3/4 mt-10'>
                        <Typography className='text-center' variant='h3'>Take the Functional Literacy Test</Typography>
                        <Typography className='text-center mt-5' variant='h6'>This is a test on readiness of applicants for the different levels in the curriculum of Alternative Learning System in the Department of Education.</Typography>
                        <div className='flex justify-center items-center mt-5'>
                            <Button className='bg-[#006299]'><Link to="/student/dashboard">Go to Account</Link></Button>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-24 mt-24 md:grid md:grid-cols-3 md:ml-[-2rem] lg:ml-[-5rem] xl:ml-0 '>
                            <div className="relative w-64 p-4 bg-red-500 rounded-lg flex flex-col items-center text-white md:w-44 lg:w-64 ">
                                <div className="absolute -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#EF3434F7] ">
                                    <FaFileAlt className="text-red-500 text-4xl" />
                                </div>
                                <div className="mt-12 text-center">
                                    <h3 className="text-xl font-semibold">Modules</h3>
                                    <p className="text-sm mt-2">This contains the learning materials from the respective level of the student.</p>
                                </div>
                            </div>

                            <div className="relative w-64 p-4 bg-[#009900] rounded-lg flex flex-col items-center text-white md:w-44 lg:w-64">
                                <div className="absolute -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#009900] ">
                                    <FaFileAlt className="text-[#009900] text-4xl" />
                                </div>
                                <div className="mt-12 text-center">
                                    <h3 className="text-xl font-semibold">Modules</h3>
                                    <p className="text-sm mt-2">This contains the learning materials from the respective level of the student.</p>
                                </div>
                            </div>

                            <div className="relative w-64 p-4 bg-[#010066] rounded-lg flex flex-col items-center text-white md:w-44 lg:w-64">
                                <div className="absolute -top-10 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#010066] ">
                                    <FaFileAlt className="text-[#010066] text-4xl" />
                                </div>
                                <div className="mt-12 text-center">
                                    <h3 className="text-xl font-semibold">Modules</h3>
                                    <p className="text-sm mt-2">This contains the learning materials from the respective level of the student.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center static bottom-0'>
                <img src={footerImg} className='w-[60rem]' alt="" />
            </div>
        </>
    );
}
