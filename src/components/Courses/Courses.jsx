import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

export const CoursesContext = createContext()

const Courses = () => {
    const courses = useLoaderData();


    return (
        <div>
            <h1 className='text-center mt-3'>This is Courses Page</h1>
            <div className='course-container'>
                {
                    courses.map(course =>
                        <CoursesContext.Provider value={course} key={course.id}>
                            <Course></Course>
                        </CoursesContext.Provider>)
                }
            </div>
        </div>
    );
};

export default Courses;