import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './RecipeCard.css'
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';


const RecipeCard = ({ recipe }) => {

    // console.log(recipe)

    //spinner fot the loading
    if (!recipe) {
        return (
            <div className='text-center'>
                <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                    <span className="visually-hidden mx-auto">Loading...</span>
                </Spinner>
            </div>

        )
    }

    const { recipe_name, ingredients, rating, recipe_photo, cooking_method } = recipe

    //Favorite option to add 
    const [favorite, setFavorite] = useState(false)
    const notify = () => toast(`${recipe_name} is added to favorites list`);
    const handleFavorite = () => {
        setFavorite(true)
        notify()
    }


    return (
        <>
            <Card className='recipe_card'>
                <LazyLoad  >
                    <Card.Img variant="top" src={recipe_photo} className='recipe_photo' />
                </LazyLoad>
                <div className='card-body ' >
                    <Card.Title className='fw-bold'>{recipe_name}</Card.Title>
                    <div className='card-text'>
                        <strong>Ingredients : </strong>
                        {
                            <ol >
                                {
                                    ingredients.map(i => <li key={i} >{i}</li>)
                                }
                            </ol>
                        }
                    </div>
                    <div className='card-text'>
                        <strong>Cooking Method : </strong>
                        {
                            cooking_method
                        }
                    </div>
                    <div className='card-text'>
                        <strong>Rating : {rating} </strong>
                        {
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        }

                    </div>
                    <div className='card-text'>
                        <Button variant='success' className='mt-4 ' onClick={handleFavorite} disabled={favorite}>Favorite button</Button>
                    </div>

                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1700}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />
            </Card>
        </>
    );
};

export default RecipeCard;