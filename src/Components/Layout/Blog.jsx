import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import './Blog.css'

const Blog = () => {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [12, 6]
    };
    return (
        <div className='mb-4'>
            <Container>
                <Pdf targetRef={ref} filename="React Blog.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <button className='btn btn-danger my-4' onClick={toPdf}>download the information in the blog</button>}
                </Pdf>
            </Container>

            <div ref={ref} >
                <Container>
                    <div className="row Grid p-5 justify-content-between align-items-start">
                        <div className="col-12 col-md-5 py-3">
                            <h4>What is a custom hook, and why will you create a custom hook?</h4>
                            <p>Custom hook is Js functions that is used by the help of the React built in hooks to create reusable and logical components. We use custom hooks to implementations of common logic and make the code more readable. It reduces the duplication of code and and helps to create reusable codes</p>
                        </div>

                        <div className="col-12 col-md-5 py-3">
                            <h4>The differences between uncontrolled and controlled components</h4>
                            <p>A controlled component is a form element in React The value of while a controlled by react state and uncontrolled component is handled by the DOM. Controlled components can provide more control and enable easy input validation but uncontrolled provides simple implementation and less control over user input.</p>
                        </div>
                        <div className="col-12 col-md-5 py-3">
                            <h4>How to validate React props using PropTypes ?</h4>
                            <p>To validate React props using PropTypes, import the library, define the PropTypes on the component's propTypes object, and specify the type and requirements for each prop. This is how propTypes is validated</p>
                        </div>
                        <div className="col-12 col-md-5 py-3">
                            <h4> The difference between nodejs and express js</h4>
                            <p>Node.js is a runtime environment for executing JavaScript code outside of a browser, while Express.js is a web application framework built on the base of Node.js. express js provides additional features and tools for building web applications and server. Moreover npm is created on the base of Node.js and express js is a package that.</p>
                        </div>
                    </div>

                </Container>

            </div>
        </div>


    );
};

export default Blog;