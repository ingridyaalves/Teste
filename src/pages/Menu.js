import React from 'react';
import { MenuList } from '../helpers/MenusList';
import MenuItem from '../Components/MenuItem';
import '../Styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">CERVEJAS</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              slogan={menuItem.slogan}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
