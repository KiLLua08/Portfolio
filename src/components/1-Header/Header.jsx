// @ts-nocheck
import './Header.css'
import { useState } from 'react';
import minu from '../../assets/more.png';
import out from '../../assets/icons/no.png';
import moonlight from '../../assets/icons/day-and-night.png';

const Header = () => {
  const [show, setShow] = useState(false);
  
  const showMenu = () => {
    setShow(true);
  }
  const HideMenu = () => {
    setShow(false);
  }
  return (
    <header className='flex'>
      <div></div>
      <button id='btn' onClick={showMenu} className='show-menu'><img src={minu} alt="menu" width={30} /></button>
      <nav>
        <ul className=''>
          <ul className='flex'>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </ul>
      </nav>
      <button className='border' onClick={()=>{}}><i className='icon'><img src={moonlight} alt="dan" width={60} /></i></button>
      {show && (
              <menu className='fixed'>
                <button className='x' onClick={HideMenu}><img src={out} alt='out' width={60}></img></button>
                <ul className='model border'>
                  <li><a href="">About</a></li>
                  <li><a href="">Articles</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">Speaking</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </menu>
      )}
    </header>
  )
}

export default Header
