import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'


export default function LS2PreTestScientific() {


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
                <h1 className='font-bold'> Scientific Literacy and Critical Thinking Skills </h1>
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
                <h1>LS2 Scientific Literacy and Critical Thinking Skills </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Directions: Read each item. Encircle the letter of the correct answer on the answer sheet provided for LS2</h1>
            </div>
            <div className='mt-3'>
                <h1>1. Which solid waste management process is invloved in collection materials and converting it into new items?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Recovering"  />
                    <Radio name='1' label="B. Recycling "  />
                    <Radio name='1' label="C. Reducing"  />
                    <Radio name='1' label="D. Reusing"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. The following are some of the activities that can be done during summer <strong>EXCEPT</strong></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Playing at the park"  />
                    <Radio name='2' label="B. Swimming at the beach "  />
                    <Radio name='2' label="C. Planting crops in the field"  />
                    <Radio name='2' label="D. Selling halo-halo at the front yard"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Which of the following shows the correct way of handling flammable materials at home?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Leaving the stove unattended when cooking."  />
                    <Radio name='3' label="B. Flammable liquid not properly labelled and stored."  />
                    <Radio name='3' label="C. Keeping lighters and matches out of reach of children."  />
                    <Radio name='3' label="D. Candle left burning when everyone in the house is asleep."  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. What electrical energy can be transformed when we switch to the electric bulb?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Sound energy"  />
                    <Radio name='4' label="B. Light and heat energy"  />
                    <Radio name='4' label="C. Light and sound energy"  />
                    <Radio name='4' label="D. Chemical and sound energy"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Which of the following <strong>DOES NOT</strong> contribute to the greenhouse effect that causes climate change? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. Combustion of fuel"  />
                    <Radio name='5' label="B. Use of aesrosol sprays"  />
                    <Radio name='5' label="C. Dust from volcanic eruptions"  />
                    <Radio name='5' label="D. Use of solar powered jeepney"  />
                </div>
            </div>
        </div>
    </div>




    </>
  )
}
