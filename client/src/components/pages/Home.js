import React from 'react';
import styled from "styled-components"
import NavBar from "../NavBar"
import Banner from "../Banner"
import Testamonial from '../Testamonial';
import FAQ from "../FAQ"
import Footer from "../Footer"

const Home = () => {
    return (
        <MotherDiv>
            <NavBar/>
            <Banner/>
            <Testamonial/>
            <FAQ/>
            <Footer/>
        </MotherDiv>
    )
}

export default Home;

const MotherDiv = styled.div`
    height: 100%;
`