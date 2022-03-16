import React from 'react';

function MenuItem({ image, name, slogan }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {slogan} </p>
    </div>
  );
}

export default MenuItem;
