import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import question2 from '../../../assets/ls5-assessments/LS5 Q2.png'
import question1 from '../../../assets/ls5-assessments/LS5 Q1.png'
import question3 from '../../../assets/ls5-assessments/LS5 Q3.png'
import question4 from '../../../assets/ls5-assessments/LS5 Q4.png'
import question5 from '../../../assets/ls5-assessments/LS5 Q5.png'

import {Button} from '@material-tailwind/react'
import axios from 'axios'

export default function LS5PostTestUnderstanding() {
    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answer5, setAnswer5] = useState('');


    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)
    const [disableAnswer5, setDisableAnswer5] = useState(false)


    const [totalScore, setTotalScore] = useState(0)


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

        if (answer1 === "D") score += 1;
        if (answer2 === "A") score += 1;
        if (answer3 === "A") score += 1;
        if (answer4 === "C") score += 1;
        if (answer5 === "B") score += 1;

        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4, answer5])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudentPosttest', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].post_test_ls5_1 !== null){
            setAnswer1(response.data[0].post_test_ls5_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].post_test_ls5_2 !== null){
            setAnswer2(response.data[0].post_test_ls5_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].post_test_ls5_3 !== null){
            setAnswer3(response.data[0].post_test_ls5_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].post_test_ls5_4 !== null){
            setAnswer4(response.data[0].post_test_ls5_4)
            setDisableAnswer4(true)
        }
        if(response.data[0].post_test_ls5_5 !== null){
            setAnswer5(response.data[0].post_test_ls5_5)
            setDisableAnswer5(true)
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
            student_id: getStudentID,
            total: totalScore
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerUTSPosttest',sendAnswer);
            console.log(response);
  

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
                <h1 className='font-bold'> Understanding the Self and Society </h1>
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
                <h1>LS5 Understanding the Self and Society </h1>
            </div>
        </div>
        <div>
                <h1 className='font-bold text-black/50 text-[0.8rem]'>Panuto: Basahin ang bawat aytem. Bilugan ang titik ng tamang sagot sa sagutang papel para sa LS5</h1>
            </div>
        <form onSubmit={handleSubmitAnswers}>
        <div className='mt-3'>
                <h1>1. Ano ang pinakatamang gawin kapag inabutan ka ng lindol sa learning center? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question1} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='1' label="A. Ligpitin ang mahahalagang bagay." value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    <Radio name='1' label="B. Tumakbo nang mabilis palabas." value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="C. Sumandal sa mataas na pader." value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                    <Radio name='1' label="D. Magtago sa ilalim ng matibay na mesa." value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>2. Batay sa larawan, alin ang tamang pagkakasunod-sunod ng mga kaganapan sa buhay ng isang tao? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question2} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='2' label="A. 3-2-4-1" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="B. 4-3-2-1 " value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="C. 1-4-2-3" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                    <Radio name='2' label="D. 2-3-4-1" value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>3. Napansin mong alas dose na ng gabi ngunit malakas pa rin ang tugtog at boses ng iyong kapitbahay. Hindi makatulong ang pamilya mo. Ano ang dapat mong gawin? </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question3} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='3' label="A. Kausapin siya nang mahinahon." value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required  />
                    <Radio name='3' label="B. Igalang ang karapatan niya." value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required />
                    <Radio name='3' label="C. Tumawag agad ng pulis." value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    <Radio name='3' label="D. Tiisin na lang ang ingay." value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>4. Maagang nag-asawa sina Celso at Jade. Nagkaanak agad sila ngunit naging iresponsable si Celso. Humantong ito sa kanilang paghihiwalay. May karapatan bang humingi si Jade ng suportang pinansyal kay Celso para sa kanilang anak?  </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question4} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='4' label="A. Hindi, dahil hiwalay na sila." value="A" checked={answer4 == "A"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="B. Hindi, dahil sandali lang naman silang nagsama." value="B" checked={answer4 == "B"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    <Radio name='4' label="C. Oo, may pananagutan si Celso sa bata." value="C" checked={answer4 == "C"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)}  required />
                    <Radio name='4' label="D. Oo, dahil may trabaho naman si Celso" value="D" checked={answer4 == "D"} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                <h1>5. Nakita ni Luis ang isang matandang babae na balak tumawid sa "pedestrian lane." Nilapitan niya ang matanda at inalalayan sa pagtawid. Ano ang katangiang taglay niya?  </h1>
                <div className='border-2 p-2 flex justify-center items-center'>
                    <img src={question5} className='w-1/2' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <Radio name='5' label="A. Matiyaga" value="A" checked={answer5 == "A"} disabled={disableAnswer5} onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="B. Matulungin" value="B" checked={answer5 == "B"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)}  required />
                    <Radio name='5' label="C. Mapag-aruga" value="C" checked={answer5 == "C"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                    <Radio name='5' label="D. Magalang" value="D" checked={answer5 == "D"} disabled={disableAnswer5}  onChange={(e) => setAnswer5(e.target.value)} required />
                </div>
            </div>
            <div className='mt-3'>
                    <div className='flex justify-center items-center'>
                        <Button type='submit'>Submit</Button>
                    </div>
            </div>
        </form>
    </div>
    
    </>
  )
}
