import React, { useState } from 'react';
import logo from '../fotos/logocomplete.png';
import menu from '../fotos/menu.svg';


const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
 
  const switchMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
        <nav className='bg-gray-800 py-4 relative w-full'>
          <div className='w-full flex px-8 xl:px-0'>
           <div className='flex flex-grow'>
             <img className='w-44 h-auto' src={logo} alt='Logo AlFeSoft' />     
           </div> 
            <div className='flex lg:hidden'>
              <img className='w-8 h-8' src={menu} alt="menu"  onClick={switchMenu}/>
            </div>
            <div id='menu' className={`lg:flex flex-grow ${menuVisible ? 'flex' : 'hidden'} flex-col lg:flex-row`}>
              <a href="#services" className="hover:underline text-white lg:mr-7">Servicios</a>
              <a href="#portfolio" className="hover:underline  text-white lg:mr-7">Portafolio</a>
              <a href="#contact" className="hover:underline  text-white lg:mr-7">Contacto</a>
            </div>
          </div>
        </nav>
  );
};


export default Header;
