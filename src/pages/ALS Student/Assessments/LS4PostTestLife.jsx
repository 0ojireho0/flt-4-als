import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import axios from 'axios'

import question1 from "../../../assets/ls4-assessments/LS4 Q1.png"
import question2 from "../../../assets/ls4-assessments/LS4 Q2.png"
import question3 from "../../../assets/ls4-assessments/LS4 Q3.png"
import question4 from "../../../assets/ls4-assessments/LS4 Q4.png"
import question5 from "../../../assets/ls4-assessments/LS4 Q5.png"
import question6 from "../../../assets/ls4-assessments/LS4 Q6.png"

import { useNavigate } from 'react-router-dom'

export default function LS4PostTestLife() {
    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');
    const [answer6, setAnswer6] = useState('');

    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)
    const [disableAnswer5, setDisableAnswer5] = useState(false)
    const [disableAnswer6, setDisableAnswer6] = useState(false)

    const [totalScore, setTotalScore] = useState(0)

    const navigate = useNavigate()


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setgetFirstname(user.fullname)
        setgetLRN(user.lrn)
        setGetStudentID(user.id)

        getSpecificStudents()
    }, [])

    useEffect(() => {
        // Calculate score based on the selected answers
        let score = 0;

        if (answer1 === "C") score += 1;
        if (answer2 === "A") score += 1;
        if (answer3 === "B") score += 1;
        if (answer4 === "D") score += 1;
        if (answer5 === "C") score += 1;
        if (answer6 === "A") score += 1;

        setTotalScore(score);

    }, [answer1, answer2, answer3, answer4, answer5, answer6])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudentPosttest', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].post_test_ls4_1 !== null){
            setAnswer1(response.data[0].post_test_ls4_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].post_test_ls4_2 !== null){
            setAnswer2(response.data[0].post_test_ls4_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].post_test_ls4_3 !== null){
            setAnswer3(response.data[0].post_test_ls4_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].post_test_ls4_4 !== null){
            setAnswer4(response.data[0].post_test_ls4_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].post_test_ls4_5 !== null){
            setAnswer5(response.data[0].post_test_ls4_5)
            setDisableAnswer5(true)
        }
        if(response.data[0].post_test_ls4_6 !== null){
            setAnswer6(response.data[0].post_test_ls4_6)
            setDisableAnswer6(true)
        }
  
  
      } catch (error) {
          console.log(error);
      }
    }



      const handleSubmitAnswers = async(e) =>{
        e.preventDefault()

        const sendAnswer = {
            answer1: answer1,
            answer2: answer2, 
            answer3:answer3,
            answer4:answer4, 
            answer5:answer5,
            answer6: answer6,
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerLifePosttest',sendAnswer);
            console.log(response);
            alert('Done')
            navigate('/student/posttest')

        } catch (error) {
            console.error('Error submitting answer:', error);
        }
      }
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
                <p className="font-semibold">S.Y. 2024-2025</p>
                </div>
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">📄</div>
            </div>
            {/* <div className="text-sm text-gray-500 mt-1">Current Test Period: Post-test</div> */}
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
            <form onSubmit={handleSubmitAnswers}>
            <div className='mt-3'>
                <h1>1. Gusto ni Nelia na madagdagan pa ang kanyan kaalaman at kasanayan sa pagluluto. Ano ang pinakamainam niyang gawin? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question1} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Magsanay sa pagluuluto nang mag-isa" value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="B. Magpaturo ng pagluluto sa kaibigan" value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="C. Sumali sa pagsasanay tungkol sa pagluluto" value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="D. Magsaliksik sa internet tungkol sa pagluluto" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Si Dexter ay marunong gumawa ng iba't ibang home-made na tinapay. nong trabaho ang maaari niyang pagkakitaan? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question2} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. Panadero" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="B. Sorbetero" value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                    <Radio name='2' label="C. Serbidor" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="D. Kusinero" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Maagang binubuksan ni Mang Roldan ang pinapasukang Auto Repair Shop. Tumatanggap siya ng mga mamimili kahit lampas na sa oras at sinisigurado niyang maayos ang kanyang trabaho. Ano ang magandang katangiang ipinakita niya bilang isang empleyado? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question3} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Masayahin" value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="B. Masipag" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required  />
                    <Radio name='3' label="C. Mahusay" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    <Radio name='3' label="D. Mapagbigay" value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Ano ang dapat gamitin ng mga mananahi sa ASAS Dress Shop sa paglilinis ng mga makina sa pagtatahi? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question4} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Basang tisyu" value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="B. Mamasa-masang tela" value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="C. Magaspang na tela" value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                    <Radio name='4' label="D. Malambot at tuyong tela" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required  />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Si Junjun ay isang construction worker sa White Forth Company. Alin sa mga sumusunod ang dapat ihanda at suotin ni Junjun bago pumasok? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question5} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. leather shoes at barong tagalog" value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required  />
                    <Radio name='5' label="B. sombrero, salamin at panyo" value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required />
                    <Radio name='5' label="C. helmet, bota, mask at gloves" value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="D. rubber shoes, shades at jacket" value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>6. Alin sa mga sumusunod ang nagpapakita na ang may-ari ng negosyo ay nagbibigay ng maayos na serbisyo sa kaniyang mamimili?  </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question6} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='6' label="A. Pinapalitan ang mga depektibong gamit." value="A" checked={answer6 == "A"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                    <Radio name='6' label="B. Walang pakialam ang security guard sa mga mamimili." value="B" checked={answer6 == "B"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required  />
                    <Radio name='6' label="C. Walang priority lane." value="C" checked={answer6 == "C"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required />
                    <Radio name='6' label="D. Hindi pinapansin ng mga sales lady ang kailangan ng mamimili." value="D" checked={answer6 == "D"} disabled={disableAnswer6}  onChange={(e) => setAnswer6(e.target.value)} required  />
                </div>
            </div>
            <div className='mt-3'>
                    <div className='flex justify-center items-center'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>


    </>
  )
}
