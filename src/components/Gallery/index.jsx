import SGallery from './style';
import React, { useState } from 'react';
import bg1 from '../pictures/pictos/northface.jpeg';
import Style from './style';
//import Card from '../Card';

export default function Gallery() {
  return (
    <SGallery>
      <img src={bg1} className='bg_1' />
      <div className='title'>
        <p>En phase avec les éléments.</p>
        <div className='div_button'>Vestes impermeables Homme</div>
        <div className='div_button'>Vestes impermeables Femme</div>
      </div>
    </SGallery>
  );
}
