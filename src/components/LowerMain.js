import React from 'react';
import MoviePoster from './MoviePoster';

export default function LowerMain({ movieData, update }) {

    return (
        <div>
            {movieData &&
                <div className='lowerMain'>
                    <MoviePoster movieData={movieData} update={update} />
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