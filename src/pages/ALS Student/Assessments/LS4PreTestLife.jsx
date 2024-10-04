import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'

export default function LS4PreTestLife() {
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
                <h1 className='font-bold'> Life and Career Skills </h1>
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
                <h1>LS4 Life and Career Skills </h1>
            </div>
            <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Panuto: Basahin ang bawat aytem. Bilugan ang titik ng tamang sagot sa sagutang papel para sa LS4</h1>
            </div>
            <div className='mt-3'>
                <h1>1. Gusto ni Nelia na madagdagan pa ang kanyan kaalaman at kasanayan sa pagluluto. Ano ang pinakamainam niyang gawin? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Magsanay sa pagluuluto nang mag-isa"  />
                    <Radio name='1' label="B. Magpaturo ng pagluluto sa kaibigan"  />
                    <Radio name='1' label="C. Sumali sa pagsasanay tungkol sa pagluluto"  />
                    <Radio name='1' label="D. Magsaliksik sa internet tungkol sa pagluluto"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Si Dexter ay marunong gumawa ng iba't ibang home-made na tinapay. nong trabaho ang maaari niyang pagkakitaan? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Panadero"  />
                    <Radio name='2' label="B. Sorbetero"  />
                    <Radio name='2' label="C. Serbidor"  />
                    <Radio name='2' label="D. Kusinero"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Maagang binubuksan ni Mang Roldan ang pinapasukang Auto Repair Shop. Tumatanggap siya ng mga mamimili kahit lampas na sa oras at sinisigurado niyang maayos ang kanyang trabaho. Ano ang magandang katangiang ipinakita niya bilang isang empleyado? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Masayahin"  />
                    <Radio name='3' label="B. Masipag"  />
                    <Radio name='3' label="C. Mahusay"  />
                    <Radio name='3' label="D. Mapagbigay"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Ano ang dapat gamitin ng mga mananahi sa ASAS Dress Shop sa paglilinis ng mga makina sa pagtatahi? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Basang tisyu"  />
                    <Radio name='4' label="B. Mamasa-masang tela"  />
                    <Radio name='4' label="C. Magaspang na tela"  />
                    <Radio name='4' label="D. Malambot at tuyong tela"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Si Junjun ay isang construction worker sa White Forth Company. Alin sa mga sumusunod ang dapat ihanda at suotin ni Junjun bago pumasok? </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. leather shoes at barong tagalog"  />
                    <Radio name='5' label="B. sombrero, salamin at panyo"  />
                    <Radio name='5' label="C. helmet, bota, mask at gloves"  />
                    <Radio name='5' label="D. rubber shoes, shades at jacket"  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Alin sa mga sumusunod ang nagpapakita na ang may-ari ng negosyo ay nagbibigay ng maayos na serbisyo sa kaniyang mamimili?  </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. Pinapalitan ang mga depektibong gamit."  />
                    <Radio name='6' label="B. Walang pakialam ang security guard sa mga mamimili."  />
                    <Radio name='6' label="C. Walang priority lane."  />
                    <Radio name='6' label="D. Hindi pinapansin ng mga sales lady ang kailangan ng mamimili."  />
                </div>
            </div>
        </div>
    </div>


    </>
  )
}
