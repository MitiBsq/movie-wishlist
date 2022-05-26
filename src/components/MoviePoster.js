import React from 'react';

export default function MoviePoster({ movieData, update }) {
  //Event function for ADD-button (adding a new movie to the wishlist using cookies)
  const addToWishList = () => {
    const transformCookie = document.cookie.split('=')[1];
    if (transformCookie !== undefined) {
      const newCookie = [movieData.Title, transformCookie];
      document.cookie = `wishlist = ${newCookie}`;
    } else {
      const newCookie = [movieData.Title];
      document.cookie = `wishlist = ${newCookie}`;
    }
    update();
  }

  return (
    <div className='moviePoster'>
      {
        movieData.Poster === 'N/A' ? 'No poster found...' : <img src={movieData.Poster} alt={movieData.Title} />
      }
      <div>
        <button onClick={addToWishList} className='addToButton'>Add to wishlist</button>
      </div>
    </div>
  );
}