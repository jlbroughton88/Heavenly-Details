import React from 'react';
import styled from "styled-components";

const ContactBanner = () => {
    return (
        <MotherDiv>
            <Heading>About Us</Heading>
            <Para>Everything that you might want to know about Heavenly Details!</Para>
        </MotherDiv>
    )
}

export default ContactBanner;

const MotherDiv = styled.div`
    height: 400px;
    max-width: 625px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #ffffff;

    @media(max-width: 830px) {
        width: 75%;
    }
`

const Heading = styled.h1`
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;

`

const Para = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`
