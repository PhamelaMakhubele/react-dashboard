import React from 'react'
//import Button from './Button'
//import { useState } from 'react'
import RateForm from './RateForm'


const Answer = ({item, onRate}) => {

  return (
    <div className='questionnaire_container'>
      <div className='question box'>
      <p>{item.question}</p>
    </div>
    <RateForm />
    
 
    
   </div>

 
  )
}

export default Answer