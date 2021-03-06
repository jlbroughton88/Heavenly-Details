import React from "react";
import styled from "styled-components";

const CeramicBanner = () => {
    return (
        <MotherDiv>
            <HeadingDiv>
                <Heading>Ceramic Package</Heading>
            </HeadingDiv>
            <ParaDiv>
                <Para>Ceramic Paragraph</Para>
            </ParaDiv>
        </MotherDiv>
    )
}

export default CeramicBanner;

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

const HeadingDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 7%;
    width: 75%;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 5px;

    @media(max-width: 830px) {
        width: 100%;
    }
`

const Heading = styled.h1`
    font-size: 2rem;
    margin: 0;
    margin-bottom: 20px;
`

const ParaDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 7%;
    width: 75%;

    @media(max-width: 830px) {
        width: 100%;
    }
`

const Para = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`