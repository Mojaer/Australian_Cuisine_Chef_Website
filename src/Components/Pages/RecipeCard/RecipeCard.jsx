import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './RecipeCard.css'
import { Rating } from '@smastrom/react-rating';

const RecipeCard = ({ recipe }) => {

    console.log(recipe)
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


    return (
        <>
            <Card className='recipe_card'>
                <Card.Img variant="top" src={recipe_photo} className='recipe_photo' />
                <Card.Body>
                    <Card.Title className='fw-bold'>{recipe_name}</Card.Title>

                    <Card.Text>
                        <strong>Ingredients : </strong>
                        {
                            <ol >
                                {
                                    ingredients.map(i => <li >{i}</li>)
                                }
                            </ol>
                        }
                    </Card.Text>
                    <Card.Text>
                        <strong>Cooking Method : </strong>
                        {
                            cooking_method
                        }
                    </Card.Text>
                    <Card.Text>
                        <strong>Rating : {rating} </strong>
                        {
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        }

                    </Card.Text>
                </Card.Body>

                <Button variant='success' >Favorite button</Button>

            </Card>
        </>
    );
};

export default RecipeCard;