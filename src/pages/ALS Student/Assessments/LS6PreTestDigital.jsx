import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'

export default function LS6PreTestDigital() {
    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        setgetFirstname(user.fullname)
        setgetLRN(user.lrn)
      },[])
  return (
    <>
        <div className='p-4 bg-gray-100'>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="flex items-center">
            <div>
                <h2 className="text-xl font-semibold">{getFirstname}</h2>
                <p className="text-gray-500">LRN: {getLRN}</p>
            </div>
            </div>
            <div className='text-center my-3'>
                <h1>Test Part</h1>
                <h1 className='font-bold'> Digital Citizenship </h1>
            </div>
            <div>
            <div className="flex space-x-4">
                <div>
                <p className="text-sm text-gray-500">Current School Year</p>
                <p className="font-semibold">S.Y. 2022-2023</p>
                </div>
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div>
            </div>
        </div>
    </div>

    <div className='p-4 bg-gray-100 mt-3'>
        <div className='bg-white p-4 rounded-lg shadow-md  mb-6'>
            <div className='text-center'>
                <h1>LS6 Digital Citizenship </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS6.</h1>
            </div>
            <div className='mt-3'>
                <h1>1. Which of the following describes a computer? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. It produces many errors."  />
                    <Radio name='1' label="B. It takes a long time to operate."  />
                    <Radio name='1' label="C. It works without instruction from the user."  />
                    <Radio name='1' label="D. It works fast and performs multiple functions."  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Which is the correct order of steps in turning off a computer? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Click the start button.</h1>
                    <h1>2. Save and Close all the Applications</h1>
                    <h1>3. Click the Shutdown button.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. 3,2,1"  />
                    <Radio name='2' label="B. 1,2,3"  />
                    <Radio name='2' label="C. 2,1,3"  />
                    <Radio name='2' label="D. 2,3,1"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Which of the following statements about microcomputer is correct? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Calculator captures images."  />
                    <Radio name='3' label="B. Tablet PC is bigger than laptop"  />
                    <Radio name='3' label="C. Desktop computer is portable"  />
                    <Radio name='3' label="D. Smartphone is used for calls and text messages."  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Which of the following computer device is used to make copies of reports, photographs and other documents? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Mouse"  />
                    <Radio name='4' label="B. Microphone"  />
                    <Radio name='4' label="C. Printer"  />
                    <Radio name='4' label="D. Speaker"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Jaf needs to scan his ID picture. What is the correct order of steps that he should follow? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Connect the scanner to the computer.</h1>
                    <h1>2. Place the picture to the scanner.</h1>
                    <h1>3. Press on the power button of the scanner</h1>
                    <h1>4. Click the scan button.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. 1, 3, 2, 4"  />
                    <Radio name='5' label="B. 3, 2, 1, 4"  />
                    <Radio name='5' label="C. 4, 3, 2, 1"  />
                    <Radio name='5' label="D. 2, 1, 3, 4"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Jaime wants to save his project into a USB flash drive. What is the correct order of steps to save it? </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>1. Click File</h1>
                    <h1>2. Choose Save As</h1>
                    <h1>3. Name the file and click save</h1>
                    <h1>4. Insert the flash drive to USB slot</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. 3, 4, 2, 1"  />
                    <Radio name='6' label="B. 2, 3, 1, 4"  />
                    <Radio name='6' label="C. 1, 2, 3, 4"  />
                    <Radio name='6' label="D. 4, 1, 2, 3"  />
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
