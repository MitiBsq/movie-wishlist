import React from 'react';
import MoviePoster from './MoviePoster';

export default function LowerMain({ movieData }) {
    console.log(movieData);
    return (
        <div>
            {!movieData ? 'Loading...' :
                <div className='lowerMain'>
                    <MoviePoster movieTitle={movieData.Title} imageSource={movieData.Poster} />
                    <div className='movieData'>
                        <ul >
                            <li>Title: {movieData.Title}</li>
                            <li>imdb Rating: {movieData.imdbRating}</li>
                            <li>Rated: {movieData.Rated}</li>
                            <li>Genre: {movieData.Genre}</li>
                        </ul>
                        <ul>
                            <li>Director: {movieData.Director}</li>
                            <li>Writers: {movieData.Writer}</li>
                            <li>Actors: {movieData.Actors}</li>
                        </ul>
                    </div>
                </div>}
        </div>
    );
}
