import React from 'react';
import './Extra2.css'
import { Accordion, Container } from 'react-bootstrap';

const Extracomponents2 = () => {


    return (
        <div className='extra2'>
            <div className='extra2-banner'>
                <h4 className='text-center fw-bold py-4 text-light'>Healthy Environment to Have Best</h4>

                <Container className='d-md-flex justify-content-around  align-items-center pb-4'>
                    <div>
                        <Accordion className='w-100 accBody'>
                            <Accordion.Item eventKey="0" className='accBody'>
                                <Accordion.Header className='accBody'>Clean Bar </Accordion.Header>
                                <Accordion.Body className='accBody'>
                                    Clean Bar is a health food company that specializes in creating protein bars made with all-natural,
                                    organic ingredients and free of artificial additives.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='accBody'>Fresh Products</Accordion.Header>
                                <Accordion.Body className='accBody'>
                                    Australian cuisine emphasizes the use of fresh, local ingredients,
                                    highlighting the country's diverse range of produce and seafood.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='accBody'>Skilled Chefs</Accordion.Header>
                                <Accordion.Body className='accBody'>
                                    Australian cuisine benefits from the creativity and skill of its chefs, who combine traditional and
                                    modern techniques to showcase the country's culinary excellence.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div >
                        <img className='w-100  ' src="https://img.freepik.com/premium-photo/portrait-professional-young-chef-cook-uniform-that-posing-camera-kitchen_146671-38498.jpg?w=360" alt="" />
                    </div>

                </Container>
            </div>

        </div>
    );
};

export default Extracomponents2;