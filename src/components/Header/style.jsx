import styled from 'styled-components';

export default styled.header`
  margin: O;
  box-sizing: border-box;

  *, *::after, *::before {
    margin: 0;
    box-sizing: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  li {
    list-style: none;
    a{
      font-size: 11px;
      text-transform: uppercase;
    }
  }
  li:first-child{
    display: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8.5vh;
    padding-left: 1rem;
    padding-right: 1rem;
    background: white;
    z-index: 99;
  }
  .nav__brand {
    text-transform: uppercase;
    font-size: 1.8rem;
  }
  .nav__menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
    z-index: 2;
  }
  .nav__toggler{
    display: none;
  }
  .nav__toggler div {
    width: 1.4rem;
    height: 0.07rem;
    margin: 0.3rem;
    background: #6b6a6a;
    transition: 0.1s ease-in;
  }
  .header_icons{
    display: flex;
    .loupe{
      width: 35%;
    }
    }
  }
  .picto {
    margin: 0.5vw;
    width: 40%;
  }
  /*sc1 correspond au text de "se connecter" dans la navbar*/ 
  .sc1{ 
    margin-left: -0.5rem;
    font-size: 15px;
  }
  /* Effet text dans la nav bar burger */
  .connect{
    display: flex;
    background-color: #eaecf3;
    height: 7vh;
  }
  .homme a, .femmes a, .enfants a, .maison a, .cadeaux a, .wor a, .services a, .preferes a, .magasins a, .fr a{
    transform: translateX(-270%);
  }
  .nav__active .homme a{
    transform: translateX(0%);
    transition: 0.3s ease-in;
  }
  .nav__active .femmes a{
    transform: translateX(0%);
    transition: 0.4s ease-in;
  }
  .nav__active .enfants a{
    transform: translateX(0%);
    transition: 0.5s ease-in;
  }
  .nav__active .maison a{
    transform: translateX(0%);
    transition: 0.6s ease-in;
  }
  .nav__active .cadeaux a{
    transform: translateX(0%);
    transition: 0.7s ease-in;
  }
  .nav__active .wor a{
    transform: translateX(0%);
    transition: 0.8s ease-in;
  }
  .nav__active .services a{
    transform: translateX(0%);
    transition: 0.9s ease-in;
  }
  .nav__active .preferes a {
    transform: translateX(0%);
    transition: 1s ease-in;
  }
  .nav__active .magasins a{
    transform: translateX(0%);
    transition: 1.1s ease-in;
  }
  .nav__active .fr a {
    transform: translateX(0%);
    transition: 1.2s ease-in;
  }
 //Config du click sur panier//
  .panier__menu {
    position: fixed;
    z-index: 2;
    top: 9.5vh;
    right: 0;
    height: 40vh;
    width: 20vw;
    background: white;
    flex-direction: column;
    transform: translateX(-3%);
    transition: 0.2s ease-in;
    justify-content: start;
    border: 0.15rem solid #6b6a6a;
    box-sizing: border-box;
    border-radius: 1rem;
    overflow: hidden;
    .vlp{
      background-color: #ece9e9;
      height: 4vh;
      width: 100%;
      margin-top: 28vh;
      display: flex;
      justify-content: center;
      font-size: 10px;
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
    }
  }
  .panier__active {
    transform: translateX(100%);
  }
  .panier {
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 38px;
  }
  .bleu{
    display: none;
  }
  //Config du click sur la loupe//
  .loupe__menu{
    position: fixed;
    top: 8.5vh;
    right: 0;
    height: 33vh;
    width: 100vw;
    background: #ffffff;
    flex-direction: column;
    transform: translateY(0%);
    transition: 0.1s ease-in;
    justify-content: center;
    z-index: 0;

    .fullSearch {
      background-color: white;
      height: 8vh;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      input{
        height: 5vh;
        width: 50vw;
        border: none;
        border-bottom: 2px solid #939eaa;
        text-align: center;
        ::placeholder {
          font-size: 1.5em;
          color: #939eaa;
          text-align: center;
          }
        }
      }
      .loupe__category{
        margin-top: 0.5vh;
        background-color: white;
        ul{
          display: felx;
          flex-direction: row;
          justify-content: center;
          margin-left: 0;
          li {
            width: 8vw;
            height: 5vh;
            margin: 1vw;
            background-color: #ece9e9;
            font-size: 12px;
            color: #092858;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 25px;
            :first-child {
              background-color: #092858;
              color: white;
              display: flex;
              justify-content: center;
              border-radius: 25px;
            }
          }
        }
      }
      .searchSuggestion{
        background-color: white;
        display: flex;
        justify-content: center;
        margin-top: 3vh;
        ul{
          display: flex;
          align-items: center;
          flex-direction: row;
          li {
            font-size: 14px;
            margin: 7px;
            margin-left: 15px;
            color: #092858;
            display: flex;
            :first-child{
              text-transform: uppercase;
              display: flex;
              color: #092858;
              font-size: 16px;
            }
            img{
              width: 10%;
              height: 100%;
              padding-right: 1vw;
            }
          }
        }
      }
    }
  .loupe__active{
    transform: translateY(-190%);
  }

  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */
  /* ---------MOBILE VERSION-------- */



@media screen and (max-width: 768px){
  .nav__brand{
    margin-right: -55px;
  }
  .nav__toggler {
    display: block;
    cursor: pointer;
  }
  .nav__menu {
    position: fixed;
    top: 8.5vh;
    left: 0;
    height: 92vh;
    width: 50vw;
    background: white;
    flex-direction: column;
    transform: translateX(-100%);
    transition: 0.2s ease-in;
    justify-content: start;
    gap:1rem;
  }
  .loupe__menu{
    z-index: 2;
    top: 1§vh;
    .fullSearch{
      input{
        width: 80vw;
      }
    }
    .loupe__category{
      ul{
        li{
          width: 14vw;
          height: 5vh;
        }
      }
    }
    .searchSuggestion{
      justify-content: flex-start;
    ul{
      display: flex;
      flex-direction: column;
      li{
        img{
          width: 5%;
          height: 50%;
        }
      }
    }
  }
  }
  .panier__menu {
    height: 40vh;
    width: 45vw;
    top: 10vh;
  }
  ul{
    margin: 0;
  }
  .panier{
    margin: -10px;
    font-size: 12px;
  }
  li {
    height: 5vh;
    width: 50vw;
    display: flex;
    align-items: center;
  }
  li:first-child{
    display: flex;
  }
  a {
    margin-left: 1rem;
    text-transform: uppercase;
    font-size: 13px;
    color: #363a4e;
  }
  .picto a{
    margin: 1vw;
    width: 40%;
  }
  .picto { width: 35%; margin: 0.1vw;}
  .picto2{
    width: 5%;
    margin: 2.3vw;
  }
  .bleu {
    display: flex;
    background-color: #041E3A;
  }
  .nav__active {
    transform: translateX(0%);
  }
  .toggle .line1 {
    transform: rotate(-45deg) translate(-2px, 2.5px);
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-2px, -2.5px);
  }
  .footerNav{
    height: 15rem;
    background-color: #041E3A;
    li {
      margin-top: 0.5rem;
      a{
        margin-left: 1rem;
        font-size:12px;
        color: #d9dff1;
        text-transform: none;
        img{
          margin-right: 0.5rem;
          margin-bottom: -0.4rem;
        }
      }
    }
  }
  .compte{
    display: none;
  }
}
`
