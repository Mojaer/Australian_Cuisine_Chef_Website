import React, { useContext } from 'react';
import { chefsContext } from '../../../ChefProvider/ChefProvider';
import { Container } from 'react-bootstrap';
import './Home.css'
import ChefCards from '../ChefCards/ChefCards';
import TrainingCenter from '../../../ExtraComponents/TrainigCenter/TrainingCenter';
import FeedbackRating from '../../../ExtraComponents/Extracomponents2/FeedbackRating';



const Home = () => {
    const chefs = useContext(chefsContext)

    if (!chefs) {
        <div className='text-center'>
            <Spinner animation="border" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden mx-auto">Loading...</span>
            </Spinner>
        </div>
    }

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

            <section className='chefCard_banner'>
                <Container className=' py-5'>
                    <h4 className='fw-bold text-center mb-4 text-light'>We Have Experienced Chefs</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-3">

                        {
                            chefs.map(chef => <ChefCards chef={chef} key={chef.id}></ChefCards>)
                        }

                    </div>
                </Container>
            </section>
            <section>
                <FeedbackRating></FeedbackRating>
            </section>
            <section>
                <TrainingCenter></TrainingCenter>
            </section>

        </>


    );
};

export default Home;