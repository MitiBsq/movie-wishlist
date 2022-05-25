import React from 'react';

export default function Header(props) {

  return (
    <div className='header'>
      <h3>WishList by Dumitru Beschiu</h3>
      <div className='wishListPlace'>
        <button onClick={props.showTheBox}>Wishlist</button>
      </div>
    </div>
  );
}
