import React from 'react';
import styled from "styled-components"
import NavBar from "../NavBar"
import Banner from "../Banner"
import HomePic1 from '../HomePic1';
import HomePic2 from '../HomePic2';
import Reviews from "../Reviews/Reviews.js"
import FAQ from "../FAQ"
import Footer from "../Footer"

const Home = () => {
    return (
        <MotherDiv>
            <NavBar/>
            <Banner/>
            <HomePic1/>
            <FAQ/>
            <HomePic2/>
            <Reviews/>
            <Footer/>
        </MotherDiv>
    )
}

export default Home;

const MotherDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`