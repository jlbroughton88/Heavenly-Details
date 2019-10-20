import React from "react";
import styled from "styled-components";
import menu from "../../../images/photos/menu.svg"

const ExpressBanner = () => {
    return (
        <MotherDiv>
            <HeadingDiv className="p2">
                <Heading>Express Package</Heading>
            </HeadingDiv>
            <ParaDiv>
                 <Para>Express Paragraph</Para>
            </ParaDiv>
        </MotherDiv>
    )
}

export default ExpressBanner;

const MotherDiv = styled.div`
    height: 400px;
    max-width: 625px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    width: 100%;

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
    font-size: 1.5rem;
    margin: 0;

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

const Para = styled.p`
    margin: 0;
    font-size: 1.2rem;
    margin-left: 1px;
`