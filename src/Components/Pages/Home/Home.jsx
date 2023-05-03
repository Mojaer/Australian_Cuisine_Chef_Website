import React, { useContext } from 'react';
import { chefsContext } from '../../../ChefProvider/ChefProvider';
import { Container } from 'react-bootstrap';
import './Home.css'
import ChefCards from '../ChefCards/ChefCards';

const Home = () => {
    const chefs = useContext(chefsContext)

    // console.log(chefs)
    return (
        <>
            <section className='banner'>
                <div className='background'>
                    <Container className='py-5 text-center '>
                        <h2 className='fw-bolder mb-4 text-light font'>Welcome to</h2>
                        <img className='w-50 mb-4' src="/Australian-cuisine-image-banner.png" alt="" />
                        <h5 className='mt-4 mb-2 w-50 mx-auto text-light font'>Indulge in the diverse and delicious flavors of Australia's cuisine with our authentic dishes and recipes.</h5>
                    </Container>
                </div>
            </section>
            <section>
                <Container className=' my-5'>
                    <h4 className='fw-bold text-center'>We Have Experienced Chefs</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">

                        {
                            chefs.map(chef => <ChefCards chef={chef} key={chef.id}></ChefCards>)
                        }

                    </div>
                </Container>
            </section>
        </>


    );
};

export default Home;