import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-black mt-5 p-5 text-white'>
            <Row xs={1} md={3}>
                <Col>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat quo impedit amet quasi tempore mollitia, explicabo, voluptatibus nemo repellendus veniam. Quis rerum ex error sit qui molestias placeat accusantium.</p>
                </Col>
                <Col>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus reprehenderit ducimus magni et dolores earum alias a optio quis, porro quae, impedit quia. Impedit reiciendis nihil eveniet nemo earum minima?</p>
                </Col>
                <Col>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quisquam numquam! Alias laborum quidem sequi provident ipsum excepturi illo porro voluptas non, ab adipisci? Totam dicta nisi atque inventore molestiae!</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;