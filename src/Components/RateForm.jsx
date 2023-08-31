import React, { useState } from 'react'


//import Button from './Button'
//import Button from './Button'


const RateForm = ({item}) => {
    
    const [rating, setRating] =useState('')

  return (
    <form id='myForm'  action="POST"  >
     <table>
     <thead>
       <tr>
          <th></th>
          <th>Agree</th>
          <th>Neutral</th>
          <th>Disagree</th>
           
         </tr>
     </thead>
   
         <tbody>
          <tr>
          <th className='question box'>
            
            <p>{item.question}</p>
          </th>
    
       <td><input type="radio" name='rating'  value='agree'  checked={rating==='agree'} onChange={(e) => setRating(e.target.value)} className="radioBtn"/></td>
       <td><input type="radio" name='rating'  value='neutral' checked={rating==='neutral'} onChange={(e) => setRating(e.target.value)} className="radioBtn"/></td>
       <td><input type="radio" name='rating'  value='disagree' checked={rating==='disagree'} onChange={(e) => setRating(e.target.value)} className="radioBtn"/></td>
       
       </tr>
         
        </tbody>
        

     </table>
     
    
     

   </form>
  )
}

export default RateForm


