import React from 'react';
import './ChefCards.css'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { FaClock, FaFireAlt, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCards = ({ chefs }) => {

    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience, id } = chefs

    console.log(id)

    return (
        <>
            <div className="col">
                <div className="card text-center">
                    <img src={chef_picture} className="card-img-top img-fluid chef_picture" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title fw-bold">Name: {chef_name}</h4>
                        <h5>Experience: {years_of_experience} years &nbsp; {<FaClock></FaClock>}</h5>
                        <h5>Numbers of Recipes: {num_of_recipes}&nbsp; {<FaFireAlt className='text-danger'></FaFireAlt>}</h5>
                        <h5>Likes: {likes} &nbsp; {<FaThumbsUp></FaThumbsUp>}</h5>
                    </div>
                    <Link className='btn btn-success rounded-0' to={`/chefs/recipe/${id}`}>View Recipes</Link>
                </div>
            </div>
        </>
    );
};

export default ChefCards;