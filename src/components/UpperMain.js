import React, { useState } from 'react';

export default function UpperMain({ startToSearch }) {
    //We use it for the controlled-components Method
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (searchInput.trim() !== '') {
            startToSearch(searchInput);
        }
    }

    return (
        <div className='upperMain'>
            <form className='searchPanel'>
                <label htmlFor='searchInput' >Enter the name of a movie</label>
                <input type='text' className='searchField' name='searchInput' value={searchInput} onChange={handleChange} />
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    );
}