import React from 'react';

export default function MoviePoster(props) {
  return (
    <div className='moviePoster'>
      {
        props.imageSource === 'N/A' ? 'No poster found...' : <img src={props.imageSource} alt={props.movieTitle} />
      }
      <div>
        <button>Add to wishlist</button>
      </div>
    </div>
  );
}
