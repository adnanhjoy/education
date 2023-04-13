import React, { useContext } from 'react';
import { CoursesContext } from '../Courses/Courses';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = () => {
    const courses = useContext(CoursesContext)
    const {img, name, author, price} = courses;
    console.log(courses)
    return (
        <div className='course'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Author: {author}</p>
            <div className='enroll-section'>
                <p><b>Price:</b> <span className='price'>$ {price}</span></p>
                <button className='enroll-btn'>Enroll</button>
            </div>
        </div>
    );
};

export default Course;