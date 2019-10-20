import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";

 const Banner = () => {
    return (
        <MotherDiv>
            <Heading>Heavenly Details</Heading>
            <Slogan>Catchy slogan here</Slogan>
            <CallToActionDiv>
                <Link to="/contact"><CallToAction1>Contact Us!</CallToAction1></Link>
                <Link to="/packages"><CallToAction2>Detail Packages</CallToAction2></Link>
            </CallToActionDiv>
        </MotherDiv>
    )
}

export default Banner;

const MotherDiv = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #ffffff;
`

const Heading = styled.h1`
    font-size: 3rem;
    margin: 0;
    margin-bottom: 20px;

    @media(max-width: 475px) {
        font-size: 2.9rem;
    }

    @media(max-width: 435px) {
        font-size: 2.5rem;   
    }

    @media(max-width: 375px) {
        font-size: 2.5rem;
    }
`

const Slogan = styled.h3`
    margin: 0;
    font-size: 1.6rem;
    margin-bottom: 20px;


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

const CallToActionDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    flex-direction: column;
    width: 60%;
`

const CallToAction1 = styled.button`
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    width: 154px;
    display: flex;
    justify-content: center;
    text-align: center
    border: 2px lightgrey solid;
    background: #008C96;
    color: #ffffff;
    padding: 7px 10px;
    font-size: 1rem;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: all .15s ease-out;

    :focus{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    :hover{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    @media(max-width: 375px) {
        font-size: 0.9rem;
    }
`

const CallToAction2 = styled.button`
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    width: 154px;
    display: flex;
    justify-content: center;
    text-align: center
    border: 2px lightgrey solid;
    background: #ffffff;
    color: #008C96;
    padding: 7px 10px;
    font-size: 1rem;
    border-radius: 4px;
    
    transition: all .15s ease-out;

    :focus{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    :hover{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }


    @media(max-width: 375px) {
        font-size: 0.9rem;
    }
`
