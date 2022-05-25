import React from 'react';

export default function WishList(props) {

    const closePanel = (e) => {
        if (e.target.className === 'backdrop') {
            props.showTheBox();
        }
    }

  return (
    <div className='backdrop' onClick={closePanel}>
         <div className='wishListPanel'>
                wishlist
         </div>
    </div>
  );
}
