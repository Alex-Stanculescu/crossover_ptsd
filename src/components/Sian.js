import React from 'react';
import c_beans from './sians_images/c_beans.PNG';
//import coffee_bg from './sians_images/coffee_bg.PNG';
import './sian.css';

export default function Sian() {
  return (
    <div className='body_sian'>
      
    <div className='img_body'><img className="beans_hand"src={c_beans} alt="coffee beans" /> </div>
    
    <div className='finest'>
      <h1 className='header_cbeans'>With the fiest selection of coffe bean</h1> <br />
      <p className='finest-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed euismod do eiusmod temport incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      </div>
    
    </div>
    
    
  )
}
