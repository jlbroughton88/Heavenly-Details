import React from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import styled from "styled-components";
import WorkPhotos from '../WorkPhotos';
import WorkBanner from "../WorkBanner"

const Work = () => {
    return (
        <MotherDiv>
            <NavBar/>
            <WorkBanner/>
            <WorkPhotos/>
            <Footer/>
        </MotherDiv>
    )
}

export default Work;

const MotherDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`