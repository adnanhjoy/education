import React, { useContext, useState } from 'react';
import { CoursesContext } from '../Courses/Courses';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = () => {
    const [click, setClick] = useState(false);
    const courses = useContext(CoursesContext)
    const {img, name, author, price} = courses;

    return (
        <div className='course'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Author: {author}</p>
            <div className='enroll-section'>
                <p><b>Price:</b> <span className='price'>$ {price}</span></p>
                <button onClick={() => setClick(!click)} disabled={click} className='enroll-btn'>{click ? 'Enrolled': 'Enroll'}</button>
            </div>
        </div>
    );
};

export default Course;