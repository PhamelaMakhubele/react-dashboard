import React from 'react'
import QuestionList from './QuestionList'
//import { Link } from 'react-router-dom'
//import {BiEditAlt} from 'react-icons/bi'
//import { FaTimes } from 'react-icons/fa'


const Questionnaires = ({questionnaires, onDelete}) => {
    
  return (
    <div className='Container '>
      <h1 className='Heading'>List of Questions</h1>
      <div className='que__container'>
      {questionnaires.map((questionnaire, id)=>
        <QuestionList key={id} questionnaire={questionnaire} onDelete={onDelete} />
        )}
      </div>
        

    </div>

  
  )
}

export default Questionnaires