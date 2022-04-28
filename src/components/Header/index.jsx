import SHeader from './style.jsx';
import React, { useState } from 'react';
import img from '../pictures/pictos/ProfilBlanc.png';
import img2 from '../pictures/pictos/PanierBlanc.png';
import imgcoeur from '../pictures/pictos/coeur.png';
import imgplace from '../pictures/pictos/emplacement.png';
import imgglobe from '../pictures/pictos/globe.png';
import imgloupe from '../pictures/pictos/loupe.png';
import NavPanier from './NavPanier/index.jsx';
import NavSearch from './NavSearch/index.jsx';

export default function Header() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    //Icon
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };

  //Click sur panier
  const [isOpen, setIsOpen] = useState();
  //Click sur loupe
  const [isOpenSearch, setIsOpenSearch] = useState();

  return (
    <SHeader>
      <nav className='nav'>
        <div onClick={navToggle} className={icon}>
          <div className='line1'></div>
          <div className='line3'></div>
        </div>
        <a href='#' className='nav__brand'>
          {' '}
          Ralph Lauren
        </a>
        <ul className={active}>
          <li className='connect'>
            <img src={img} className='picto2' alt='img' />
            <a href='#' className='sc1'>
              Se connecter
            </a>
          </li>
          <li className='homme'>
            <a href='#'>Hommes</a>
          </li>
          <li className='femmes'>
            <a href='#'>Femmes</a>
          </li>
          <li className='enfants'>
            <a href='#'>Enfants</a>
          </li>
          <li className='maison'>
            <a href='#'>La maison</a>
          </li>
          <li className='cadeaux'>
            <a href='#'>Cadeaux</a>
          </li>
          <li className='wor'>
            <a href='#'>World of rl</a>
          </li>
          <li className='services'>
            <a href='#'>Services</a>
          </li>
          <div className='footerNav'>
            <li className='preferes bleu'>
              <a href='#'>
                <img src={imgcoeur} alt='imgcoeur' />
                Préférés
              </a>
            </li>
            <li className='magasins bleu'>
              <a href='#'>
                <img src={imgplace} alt='imgplace' />
                Magasins
              </a>
            </li>
            <li className='fr bleu'>
              <a href='#'>
                <img src={imgglobe} alt='imgglobe' />
                FR Français
              </a>
            </li>
          </div>
        </ul>
        <section className='header_icons'>
          <div
            className='Loupe__picto'
            onClick={() => {
              setIsOpenSearch(!isOpenSearch);
            }}
          >
            <img src={imgloupe} alt='imgloupe' className='correction' />
            <NavSearch openSearch={isOpenSearch} />
          </div>

          <div className='compte__picto'>
            <img src={img} alt='img' className='picto' />
          </div>

          <div
            className='Panier__picto'
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={img2} alt='img2' className='picto' />
            <NavPanier open={isOpen} />
          </div>
        </section>
      </nav>
    </SHeader>
  );
}
