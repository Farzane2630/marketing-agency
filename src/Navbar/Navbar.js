import React from 'react'
import './Navbar.css'

export default function () {
  return (
    <div>
        <nav>
            <img src='https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png.webp' alt='logo'></img>
            <ul className='nav-items'>
                <li><a href="#home"> Home </a></li>
                <li><a href="#about"> About </a></li>
                <li><a href="#services"> Services </a></li>
                <li><a href="#case-study"> Case Study </a></li>
                <li><a href="#blog"> Blog + </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
            <div className='phone'>
                <p> Call Us: +10 (78) 378 3784 </p>
            </div>
            <button className='talk but-color'> Let`s Talk </button>
        </nav>
    </div>
  )
}
