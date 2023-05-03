import React, { useContext } from 'react';
import { FaClock, FaFireAlt, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { chefsContext } from '../../../ChefProvider/ChefProvider';
import { Container, Spinner } from 'react-bootstrap';
import './ChefRecipes.css'

const ChefRecipes = () => {

    const chefRecipes = useLoaderData()
    const chefs = useContext(chefsContext)

    const chef = chefs.find(chef => chef.id === chefRecipes[0].chef_id)

    if (!chef) {
        return (
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden mx-auto">Loading...</span>
            </Spinner>
        )
    }

    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience, id } = chef


    return (
        <>
            <section className='chef-banner'>
                <div className='chef-background'>
                    <Container className='d-md-flex justify-content-around align-items-center text-md-start text-center py-5 chef-container'>
                        <img src={chef_picture} className="chef_picture" alt="chef picture" />
                        <div className="chef-details text-light">
                            <h4 className="card-title fw-bold">Name: {chef_name}</h4>
                            <h5>Experience: {years_of_experience} years &nbsp; {<FaClock></FaClock>}</h5>
                            <h5>Numbers of Recipes: {num_of_recipes}&nbsp; {<FaFireAlt className='text-danger'></FaFireAlt>}</h5>
                            <h5>Likes: {likes} &nbsp; {<FaThumbsUp></FaThumbsUp>}</h5>
                        </div>

                    </Container>
                </div>


            </section>
        </>
    );
};

export default ChefRecipes;