import React from 'react';

const Searchbox = ({ searchChange }) => {
    return (
    <div className='pa2'>
        <input className='pa2 br2 b--black bg-lightest-blue'
            type='search'
            placeholder='Search Pokemon :)'
         onChange={searchChange} />
    </div>);
}

export default Searchbox;
