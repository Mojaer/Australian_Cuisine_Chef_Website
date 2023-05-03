import React, { useContext } from 'react';
import { FaClock, FaFireAlt, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { chefsContext } from '../../../ChefProvider/ChefProvider';
import { Container, Spinner } from 'react-bootstrap';
import './ChefRecipes.css'
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipes = () => {

    const chefRecipes = useLoaderData()
    const chefs = useContext(chefsContext)

    const chef = chefs.find(chef => chef.id === chefRecipes[0].chef_id)
    // console.log(chefRecipes)


    if (!chef) {
        return (
            <div className='text-center'>
                <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                    <span className="visually-hidden mx-auto">Loading...</span>
                </Spinner>
            </div>

        )
    }

    // console.log(chef)

    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience, short_bio } = chef


    return (
        <>
            <section className='chef-banner'>
                <div className='chef-background py-4'>
                    <Container className='d-md-flex justify-content-around align-items-center text-md-start text-center chef-container'>

                        <img src={chef_picture} className="chef_picture" alt="chef picture" />
                        <div className="chef-details text-light">
                            <h4 className="card-title fw-bold mb-2">Name: {chef_name}</h4>
                            <h5>Experience: {years_of_experience} years &nbsp; {<FaClock></FaClock>}</h5>
                            <h5>Numbers of Recipes: {num_of_recipes}&nbsp; {<FaFireAlt className='text-danger'></FaFireAlt>}</h5>
                            <h5>Likes: {likes} &nbsp; {<FaThumbsUp></FaThumbsUp>}</h5>
                        </div>

                    </Container>
                    <Container className='mt-4'>
                        <h5 className='text-light text-center'>Discover the Story of {chef_name}</h5>
                        <h6 className='text-light text-center px-5'>{short_bio}</h6>
                    </Container>
                </div>
            </section>

            <Container className=' my-5'>
                <h4 className='fw-bold text-center'>We Have Experienced Chefs</h4>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                    {
                        chefRecipes.map(chefRecipe => <RecipeCard recipe={chefRecipe} key={chefRecipe.recipe_id}></RecipeCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default ChefRecipes;