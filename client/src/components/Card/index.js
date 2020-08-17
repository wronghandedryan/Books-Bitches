/*jshint ignore:start */
import React from 'react';
import Bootstrap from 'bootstrap';

function Card({ icon, title, children }) {
  return (
    <div className='card bg-dark'>
      <div className='card-header'>
      </div>
      <div className='card-body'>{children}</div>
    </div>
  );
}

export default Card;
