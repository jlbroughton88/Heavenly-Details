import React from 'react'
import styled from "styled-components";

 const Banner = () => {
    return (
        <MotherDiv>
            <Heading>Heavenly Details</Heading>
            <Slogan>Catchy slogan here</Slogan>
            <CallToAction>Get your free quote!</CallToAction>
        </MotherDiv>
    )
}

export default Banner;

const MotherDiv = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #ffffff;

    @media(max-width: 750px) {
        height: 45%;
    }

    @media(max-width: 650px) {
        height: 40%;
    }

    @media(max-width: 475px) {
        height: 35%;
    }

    @media(max-width: 375px) {
        height: 30%;
    }
`

const Heading = styled.h1`
    margin: 0;
    font-size: 4rem;

    @media(max-width: 650px) {
        font-size: 3.5rem;
    }

    @media(max-width: 475px) {
        font-size: 2.9rem;
    }

    @media(max-width: 435px) {
        font-size: 2.7rem;   
    }

    @media(max-width: 375px) {
        font-size: 2.5rem;
    }
`

const Slogan = styled.h3`
    margin: 0;
    font-size: 2rem;

    @media(max-width: 650px) {
        font-size: 1.6rem;
    }

    @media(max-width: 475px) {
        font-size: 1.5rem;
    }

    @media(max-width: 435px) {
        font-size: 1.4rem;
    } 

    @media(max-width: 375px) {
        font-size: 1.3rem;
    }
`

const CallToAction = styled.div`
    display: flex;
    justify-content: center;
    text-align: center
    border: 1px black dotted;
    background: #008C96;
    color: #ffffff;
    padding: 9px 12px;
    font-size: 1.5rem;
    border-radius: 3px;

    @media(max-width: 650px) {
        padding: 8px 10px;
        font-size: 1.2rem;
    }

    @media(max-width: 475px) {
        font-size: 1.1rem;
    }

    @media(max-width: 435px) {
        font-size: 1rem;
    } 

    @media(max-width: 375px) {
        font-size: 0.9rem;
    }
`
