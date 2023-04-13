import React, { createContext } from 'react';
import Barchart from '../Barchart/Barchart';
import PiechartDashboard from '../Piechart/PiechartDashboard';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard page</h1>
            <div className='recharts-container'>
                <div>
                    <h1>Course Enrollment</h1>
                    <Barchart></Barchart>
                </div>
                <div>
                    <h1>Gender</h1>
                    <PiechartDashboard></PiechartDashboard>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;