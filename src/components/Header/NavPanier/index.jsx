import SHeader from './style';

function NavPanier({ open }) {
  if (!open) {
    return null;
  }

  return (
    <SHeader>
      <>
        <ul className='panier__menu'>
          <li className='panier'>Votre panier est vide</li>
          <li className='vlp'>Voir le panier</li>
        </ul>
      </>
    </SHeader>
  );
}

export default NavPanier;
