import React from 'react';
import './AwardWinning.css'
import { Container } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';

const AwardWinning = () => {
    return (
        <div className='extra1 '>
            <div className='extra1-banner py-5'>
                <Container className='d-md-flex justify-content-around  align-items-center' >
                    <div>
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
                    <div className='w-50 award'>
                        <h4 className='py-1'> Learn from the Best</h4>
                        <h2 className='training'>Australian Cuisine Training Center</h2>
                        <p className='py-1'>Discover the secrets of Australian cuisine from the country's top chefs at a state-of-the-art training center.
                            Perfect for aspiring chefs and food enthusiasts alike. </p>
                    </div>

                </Container>
            </div>

        </div>
    );
};

export default AwardWinning;