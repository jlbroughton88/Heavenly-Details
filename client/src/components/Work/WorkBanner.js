import React from 'react'
import styled from "styled-components"

const WorkBanner = () => {
    return (
        <MotherDiv>
            <Head>Our Work</Head>
            <Para>We know you expect only the best service, take a look at some of our previous details!</Para>
        </MotherDiv>
    )
}

export default WorkBanner;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 625px;
    height: 400px;
    margin: 0;

    @media(max-width: 830px) {
        width: 75%;
    }

    @media(max-width: 500px) {
        width: 80%;
    }
`

const Head = styled.h2`
    font-size: 2rem;
    font-weight: heavier;
    margin: 0;
    margin-bottom: 20px;
`

const Para = styled.p`
    font-size: 1.2rem;
    margin: 0;
    text-align: start;
`
