import React from 'react';

const RecipeCard = ({ recipe }) => {

    console.log(recipe)
    return (
        <>
            <div className="col">
                <div className="card text-center">
                    <img src='' className="card-img-top img-fluid chef_picture" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title fw-bold"></h4>
                        <h5></h5>
                        <h5>Numbers of Recipes: </h5>
                        <h5>Likes: </h5>
                    </div>

                </div>
            </div>
        </>
    );
};

export default RecipeCard;