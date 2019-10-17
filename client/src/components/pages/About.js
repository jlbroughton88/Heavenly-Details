import React from 'react';
import NavBar from "../NavBar";
import AboutBanner from "../AboutBanner";
import Footer from "../Footer";
import styled from "styled-components";
import AboutBody from "../AboutBody"

const About = () => {
    return (
        <MotherDiv>
            <NavBar/>
            <AboutBanner/>
            <AboutBody/>
            <Footer/>
        </MotherDiv>
    )
}

export default About;

const MotherDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`