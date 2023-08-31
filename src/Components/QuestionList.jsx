import React from 'react'
import {BiEditAlt} from 'react-icons/bi'
//import {FaTimes} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md'
import { Link } from 'react-router-dom'


const QuestionList = ({questionnaire, onDelete}) => {
  
  return (
    <div style={{display:'flex'}}  >
        
        <div className='question box' style={{borderRadius:'0'}}>
          <p>{questionnaire.question}</p>
        
        </div>
        <div className='question box' style={{width:'120px', borderRadius:'0'}}>
        <Link to={`/Edit/${questionnaire.id}`}><BiEditAlt /></Link><br></br>
            <MdDeleteOutline onClick={(e) =>onDelete(questionnaire.id)} />
        </div>
        
        
        



    </div>
  )
}

export default QuestionList