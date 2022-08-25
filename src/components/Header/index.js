import React from 'react';
import './Header.css';



const Header = () => {
  return (
    <div className='wrapper-header'>
       <div className=' top-header'> 
         <ul className='ul1'>
            <li>
                <img src='./image/telephone-handle-silhouette.png' width='15px' height='15px' alt='tel'/> (+237) 697 54 22 40
            </li>
            <li>
                <img src='./image/email.png' width='15px' height='15px' alt='mail'/> contact@enspd-udo.cm
            </li>
         </ul>
         <ul className='ul2'>
            <li><a href='#ddf'><img src='./image/facebook.png' alt='fac'/></a></li>
            <li><a href='#sdd'><img src='./image/twitter.png' alt='twi'/></a></li>
            <li><a href='#sd'><img src='./image/google-plus.png' alt='goo'/></a></li>
            <li><a href='#sdf'><img src='./image/instagram.png' alt='inst'/></a></li>
            <li><a href='#dffsd'><img src='./image/linkedin.png' alt='link'/></a></li>
         </ul>
       </div>
       <nav className='nav-bar'>
          <img src='./image/android-chrome-192x192.png'   alt='logo'/>
       </nav>
    </div>
  )
}

export default Header ;