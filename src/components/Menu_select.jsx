import React from 'react';
import '../assets/styles/Menu_select.css';
import { Link } from 'react-router-dom';

const Menu_select = ({menuItems}) => {


  return (
    <div className="Menu-select-box">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={item.isHeader ? 'menu-header' : 'menu-item'}
            >
            <Link to={`?${item.title}`}>
             {item.title} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu_select;
