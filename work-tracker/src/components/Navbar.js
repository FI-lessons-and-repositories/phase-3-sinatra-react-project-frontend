import React from 'react'
import {Link} from 'react-router-dom'
import Assignments from './assignment/Assignments'

function Navbar() {
  return (
    <div className='nav'>
       <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='navbar-nav'>
                <Link className='nav-link' to='/work'>WorkAssigning</Link>
            </li>

        </ul>
    </div>
  )
}

export default Navbar
