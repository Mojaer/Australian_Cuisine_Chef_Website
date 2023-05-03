import React from 'react';
import './ChefCards.css'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefCards = ({ chefs }) => {

    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience } = chefs

    console.log(chef_name)

    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={chef_picture} className="card-img-top img-fluid chef_picture" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <Button variant='success' className='rounded-0 '>View Recipes</Button>
                </div>
            </div>
        </>
    );
};

export default ChefCards;