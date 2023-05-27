export default function Navbar() {
  return <nav className = "nav">
      <a href= "/" className="title"> VocabVault </a>
      <ul>
        <li><a href="/History"></a>History</li>
        <li><a href="/Materials"></a>Materials</li>
        <li><a href="/Vocab"></a>Vocab</li>

      </ul>
  </nav>

  
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
















