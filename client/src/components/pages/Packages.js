import React from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import PackagesPrompt from "../Packages/PackagesPrompt";
import PackagesList from '../Packages/PackagesList';
import styled from "styled-components";


const Packages = () => {
    return (
        <MotherDiv>
            <NavBar />
            <Container>
                <PackagesPrompt />
                <PackagesList />
            </Container>
            <Footer/>
        </MotherDiv>
    )
}

export default Packages;

const MotherDiv = styled.div`
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-bottom: 100px;
`