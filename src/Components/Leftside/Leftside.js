import React from 'react';
import Category from '../Category/Category';
import './leftside.css'

const Leftside = () => {
    return (
        <div className='category ml-10 font-bold text-2xl mt-20 w-1/6'>
            <Category></Category>
        </div>
    );
};

export default Leftside;