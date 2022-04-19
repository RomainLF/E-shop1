import SHeader from './style.jsx';
import React, { useState } from "react";
import img from '../pictures/pictos/ProfilBlanc.png';
import img2 from '../pictures/pictos/PanierBlanc.png';
import imgcoeur from '../pictures/pictos/coeur.png'
import imgplace from '../pictures/pictos/emplacement.png'
import imgglobe from '../pictures/pictos/globe.png'
import imgloupe from '../pictures/pictos/loupe.png'


export default function Header() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if(active === "nav__menu") {
            setActive("nav__menu nav__active");
        }else setActive("nav__menu");
    
    //Icon
    if(icon === "nav__toggler") {
        setIcon("nav__toggler toggle")
    }else setIcon("nav__toggler");
    };

    //Click sur panier
    const[actival, setAcival] = useState("panier__menu");
    const panierToggle = () => {
        if(actival === "panier__menu"){
            setAcival("panier__menu panier__active");
        }else setAcival("panier__menu");
    }
    //click sur Loupe 
    const[activat, setActivat] = useState("loupe__menu");
    const loupeToggle = () => {
        if(activat === "loupe__menu"){
            setActivat("loupe__menu loupe__active");
        }else setActivat("loupe__menu");
    }

    return (
        <SHeader>
            <nav className='nav'>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line3"></div>
                </div>
                <a href='#' className='nav__brand'> Ralph Lauren
                </a>
                <ul className={active}>
                    <li className='connect'>
                        <img src={img} className='picto2'/>
                        <a href='#' className='sc1'>Se connecter</a>
                    </li>
                    <li className='homme'>
                        <a href='#'>
                            Hommes
                        </a>
                    </li>
                    <li className='femmes'>
                        <a href='#'>
                            Femmes
                        </a>
                    </li>
                    <li className='enfants'>
                        <a href='#'>
                            Enfants
                        </a>
                    </li>
                    <li className='maison'>
                        <a href='#'>
                            La maison
                        </a>
                    </li>
                    <li className='cadeaux'>
                        <a href='#'>
                            Cadeaux
                        </a>
                    </li>
                    <li className='wor'>
                        <a href='#'>
                            World of rl
                        </a>
                    </li>
                    <li className='services'>
                        <a href='#'>
                            Services
                        </a>
                    </li>
                    <div className='footerNav'>
                    <li className='preferes bleu'>
                        <a href='#'>
                            <img src={imgcoeur}/>
                        Préférés
                        </a>
                    </li>
                    <li className='magasins bleu'>
                        <a href='#'>
                            <img src={imgplace}/>
                        Magasins
                        </a>
                    </li>
                    <li className='fr bleu'>
                        <a href='#'>
                            <img src={imgglobe}/>
                        FR Français
                        </a>
                    </li>
                    </div>
                </ul>
                <div className='header_icons'>

                    <div>
                        <a href='#' onClick={loupeToggle}>
                        <img src={imgloupe} className='picto loupe'/>
                        </a>
                            <div className={activat}>
                                <div className='fullSearch'>
                                    <input className='form__label' type='text' placeholder='Rechercher'></input>
                                </div>
                                <div className='loupe__category'>
                                    <ul>
                                        <li>Voir tout</li>
                                        <li>Hommes</li>
                                        <li>femmes</li>
                                        <li>Enfants</li>
                                        <li>La Maison</li>
                                    </ul>
                                </div>
                                <div className='searchSuggestion'>
                                    <ul>
                                        <li>Recherches populaires :</li>
                                        <li><img src={imgloupe}/>Boutique Polo Bear</li>
                                        <li><img src={imgloupe}/>Robes</li>
                                        <li><img src={imgloupe}/>Vestes & Manteaux</li>
                                    </ul>
                                </div>
                            </div>
                        
                    </div>

                    <div className='compte'>
                        <a href='#'>
                            <img src={img} className='picto'/>
                        </a>
                    </div>

                    <div onClick={panierToggle}>
                        <a href='#'>
                            <img src={img2} className='picto'/>
                            <ul className={actival}>
                                <li></li>
                                <li className='panier'>Votre panier est vide</li>
                                <li className='vlp'>Voir le panier</li>
                            </ul>
                        </a>
                    </div>
                </div>
            </nav>
        </SHeader>
    );
}