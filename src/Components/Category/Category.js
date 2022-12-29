import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = () => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div>
        
        <div>
            {
                appointmentOptions.map(category => <p key={category._id}>
                    <button className='btn btn-outline w-full mt-4' >{category.name}</button>
                </p>)
            }
        </div>
    </div>
    );
};
// to={`/category/${category.id}`}
export default Category;