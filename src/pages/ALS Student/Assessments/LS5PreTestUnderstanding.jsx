import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import question2 from '../../../assets/ls5-assessments/question2.png'

export default function LS5PreTestUnderstanding() {
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
                <h1 className='font-bold'> Understanding the Self and Society </h1>
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
                <h1>LS5 Understanding the Self and Society </h1>
            </div>
        </div>
        <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Panuto: Basahin ang bawat aytem. Bilugan ang titik ng tamang sagot sa sagutang papel para sa LS5</h1>
            </div>
        <div className='mt-3'>
                <h1>1. Ano ang pinakatamang gawin kapag inabutan ka ng lindol sa learning center? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Ligpitin ang mahahalagang bagay."  />
                    <Radio name='1' label="B. Tumakbo nang mabilis palabas."  />
                    <Radio name='1' label="C. Sumandal sa mataas na pader."  />
                    <Radio name='1' label="D. Magtago sa ilalim ng matibay na mesa."  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Batay sa larawan, alin ang tamang pagkakasunod-sunod ng mga kaganapan sa buhay ng isang tao? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question2} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. 3-2-4-1"  />
                    <Radio name='2' label="B. 4-3-2-1 "  />
                    <Radio name='2' label="C. 1-4-2-3"  />
                    <Radio name='2' label="D. 2-3-4-1"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Napansin mong alas dose na ng gabi ngunit malakas pa rin ang tugtog at boses ng iyong kapitbahay. Hindi makatulong ang pamilya mo. Ano ang dapat mong gawin? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Kausapin siya nang mahinahon."  />
                    <Radio name='3' label="B. Igalang ang karapatan niya."  />
                    <Radio name='3' label="C. Tumawag agad ng pulis."  />
                    <Radio name='3' label="D. Tiisin na lang ang ingay."  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Maagang nag-asawa sina Celso at Jade. Nagkaanak agad sila ngunit naging iresponsable si Celso. Humantong ito sa kanilang paghihiwalay. May karapatan bang humingi si Jade ng suportang pinansyal kay Celso para sa kanilang anak?  </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Hindi, dahil hiwalay na sila."  />
                    <Radio name='4' label="B. Hindi, dahil sandali lang naman silang nagsama."  />
                    <Radio name='4' label="C. Oo, may pananagutan si Celso sa bata."  />
                    <Radio name='4' label="D. Oo, dahil may trabaho naman si Celso"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Nakita ni Luis ang isang matandang babae na balak tumawid sa "pedestrian lane." Nilapitan niya ang matanda at inalalayan sa pagtawid. Ano ang katangiang taglay niya?  </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. Matiyaga"  />
                    <Radio name='5' label="B. Matulungin"  />
                    <Radio name='5' label="C. Mapag-aruga"  />
                    <Radio name='5' label="D. Magalang"  />
                </div>
            </div>
    </div>
    
    </>
  )
}
