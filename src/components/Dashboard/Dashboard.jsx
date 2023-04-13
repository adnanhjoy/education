import React, { createContext } from 'react';
import Barchart from '../Barchart/Barchart';
import PiechartDashboard from '../Piechart/PiechartDashboard';
import { Col, Row } from 'react-bootstrap';
// import './Dashboard.css';


const Dashboard = () => {
    return (
        <div>
            <h1 className='bg-info py-5 ps-5 text-Black'>Dashboard</h1>
            <Row xs={1} md={2}>
                <Col>
                <h1>Course Enrollment</h1>
                <Barchart></Barchart>
                </Col>
                <Col>
                <h1>Gender</h1>
                <PiechartDashboard></PiechartDashboard>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;