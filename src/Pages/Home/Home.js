import React from 'react';
import Category from '../../components/Category/Category';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import Services from '../../components/Product/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Category></Category>
            <Product></Product>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;