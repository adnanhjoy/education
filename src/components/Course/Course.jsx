import React, { useContext, useState } from 'react';
import { CoursesContext } from '../Courses/Courses';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap';

const Course = () => {
    const [click, setClick] = useState(false);
    const courses = useContext(CoursesContext)
    const { img, name, author, price } = courses;

    return (
        <Col>
            <Card>
                <Card.Img fluid={img} src={img} variant="top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Author: {author}</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p><b>Price:</b> <span className='text-warning fw-bold'>$ {price}</span></p>
                            <Button onClick={() => setClick(!click)} disabled={click} className='enroll-btn'>{click ? 'Enrolled' : 'Enroll'}</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;