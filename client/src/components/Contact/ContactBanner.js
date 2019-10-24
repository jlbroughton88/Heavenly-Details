import React from 'react';
import styled from "styled-components";

const ContactBanner = () => {
    return (
        <MotherDiv>
            <Container>
                <Heading>Contact Us!</Heading>
                <Para>We're here to help and answer any question you might have. We look forward to hearing from you.</Para>
            </Container>
        </MotherDiv>
    )
}

export default ContactBanner;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    height: 400px;
    max-width: 625px;  
    
    @media(max-width: 830px) {
        width: 75%;
    }

    @media(max-width: 500px) {
        height: 300px;
        width: 80%;
    }

    @media(max-width: 375px) {
        height: 250px;
    }
`

const Container = styled.div`   
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #ffffff;
    margin: 0;
    `

const Heading = styled.h1`
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;

`

const Para = styled.p`
    margin: 0;
    font-size: 1.2rem;


    @media(max-width: 435px) {
        font-size: 1.09rem;
    } 

    @media(max-width: 375px) {
        font-size: 0.95rem;
    }
`
