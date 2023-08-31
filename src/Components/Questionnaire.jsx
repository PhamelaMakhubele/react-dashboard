import React from 'react'
import { useState, useEffect } from 'react' 
import Button from './Button'
//import Answer from './Answer'

import RateForm from './RateForm'


const Questionnaire = ({questionnaire, text, onRate}) => {
  
  const [questionnaires,setQuestionnaires] = useState([])
  const [rating, setRating] =useState('')


  const handleSubmit = async() => {
    
    const onRate={rating}

    await fetch("http://localhost:5000/dashboard",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(onRate)
    }).then((res)=>{
      alert('Saved successfully.')
 
    
    }).catch((err)=>{
      console.log(err.message)
    })

    setRating('')
  
  };
  

  
  useEffect(() =>{
    fetch('http://localhost:5000/questionnaires',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      },
    
    })
    .then(res=> res.json())
    .then(questionnaires =>{
      setQuestionnaires(questionnaires);
    })
    .catch(error =>{
      alert(error)
    })
  },[])


  
  return (
  

<div className=' Container' >
  <h1>Questionnaire</h1>
  <div>
  {questionnaires.map((item, id) =>(
      <RateForm item={item} key={id}/>
    ))}
  
<Button text={'Submit'} onClick={handleSubmit}/>
  </div>
 
  
 
    

</div>
   
   
  )
}

export default Questionnaire