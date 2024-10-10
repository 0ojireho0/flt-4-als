import React, { useEffect, useState } from 'react'
import { Radio } from '@material-tailwind/react'
import { Textarea } from '@material-tailwind/react'
import axios from 'axios'
import {Button} from '@material-tailwind/react'

import question5 from "../../../assets/ls1-filipino-assessments/habang-ikaw.mp3"



export default function LS1PostTestFilipino() {

    const [getFirstname, setgetFirstname] = useState("")
    const [getLRN, setgetLRN] = useState("")
    const [getStudentID, setGetStudentID] = useState(0)


    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const [disableAnswer1, setDisableAnswer1] = useState(false)
    const [disableAnswer2, setDisableAnswer2] = useState(false)
    const [disableAnswer3, setDisableAnswer3] = useState(false)
    const [disableAnswer4, setDisableAnswer4] = useState(false)


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

        if (answer1 === "C") score += 1;
        if (answer2 === "C") score += 1;
        if (answer3 === "D") score += 1;
        if (answer4 === "KOMPYUTER") score += 1;


        setTotalScore(score);
    }, [answer1, answer2, answer3, answer4])


    const getSpecificStudents = async() =>{

        const user = JSON.parse(localStorage.getItem('user'))
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/getStudentPosttest', { params: { students_id: parseInt(user.id) } });
          console.log(response)

        if(response.data[0].post_test_ls1_filipino_part1_1 !== null){
            setAnswer1(response.data[0].post_test_ls1_filipino_part1_1)
            setDisableAnswer1(true)
        }
        if(response.data[0].post_test_ls1_filipino_part1_2 !== null){
            setAnswer2(response.data[0].post_test_ls1_filipino_part1_2)
            setDisableAnswer2(true)
        }
        if(response.data[0].post_test_ls1_filipino_part1_3 !== null){
            setAnswer3(response.data[0].post_test_ls1_filipino_part1_3)
            setDisableAnswer3(true)
        }
        if(response.data[0].post_test_ls1_filipino_part2_4 !== null){
            setAnswer4(response.data[0].post_test_ls1_filipino_part2_4)
            setDisableAnswer4(true)
        }
 
  
  
      } catch (error) {
          console.log(error);
      }
    }



      const handleSubmitAnswers = async(e) =>{
        e.preventDefault()

        // const sendAnswer = {
        //     answer1: answer1,
        //     answer2: answer2, 
        //     answer3:answer3,
        //     answer4:answer4, 
        //     student_id: getStudentID,
        //     total: totalScore
        // }

        const formData = new FormData()
        formData.append('answer1', answer1);
        formData.append('answer2', answer2);
        formData.append('answer3', answer3);
        formData.append('answer4', answer4);
        formData.append('answer5', finalTranscript);
        formData.append('student_id', getStudentID);
        formData.append('total', totalScore);

        // Append the audio file if it exists
        if (audioChunks.length > 0) {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioFile = new File([audioBlob], "recording.wav", { type: 'audio/wav' });
            formData.append('audio', audioFile);
        }



        try {
            const response = await axios.post('http://127.0.0.1:8000/api/getStudentAnswerFilipinoPosttest',formData);
            console.log(response);
  

        } catch (error) {
            console.error('Error submitting answer:', error);
        }
      }


      const [listening, setListening] = useState(false);
      const [finalTranscript, setFinalTranscript] = useState(""); // Final transcript after speech ends
      const [interimTranscript, setInterimTranscript] = useState(""); // Live transcript while speaking
      const [error, setError] = useState(null);

      const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition1 = new SpeechRecognition();
      recognition1.continuous = true; // Continue listening until explicitly stopped
      recognition1.interimResults = true; // Enable interim results for real-time transcription
      recognition1.lang = "en-US"; // Set the language (you can change this as needed)

      recognition1.onresult = (event) => {
        let interimText = "";
        let finalText = "";
    
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
    
            if (event.results[i].isFinal) {
            finalText += transcript + " ";
            } else {
            interimText += transcript;
            }
        }
    
        setFinalTranscript((prev) => prev + finalText); // Append to final transcript
        setInterimTranscript(interimText); // Update interim transcript in real-time
        };

    recognition1.onerror = (event) => {
        setError("Error occurred in speech recognition: " + event.error);
        setListening(false);
    };

    recognition1.onspeechend = () => stopListening();

    const startListening = () => {
        recognition1.start();
        startRecording(setMediaRecorder, setAudioChunks);
        setListening(true);
        setError(null);
        };
    
        const stopListening = () => {
        recognition1.stop();
        stopRecording(mediaRecorder);
        setListening(false);
        setInterimTranscript(""); // Clear interim transcript when stopping
        };
    
        const resetTranscript = () => {
        setFinalTranscript("");
        setInterimTranscript("");
        };

        const [mediaRecorder, setMediaRecorder] = useState(null);
        const [audioChunks, setAudioChunks] = useState([]);
        const [audioURL, setAudioURL] = useState('');

            // Recording function to reduce redundancy
    const startRecording = (setRecorder, setChunks) => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
            const recorder = new MediaRecorder(stream);
            setRecorder(recorder);
    
            recorder.ondataavailable = (event) => {
                setChunks((prev) => [...prev, event.data]);
            };
    
            recorder.start();
            })
            .catch((error) => {
            console.error("Error accessing microphone:", error);
            });
        };
    
        const stopRecording = (recorder) => {
        if (recorder) {
            recorder.stop();
            recorder.stream.getTracks().forEach((track) => track.stop()); // Stop all tracks
        }
        };
    
        useEffect(() => {
        if (audioChunks.length) {
            const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url);
            console.log("Audio URL:", url);
        }
        }, [audioChunks]);
      

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
            <form onSubmit={handleSubmitAnswers}>
                <div className='mt-3'>
                    <h1>1. Basahin ang sitwasyon at piliin ang tamang sagot na nagpapakita ng magalang na pananalita</h1>
                    <div className='border-2 p-2'>
                        <h1 className='text-justify'>Nais mong pumasok sa learning center ngunit ang iyong guro at ang kanyang kausap ay nasa pintuan. Ano ang iyong sasabihin sa kanila?</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='1' label="A. Tumabi po kayo." value="A" checked={answer1 == "A"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required   />
                        <Radio name='1' label="B. Dadaan po ako. Umalis po kayo." value="B" checked={answer1 == "B"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                        <Radio name='1' label="C. Makikiraan po." value="C" checked={answer1 == "C"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                        <Radio name='1' label="D. Pwede bang dumaan?" value="D" checked={answer1 == "D"} disabled={disableAnswer1} onChange={(e) => setAnswer1(e.target.value)} required  />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>2. Alin sa mga sumusunod na pangungusap ang may tamang bantas?</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='2' label="A. Ang araw ng kalayaan ay ipinagdiriwawng tuwing Hunyo 12?" value="A" checked={answer2 == "A"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                        <Radio name='2' label="B. Dadalo ka ba sa pagpupulong ngayong Huwebes." value="B" checked={answer2 == "B"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                        <Radio name='2' label="C. Naku, may sunog!" value="C" checked={answer2 == "C"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                        <Radio name='2' label='D. "Ang mga bata ay masayang naglalaro."' value="D" checked={answer2 == "D"} disabled={disableAnswer2} onChange={(e) => setAnswer2(e.target.value)} required  />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>3. Basahin ang pangungusap at piliin ang pares ng mga salitang magkasalunugat ang kahulugan.</h1>
                    <div className='border-2 p-2'>
                        <h1 className='text-justify'>Nalulungkot isipin na sa mata ng batas, nakalalamang ang mayamang may pantustos sa mga tagapagtanggol kaysa sa maralitang kahit pangkain ay wala.</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <Radio name='3' label="A. Nakalalamang - Nakalulungkot" value="A" checked={answer3 == "A"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required  />
                        <Radio name='3' label="B. Tagapagtanggol - Batas" value="B" checked={answer3 == "B"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)}  required  />
                        <Radio name='3' label="C. Pantustos - Pangkain" value="C" checked={answer3 == "C"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required  />
                        <Radio name='3' label="D. Mayaman - Maralita" value="D" checked={answer3 == "D"} disabled={disableAnswer3} onChange={(e) => setAnswer3(e.target.value)} required />
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold text-black/70 text-[0.8rem] '>Part II. Pagsulat</h1>
                    <h1 className='font-bold text-black/70 text-[0.8rem]'>Panuto: Basahin ang aytem. Isulat ang sagot sa sagutang papel. </h1>
                </div>
                <div className='mt-3'>
                    <h1>4. Isulat sa patlang ang baybay sa Filipino ng salitang hiran na "computer"</h1>
                    <div className='mt-2'>
                        <Textarea label='Sagot' value={answer4} disabled={disableAnswer4} onChange={(e) => setAnswer4(e.target.value)} required />
                    </div>
                </div>
                <div className='mt-3'>
                    <h1>5. Pakinggan mo ang aking isasalaysay na sitwasyon at sagutin nang malinaw ang kasunod na tanong. (2 points) </h1>
                    <div className='border-2 p-2 flex justify-center items-center'>
                        <audio controls src={question5}></audio>
                    </div>
                    <div className='w-full mt-2'>
                        <Textarea label='Answer' 
                        value={finalTranscript} 
                        disabled
                        required 
                        />
                        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                        {interimTranscript && <p>{interimTranscript}</p>}
                    </div>
                    {audioURL && (
                        <div>
                            <h2>Recorded Audio:</h2>
                            <audio controls src={audioURL}></audio>
                            {/* <a href={audioURL} download="recording.wav">Download Audio</a> */}
                        </div>
                    )}
                    <div className='flex justify-end gap-2'>
                        <Button size='sm' className='bg-black/30' onClick={listening ? stopListening : startListening}>{listening ? "Stop Recording" : "Record your answer"}
                        </Button>
                        <Button size='sm' className='bg-black/30' onClick={resetTranscript}>Reset</Button>
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
