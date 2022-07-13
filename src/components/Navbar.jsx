import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import avatar from '../assets/avatar.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={avatar} alt="avatar" style={{width: '150px'}} class="absolute left-6 top-7" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
