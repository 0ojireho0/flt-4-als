import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Teacher() {

  const navigate = useNavigate(); 

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    if(!user){
      navigate('/sign-in'); 
    }else if (user.role !== "Teacher for ALS"){
      navigate('/sign-in')
    }
    
})



  return (
    <div>
      this is teacher
    </div>
  )
}
