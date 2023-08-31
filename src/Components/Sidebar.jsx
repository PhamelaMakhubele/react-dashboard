import React from 'react'
import { Link } from 'react-router-dom'
import {FaCode} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import {BsQuestionSquare} from 'react-icons/bs'
import {AiOutlineFileAdd} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div>
      
        <nav>
          <FaCode className='Logo'/>

        
            <ul>
                <li><Link to='/'><AiOutlineHome className='SideBar__Icons'/><span className='Icon__Label'>Home</span></Link></li>
                <li><Link to="/Create"><AiOutlineFileAdd className='SideBar__Icons'/><span  className='Icon__Label'>Create</span></Link></li>
                <li><Link to="/Questionnaire"><BsQuestionSquare className='SideBar__Icons'/><span  className='Icon__Label'>Questionnaire</span></Link></li>
                <li><Link to="/DashBoard"><RxDashboard className='SideBar__Icons'/><span  className='Icon__Label'>Dashboard</span></Link></li>
                
              
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar