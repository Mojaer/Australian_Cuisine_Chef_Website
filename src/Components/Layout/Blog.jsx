import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();


const Blog = () => {
    return (
        <Container className='mb-4'>
            <Pdf targetRef={ref} filename="React Blog">
                {({ toPdf }) => <button className='btn btn-danger my-4' onClick={toPdf}>download the information in the blog</button>}
            </Pdf>
            <div ref={ref}>
                <div>

                    <h4> What is a custom hook, and why will you create a custom hook? </h4>
                    <p>
                        A custom hook is a JavaScript function that uses built-in React hooks (such as useState or useEffect) to provide reusable logic in functional components. Developers create custom hooks to encapsulate common logic and make it more reusable across different components. Custom hooks can help reduce duplication of code and promote cleaner, more readable code.
                    </p>

                </div>
                <div>

                    <h4> Tell us the differences between uncontrolled and controlled components </h4>
                    <p>
                        In React, a controlled component is a form element whose value is controlled by React state, while an uncontrolled component's value is handled by the DOM. Controlled components provide more control over the user input and enable easier input validation, while uncontrolled components can provide a simpler implementation but less control over user input.
                    </p>

                </div>
                <div>

                    <h4> How to validate React props using PropTypes </h4>
                    <p>
                        To validate React props using PropTypes, import the library, define the PropTypes on the component's propTypes object, and specify the type and requirements for each prop. This helps catch errors and ensure proper data types are passed to the component.
                    </p>

                </div>
                <div>

                    <h4> Tell us the difference between nodejs and express js. </h4>
                    <p>
                        Node.js is a runtime environment for executing JavaScript code outside of a browser, while Express.js is a web application framework built on top of Node.js that provides additional features and tools for building web applications.
                    </p>

                </div>
            </div>



        </Container>


    );
};

export default Blog;