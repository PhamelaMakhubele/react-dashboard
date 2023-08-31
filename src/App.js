import React from 'react'
import Create from './Components/Create'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from './Components/Dashboard'
import Questionnaire from './Components/Questionnaire'
//import QuestionList from './Components/QuestionList'
import Questionnaires from './Components/Questionnaires'
import Edit from './Components/Edit'


const App = () => {
  const [questionnaires, setQuestionnaires] = useState('')
  const [rating, setRating] =useState('')

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


  useEffect(() =>{
    fetch('http://localhost:5000/dashboard',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      },
    
    })
    .then(res=> res.json())
    .then(rating =>{
      setRating(rating);
    })
    .catch(error =>{
      alert(error)
    })
  },[])



  
  const deleteQuestionnaire = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this questionnaire?');
    
    if (confirmDelete){

      const res = await fetch(`http://localhost:5000/questionnaires/${id}`, {
      method: 'DELETE',
    })
  
    res.status === 200
      ? setQuestionnaires(questionnaires.filter((questionnaire) => questionnaire.id !== id))
      : alert('Error Deleting This Questionnaire')
  }
    }

 
  return (
    <div className='Container'>
      <Router>
        <Sidebar/>
      
       <Routes> 
       <Route
        path='/'
        element={
      <div className='Home__Container'>
        <Create  />
        
     

        {questionnaires.length > 0 ?(

        <Questionnaires 
          questionnaires={questionnaires}
          onDelete={deleteQuestionnaire}
        
        />

      ):(
      <h2>No questionnaires to show</h2>
      )}
      </div>

        }
      
      />
   
    
          <Route path='/Create' element={<Create  />}/>
          <Route path='/Dashboard' element={ <Dashboard rating={rating}/>}/>
          <Route path='/Questionnaire' element={<Questionnaire/>}/>
          <Route path='/Edit/:id' element={<Edit/>}/>
          
          
        </Routes>
        
        
        

      </Router>
      
     
      
    </div>
  )
}

export default App