
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='upperdn2'>
    <div className='upperheadbox'><h1 className='upperhead'>PHYSICS ENGINE</h1> </div>
     
      <div className='menubox'>
      <Link to="/feedback" className='mainmenu'>
        Courseoverview
      </Link>
      <Link to="/chapters" className='mainmenu'>
        Content
      </Link>
      <Link to="/dashboard" className='mainmenu'>
        Dashboard
        </Link>
        <Link to="/feedback" className='mainmenu'>
        Feedback
        </Link>
        </div>
</div>
  )
}