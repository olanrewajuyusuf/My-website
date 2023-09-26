import {HiMenuAlt3} from 'react-icons/hi'
import {CgClose} from 'react-icons/cg'
import './header.css'
import { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  }

  return (
    <header>
      <div className="logo-wrap">
        <div className="logo"></div>
        <h1>allew</h1>  
      </div>
        {!menu && <HiMenuAlt3 className='menu' onClick={handleClick} />}
        {menu && <CgClose className='menu' onClick={handleClick} />}
        <nav className='desktop-nav'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        {menu && <nav className='mobile-nav' style={{transform: !menu ? 'translate(-100%)' : 'translate(0)'}}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
    </header>
  )
}

export default Header