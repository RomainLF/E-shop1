import SGallery from './style';
import React, { useState } from 'react';
import bg1 from '../pictures/pictos/northface.jpeg';
import Style from './style';
//import Card from '../Card';

export default function Gallery() {
  return (
    <SGallery>
      <div className='main'>
        <img src={bg1} className='bg_1' alt='background_mobile' />
        <div className='title'>
          <p>En phase avec les éléments.</p>
        </div>
        <div className='main_category'>
          <div className='div_button'>Vestes impermeables Homme</div>
          <div className='div_button'>Vestes impermeables Femme</div>
        </div>
      </div>
    </SGallery>
  );
}
