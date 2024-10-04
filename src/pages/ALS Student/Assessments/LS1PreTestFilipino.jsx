import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'



export default function LS1PreTestFilipino() {

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
                <h1 className='font-bold'> Communication Skills (Filipino) </h1>
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
                <h1>LS1 Communication Skills (Filipino)</h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem] '>Part I. Pagbasa</h1>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Panuto: Basahin ang bawat aytem. Bilugan ang tamang sagot sa sagutang papel para sa LS1 Filipino</h1>
            </div>
            <div className='mt-3'>
                <h1>1. Basahin ang sitwasyon at piliin ang tamang sagot na nagpapakita ng magalang na pananalita</h1>
                <div className='border-2 p-2'>
                    <h1 className='text-justify'>Nais mong pumasok sa learning center ngunit ang iyong guro at ang kanyang kausap ay nasa pintuan. Ano ang iyong sasabihin sa kanila?</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Tumabi po kayo."  />
                    <Radio name='1' label="B. Dadaan po ako. Umalis po kayo."  />
                    <Radio name='1' label="C. Makikiraan po."  />
                    <Radio name='1' label="D. Pwede bang dumaan?"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Alin sa mga sumusunod na pangungusap ang may tamang bantas?</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Ang araw ng kalayaan ay ipinagdiriwawng tuwing Hunyo 12?"  />
                    <Radio name='2' label="B. Dadalo ka ba sa pagpupulong ngayong Huwebes."  />
                    <Radio name='2' label="C. Naku, may sunog!"  />
                    <Radio name='2' label='D. "Ang mga bata ay masayang naglalaro." '  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Basahin ang pangungusap at piliin ang pares ng mga salitang magkasalunugat ang kahulugan.</h1>
                <div className='border-2 p-2'>
                    <h1 className='text-justify'>Nalulungkot isipin na sa mata ng batas, nakalalamang ang mayamang may pantustos sa mga tagapagtanggol kaysa sa maralitang kahit pangkain ay wala.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Nakalalamang - Nakalulungkot"  />
                    <Radio name='3' label="B. Tagapagtanggol - Batas"  />
                    <Radio name='3' label="C. Pantustos - Pangkain"  />
                    <Radio name='3' label="D. Mayaman - Maralita"  />
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold text-black/70 text-[0.8rem] '>Part II. Pagsulat</h1>
                <h1 className='font-bold text-black/70 text-[0.8rem]'>Panuto: Basahin ang aytem. Isulat ang sagot sa sagutang papel. </h1>
            </div>
            <div className='mt-3'>
                <h1>4. Isulat sa patlang ang baybay sa Filipino ng salitang hiran na "computer"</h1>
                <div className='mt-2'>
                    <Textarea label='Sagot' />
                </div>
            </div>
        </div>
    </div>





    </>
  )
}
