import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ChefProvider from '../../ChefProvider/ChefProvider';

const Main = () => {
    return (
        <div>
            <ChefProvider>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ChefProvider>
        </div>
    );
};

export default Main;