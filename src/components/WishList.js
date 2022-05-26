import React, { useState } from 'react';

export default function WishList(props) {
  //We use it to display the details of a movie (conditional)
  const [showDetails, setShowDetails] = useState(false);
  //We use it to store data from the API call
  const [details, setDetails] = useState({});

  //Fetching data
  const showDropMenu = async (whaToShow) => {
    if (details.Title === undefined || whaToShow !== details.Title) {
      try {
        setShowDetails(true);
        const apikey = `t=${whaToShow}`
        const getData = await fetch(`http://www.omdbapi.com/?${apikey}&apikey=d3e38038`);
        const getDataJson = await getData.json();
        setDetails({ ...getDataJson });
      } catch (error) {
        console.error(error.message);
      }
    } else {
      setShowDetails(false);
      setDetails({});
    }
  }

  //Event function for deleting a movie from the wishlist and cookie-storage
  const deleteFromWish = (whatToDelete) => {
    if (document.cookie !== undefined) {
      const transformCookie = document.cookie.split('=')[1].split(',');
      const newCookie = transformCookie.filter(element => element !== whatToDelete);
      if (newCookie.length === 0) {
        document.cookie = `wishlist = none; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      } else {
        document.cookie = `wishlist = ${newCookie}`;
      }
    }
    props.update();
    if (whatToDelete === details.Title) {
      setShowDetails(false);
      setDetails({});
    }
  }

  const closePanel = (e) => {
    if (e.target.className === 'backdrop') {
      props.showTheBox();
    }
  }

  return (
    <div className='backdrop' onClick={closePanel}>
      <div className='wishListPanel'>
        <div className='theText'>WishList</div>
        <div className='theList' style={{ textAlign: 'center' }}>
          {props.data.length > 0 ?
            props.data.map(element => {
              return <div key={element} className='listItem'>
                {element}
                <div className='buttonPlace'>
                  <button onClick={() => showDropMenu(element)}>Details</button>
                  <button onClick={() => deleteFromWish(element)}>Remove</button>
                </div>
              </div>
            })
            : 'No movies in the wishlist'}
        </div>
        <div className='movieDetails' style={{ display: showDetails ? 'block' : 'none' }}>
          <ul>
            {
              details !== null ? <div className='movieData'>
                <ul >
                  <li>Title: {details.Title}</li>
                  <li>imdb Rating: {details.imdbRating}</li>
                  <li>Rated: {details.Rated}</li>
                  <li>Genre: {details.Genre}</li>
                </ul>
                <ul>
                  <li>Director: {details.Director}</li>
                  <li>Writers: {details.Writer}</li>
                  <li>Actors: {details.Actors}</li>
                </ul>
              </div> : 'Loading...'
            }
          </ul>
        </div>
      </div>
    </div>
  );
}