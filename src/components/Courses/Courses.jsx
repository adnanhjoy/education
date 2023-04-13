import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Row from 'react-bootstrap/Row';

export const CoursesContext = createContext()

const Courses = () => {
    const courses = useLoaderData();


    return (
        <div>
            <h1 className='text-center mt-3'>This is Courses Page</h1>
            <div className='container mt-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course =>
                            <CoursesContext.Provider value={course} key={course.id}>
                                <Course></Course>
                            </CoursesContext.Provider>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Courses;