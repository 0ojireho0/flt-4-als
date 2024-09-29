import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


export default function AlsStudent() {

  const navigate = useNavigate(); 

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    if(user.role !== "ALS Student"){
      navigate('/sign-in'); 
    }
    
  })


  return (
    <div>
      this is als student
    </div>
  )
}
