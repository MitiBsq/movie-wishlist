import React, { useEffect, useState } from 'react';
import LowerMain from './LowerMain';
import UpperMain from './UpperMain';

export default function Main() {
    const [movieData, setMovieData] = useState();
    const [search, setSearch] = useState();

    const startToSearch = (movieTitle, releaseYear) => {
        setSearch({ movieTitle, releaseYear });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                /* const apiKey = search.releaseYear !== null ? `t=${search.movieTitle}&y=${search.releaseYear}` : `t=${search.movieTitle}`; */
                const apikey2 = `t=${search.movieTitle}`
                const getData = await fetch(`http://www.omdbapi.com/?${apikey2}&apikey=d3e38038`);
                const getDataJson = await getData.json();
                setMovieData({...getDataJson});
            } catch (error) {
                console.error(error.message);
            }
        }
        if(search) {
            fetchData();
        }
    }, [search]);

    return (
        <div className='mainPanel'>
            <UpperMain startToSearch={(movieTitle, releaseYear) => startToSearch(movieTitle, releaseYear)} />
            <LowerMain movieData={movieData}/>
        </div>
    );
}
