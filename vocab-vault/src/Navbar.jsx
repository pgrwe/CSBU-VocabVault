import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  return (
        <div>
    <button onClick={() => setIsOpen(!isOpen)}><Icon icon="heroicons:bars-3" />MENU</button>
    {isOpen && (
      <div className='hello'>
        <p></p><Link to="/home">Home</Link>
        
         <Link to="/blogs">Blogs</Link>
        
        <Link to="/contact">Contact</Link>
      </div>
    )}
  </div>
);
}

export default Navbar;

          












