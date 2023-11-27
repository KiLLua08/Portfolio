import './Header.css'
// @ts-ignore
import minu from '../../assets/more.png';
import { useState } from 'react';

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
      <button id='btn' onClick={showMenu} className='show-menu'><img src={minu} alt="menu" width={40} height={40} /></button>
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
      <button className='border'>
        light
      </button>
      {show && (
              <menu className='fixed'>
                <button className='x' onClick={HideMenu}>X</button>
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
