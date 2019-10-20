import React from "react";
import styled from "styled-components";

const BasicBanner = () => {
    return (
        <MotherDiv>
            <HeadingDiv className="p1">
                 <Heading>Basic Package</Heading>
            </HeadingDiv>
           <ParaDiv>
               <Para>Basic Paragraph</Para>
           </ParaDiv>
        </MotherDiv>
    )
}

export default BasicBanner;

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
    font-size: 2rem;
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

const Para = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`