import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Create = ({onAdd}) => {
    const [question, setQuestion] = useState('')
    const navigate= useNavigate()

  

    const onSubmit= (e) =>{
        e.preventDefault()

        if (!question){
            alert('Please fill out the empty field')
            return;
        }
          const onAdd={question}

          fetch("http://localhost:5000/questionnaires",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(onAdd)
          }).then((res)=>{
            alert('Saved successfully.')
            navigate('/')
            
            
          }).catch((err)=>{
            console.log(err.message)
          })

        setQuestion('')
            

    }
  return (
    <div className='Container'>
        <h1 className='Heading'>Creating a Questionnaire</h1>

        <form action='' onSubmit={onSubmit} >

            <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)} 
                className='question'
                
            />
            <Button/>
        
        </form>
        

    </div>
  )
}


export default Create