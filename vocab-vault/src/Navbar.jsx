import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from './images/vocab-vault-logo.jpeg';


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
  
  <nav className = "nav">
      <a href= "/" className="title"><img src={logo} alt="Logo" height='150px' /></a>
      <ul>
        <li><Link to="/History">History</Link></li>
        <li><Link to="/Materials">Materials</Link></li>
        <li><Link to="/Vocab">Vocab</Link></li>

      </ul>
  </nav>

  )
}





// import './App.css';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Icon } from '@iconify/react';
// import React, { useState } from 'react';

// function Navbar() {

//     const [isOpen, setIsOpen] = useState(false);
//   return (
//         <div>
//     <button onClick={() => setIsOpen(!isOpen)}><Icon icon="heroicons:bars-3" />MENU</button>
//     {isOpen && (
//       <div className='hello'>
//         <p></p><Link to="/History">History</Link>
//         
//          <Link to="/Materials">Materials</Link>
//         
//         <Link to="/Vocab">Vocab</Link>
//       </div>
//     )}
//   </div>
// );
// }

// export default Navbar;

//           
















