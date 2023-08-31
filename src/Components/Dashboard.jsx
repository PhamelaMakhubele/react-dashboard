//import React, { useState } from 'react'

import { useState, useEffect } from "react";

const Dashboard = ({rate, questionnaires}) => {
  const [dashboard, setDashboard] = useState([])

  
  /*useEffect(() =>{
    fetch('http://localhost:5000/questionnaires',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      },
    
    })
    .then(res=> res.json())
    .then(dashboard =>{
      setDashboard(dashboard);
    })
    .catch(error =>{
      alert(error)
    })
  },[])*/


  useEffect(() =>{
    fetch('http://localhost:5000/dashboard',{
      method:'GET',
      headers:{
        "Content-Type":"application/json"
      },
    
    })
    .then(res=> res.json())
    .then(dashboard =>{
      setDashboard(dashboard);
    })
    .catch(error =>{
      alert(error)
    })
  },[])
  
    
  

 const tot = dashboard.map(function(rate){
  return dashboard.rate
 })
 console.log(tot)

 const filtered = dashboard.filter(dashboard => dashboard.rate === 'agree')
 .map(dashboard => dashboard.rate)


const disagreement =dashboard.filter(dashboard=> dashboard.rate ==='disagree')
.map((dashboard => dashboard.rate))


const neutral = dashboard.filter(dashboard => dashboard.rate ==='neutral')
.map((dashboard=> dashboard.rate))





 
 
 
  
  return (
    <div className='Container'>
      <h1>Dashboard</h1>

      <div className="dashboard">
        
        <div className="question box2"  >
          <div>
          <p>Number of questions</p>
          <h2>{tot.length}</h2>
          </div>
        </div>
        <div className="question box2">
          
          <div>
          <p>Agreements</p>
          <h2>{filtered.length}</h2>
          </div>
        </div>
      </div>

      <div className="dashboard">
        <div className="question box2">
          <div>
          <p>Neutral</p>
          <h2>{neutral.length}</h2>
          </div>
          
        </div>

        <div className="question box2">
          <div >
          <p>Disagreement</p>
           <h2>{disagreement.length}</h2>
          </div>
            
        </div>

       
      </div>
 

      

     


    </div>
  )
}

export default Dashboard

