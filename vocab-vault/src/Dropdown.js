import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}><Icon icon="heroicons:bars-3" /></button>
      {isOpen && (
        <div>
          <p>History</p>
          <p>Progress</p>
          <p>Vocab Vault</p>
          <p>Material</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;



