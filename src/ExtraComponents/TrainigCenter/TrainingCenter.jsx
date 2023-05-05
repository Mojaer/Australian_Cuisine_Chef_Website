import React from 'react';
import './TrainingCenter.css'
import { Container } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';
import { BsTrophyFill } from "react-icons/bs";

const TrainingCenter = () => {
    return (
        <div className='extra1 '>
            <div className='extra1-banner py-5'>
                <Container className='d-md-flex justify-content-around  align-items-center' >
                    <div>
                        <h3 className='py-5 fw-bold'> Learn To Cook</h3>
                        <ScaleLoader
                            color="#36d7b7"
                            cssOverride={{}}
                            height={100}
                            margin={2}
                            radius={4}
                            speedMultiplier={1}
                            width={24}
                        />
                    </div>

                    <div className=' award'>

                        <h2 className='training'>Australian Cuisine Training Center</h2>
                        <p className='py-1 mb-3'>Discover the secrets of Australian cuisine from the country's top chefs at a state-of-the-art training center.
                            Perfect for aspiring chefs and food enthusiasts alike. </p>

                        <div className='text-center mt-3'>
                            <div>
                                <h1 className='trophy'><BsTrophyFill></BsTrophyFill></h1>
                            </div>

                        </div>
                    </div>

                </Container>
            </div>

        </div>
    );
};

export default TrainingCenter;