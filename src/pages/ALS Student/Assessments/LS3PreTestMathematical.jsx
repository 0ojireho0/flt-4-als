import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'

import question1 from '../../../assets/ls3-assessments/question1.png'
import question2 from '../../../assets/ls3-assessments/question2.png'


export default function LS3PreTestMathematical() {
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
                <h1 className='font-bold'> Mathematical and Problem Solving Skills </h1>
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
                <h1>LS3 Mathematical and Problem Solving Skills </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS3</h1>
            </div>
            <div className='mt-3'>
                <h1>1. What is the difference between the numbers of hearts inside the boxes?</h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question1} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. 17"  />
                    <Radio name='1' label="B. 13 "  />
                    <Radio name='1' label="C. 10"  />
                    <Radio name='1' label="D. 5"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Which of the following symbols must be placed in the box? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question2} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. >"  />
                    <Radio name='2' label="B. < "  />
                    <Radio name='2' label="C. ="  />
                    <Radio name='2' label="D. ≠"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. The residents of Barangay San Pedro planted 1,655 mahogany trees and 2,340 mango trees in their barangay. How many trees did they plant altogether? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. 2,795"  />
                    <Radio name='3' label="B. 3,995"  />
                    <Radio name='3' label="C. 4,895"  />
                    <Radio name='3' label="D. 5,985"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. (250 x 40) ÷ (50 x 8) = </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. 15"  />
                    <Radio name='4' label="B. 25"  />
                    <Radio name='4' label="C. 35"  />
                    <Radio name='4' label="D. 45"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Of the twelve classes of DRT High School, each class donated 45 boxes of toothpaste to an orphanage. How many boxes of toothpaste were donated in all? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. 540"  />
                    <Radio name='5' label="B. 541"  />
                    <Radio name='5' label="C. 542"  />
                    <Radio name='5' label="D. 543"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Jack is planning to treat his 6 friends on his birthday. He decided to buy 3 boxes of pizza with 8 slices per box. How many slices of pizza can each of his friends have? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. 4"  />
                    <Radio name='6' label="B. 5"  />
                    <Radio name='6' label="C. 6"  />
                    <Radio name='6' label="D. 7"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>7. Marco bought four items from a sari-sari store. He bought the following: cooking oil at ₱35.75, canned tune at ₱28.15, tomato sauce at ₱19.50 and powdered milk at ₱123.65. How much did he pay for all the items?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='7' label="A. ₱237.75"  />
                    <Radio name='7' label="B. ₱227.50"  />
                    <Radio name='7' label="C. ₱217.15"  />
                    <Radio name='7' label="D. ₱207.05"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>8. In a fruit stand, t he ratio of mangoes to oranges in 4:3. How many oranges are there if there are 16 mangoes? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='8' label="A. 16"  />
                    <Radio name='8' label="B. 14"  />
                    <Radio name='8' label="C. 12"  />
                    <Radio name='8' label="D. 10"  />
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
