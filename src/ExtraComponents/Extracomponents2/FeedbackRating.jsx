import React from 'react';
import './FeedbackRating.css'
import { Accordion, Container } from 'react-bootstrap';
import { CircularProgress } from '@mui/joy';

const FeedbackRating = () => {

    const percentage = 55


    return (
        <div className='extra2'>
            <h4 className='text-center fw-bold py-5 text-light'>Ratings on People's feedback</h4>

            <Container className='d-md-flex justify-content-around align-items-center'>

                <div className='text-center'>
                    <CircularProgress
                        sx={{
                            "--CircularProgress-size": "120px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressThickness": "10px"
                        }}
                        color="info"
                        determinate
                        size="lg"
                        value={90}
                        variant="outlined"
                    >4.7</CircularProgress>
                    <h5 className='text-light mb-auto py-3'>clean Bar</h5>
                </div>
                <div className='text-center'>
                    <CircularProgress
                        sx={{
                            "--CircularProgress-size": "120px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressThickness": "10px"
                        }}
                        color="success"
                        determinate
                        size="lg"
                        value={89}
                        variant="outlined"
                    >4.6</CircularProgress>
                    <h5 className='text-light mb-auto py-3'>Freshness of Products</h5>
                </div>
                <div className='text-center'>
                    <CircularProgress
                        sx={{
                            "--CircularProgress-size": "120px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressThickness": "10px"
                        }}
                        color="info"
                        determinate
                        size="lg"
                        value={85}
                        variant="outlined"
                    >4.3</CircularProgress>
                    <h5 className='text-light mb-auto py-3'>Skilled Chef</h5>
                </div>
                <div className='text-center'>
                    <CircularProgress
                        sx={{
                            "--CircularProgress-size": "120px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressThickness": "10px"
                        }}
                        color="success"
                        determinate
                        size="lg"
                        value={81}
                        variant="outlined"
                    >4.3</CircularProgress>
                    <h5 className='text-light mb-auto py-3'>Test of Food</h5>
                </div>

            </Container>
            <Container className='py-5 px-5'>
                <h6 className='mb-auto text-light text-center'>Customers praised the Clean Bar, skilled Chef, and delicious Australian cuisine, highlighting the quality of the food and the expertise of the staff in creating an enjoyable dining experience.The highlighted aspects was of the dining experience, including cleanliness, culinary skill, and taste.

                </h6>
            </Container>

        </div>


    );
};

export default FeedbackRating;