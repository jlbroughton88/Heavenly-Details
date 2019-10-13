import React from 'react'
import styled from "styled-components";

 const Banner = () => {
    return (
        <MotherDiv>
            <Heading>Heavenly Details</Heading>
            <Slogan>Catchy slogan here</Slogan>
            <CallToAction>Click Me!</CallToAction>
        </MotherDiv>
    )
}

export default Banner;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;
`

const Heading = styled.h1`
    margin: 0;
    font-size: 3rem;
`

const Slogan = styled.h3`
    margin: 0;
    font-size: 1.5rem;
`

const CallToAction = styled.div`
    display: flex;
    justify-content: center;
    text-align: center
    border: 1px black dotted;
    background: lightblue;
    padding: 6px 8px;
`
