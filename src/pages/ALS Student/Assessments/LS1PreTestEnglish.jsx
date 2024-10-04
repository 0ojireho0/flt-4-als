import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'


export default function LS1PreTestEnglish() {

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
                <h1 className='font-bold'> Communication Skills (English) </h1>
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

    <div className='p-4 bg-gray-100 mt-3 '>
        <div className='bg-white p-4 rounded-lg shadow-md  mb-6'>
            <div className='text-center'>
                <h1>LS1 Communication Skills (English)</h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem] '>Part I. Reading</h1>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Select the letter of the correct answer on the answer sheet provided for LS1 English</h1>
            </div>
            <div className='mt-3'>
                <h1>1. <span className='underline'>GREEN</span> light in the traffic sign means.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Go"  />
                    <Radio name='1' label="B. Ready"  />
                    <Radio name='1' label="C. Stop"  />
                    <Radio name='1' label="D. Slow Down"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Identify the type of sentence according to use. </h1>
                <div className='border-2 p-2 text-center'>
                    <h1>I won the lottery!</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Imperative"  />
                    <Radio name='2' label="B. Exclamatory"  />
                    <Radio name='2' label="C. Declarative"  />
                    <Radio name='2' label="D. Interrogative"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. What is the main idea of the given paragraph? </h1>
                <div className='border-2 p-2'>
                    <h1 className='text-justify'>The Sun is very important. Without it, there would be only darkness and our planet would be very cold and be without liquid water. Our planet would also be without people, animals, and plants because these things need sunlight and water to live. </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Things need sunlight to live"  />
                    <Radio name='3' label="B. There would be darkness in our planet"  />
                    <Radio name='3' label="C. It would be very cold on Earth"  />
                    <Radio name='3' label="D. The importance of the Sun"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Fill in the blank with the correct word from the options below that will make the statement <strong>POSITIVE</strong>. Choose the letter of the correct answer.</h1>
                <div className=' p-2 text-center'>
                    <h1 className=''>I will __________ eat that vegetable. It's delicious!</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. definitely"  />
                    <Radio name='4' label="B. hardly"  />
                    <Radio name='4' label="C. never"  />
                    <Radio name='4' label="D. not"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. What is the main idea of the given paragraph?</h1>
                <div className='border-2 p-2'>
                    <h1 className='text-justify'>All living things are made up of cells. Since humans are alive, we are also made of cells. Our body tissues are made up of cells. Tissue makes our body organs. Organs make our body systems. Cells are the building blocks of our bodies.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. Cells are building blocks of our bodies."  />
                    <Radio name='5' label="B. Body tissues are made up of cells."  />
                    <Radio name='5' label="C. Body organs are made up of tissue.    "  />
                    <Radio name='5' label="D. Living things are made up of cells."  />
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold text-black/70 text-[0.8rem] '>Part II. Writing</h1>
                <h1 className='font-bold text-black/70 text-[0.8rem]'>Directions: Read the item below. Write your answer on the blanks provided on the LS1 English answer sheet.</h1>
            </div>
            <div className='mt-3'>
                <h1>6. Choose one (1) member of your family and write a simple sentence to describe him/her. (1 point)</h1>
                <div className='border-2 p-2'>
                    <h1 className='text-justify'>All living things are made up of cells. Since humans are alive, we are also made of cells. Our body tissues are made up of cells. Tissue makes our body organs. Organs make our body systems. Cells are the building blocks of our bodies.</h1>
                </div>
                <div className='w-full mt-2'>
                    <Textarea label='Answer' />
                </div>
            </div>
        </div>
    </div>





    </>
  )
}
