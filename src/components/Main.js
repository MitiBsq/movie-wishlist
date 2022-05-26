import React, { useEffect, useState } from 'react';
import LowerMain from './LowerMain';
import UpperMain from './UpperMain';

export default function Main(props) {
    //We use it to store data from the API call
    const [movieData, setMovieData] = useState();
    //We use it to track when we want to search
    const [search, setSearch] = useState();

    //Same as in the App.js file, but for the API data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apikey2 = `t=${search}`
                const getData = await fetch(`http://www.omdbapi.com/?${apikey2}&apikey=d3e38038`);
                const getDataJson = await getData.json();
                setMovieData({ ...getDataJson });
            } catch (error) {
                console.error(error.message);
            }
        }
        if (search) {
            fetchData();
        }
    }, [search]);

    return (
        <div className='mainPanel'>
            <UpperMain startToSearch={(movieTitle) => setSearch(movieTitle)} />
            <LowerMain movieData={movieData} update={props.update} />
        </div>
    );
}