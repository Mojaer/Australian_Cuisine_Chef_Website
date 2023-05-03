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
                    <Container className='py-5 text-center'>
                        <h2 className='fw-bolder mb-4 text-light'>Welcome to</h2>
                        <img className='w-50' src="/Australian-cuisine-image-banner.png" alt="" />
                        <h5 className='mt-3 mb-2 w-75 mx-auto text-light'>Lorem ipsum  elit. Necessitatibus praesentium corrupti nisi illum. Amet fugiat  et recusandae?</h5>
                    </Container>
                </div>
            </section>
            <section>
                <Container className=' my-5'>
                    <h4 className='fw-bold text-center'>We Have Experienced Chefs</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">

                        {
                            chefs.map(chef => <ChefCards chefs={chef} key={chef.id}></ChefCards>)
                        }

                    </div>
                </Container>
            </section>
        </>


    );
};

export default Home;