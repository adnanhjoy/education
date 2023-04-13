import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Plans = () => {
    return (
        <CardGroup>
            <Card className='bg-primary text-white'>
                <Card.Body>
                    <Card.Title>Basic</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-warning text-white'>
                <Card.Body>
                    <Card.Title>Golden</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='bg-danger text-white'>
                <Card.Body>
                    <Card.Title>Premium</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Plans;