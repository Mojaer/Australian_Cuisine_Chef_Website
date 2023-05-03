import React, { useContext } from 'react';
import ChefProvider, { chefsContext } from '../../../ChefProvider/ChefProvider';

const Home = () => {
    const chefs = useContext(chefsContext)

    console.log(chefs)
    return (
        <div>

        </div>
    );
};

export default Home;