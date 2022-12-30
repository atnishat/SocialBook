import React from 'react';
import Category from '../Category/Category';
import './leftside.css'

const Leftside = () => {
    return (
        <div className='ml-5 font-bold text-2xl rounded-2xl bg-slate-50'>
            <Category></Category>
        </div>
    );
};

export default Leftside;