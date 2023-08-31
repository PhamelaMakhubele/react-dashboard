import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Edit = ({text}) => {
    const {id} = useParams()
    const [questionnaires, setQuestionnaires] =useState({
        id: '',
        question: ''
        
      })
      const navigate= useNavigate();

      useEffect(() => {
        axios.get(`http://localhost:5000/questionnaires/${id}`)
          .then((res) => setQuestionnaires(res.data)) 
          .catch((err) => {
            console.log(err.message);
          });
      }, [id]);
      

      const onEdit = async (e) =>{
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:5000/questionnaires/${id}`, questionnaires);
            
            if (response.status === 200) {
              questionnaires()
              alert('Questionnaire updated successfully')
              navigate('/');
            } else {
              alert('Failed to update questionnaire');
            }
          } catch (error) {
            console.error('Error updating questionnaire:', error);
          }
  
          setQuestionnaires({
            id: '',
            question: ''
    
          });
          

        
      }
  return (
    <div className='Container'>
        <h1>Edit a questionnaire</h1>
        <form onSubmit={onEdit}>
        <input 
                type="text" 
                value={questionnaires.question}
                onChange={(e) => setQuestionnaires({...questionnaires,question:e.target.value})} 
                className='question'
                
            />
            <Button text={"Edit"}  />


        </form>

    </div>
  )
}

export default Edit