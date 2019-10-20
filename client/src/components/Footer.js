import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Facebook from "./images/socialMediaIcons/facebook.png";
import Instagram from "./images/socialMediaIcons/instagram.png"

const Footer = () => {
    return (
        <MotherDiv>

        <MoverDiv1>
            <SocialDiv>
                <SocialLink href="https://www.facebook.com/HeavenlyDetails704/">
                    <Icon src={Facebook} alt="" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/heavenlydetailsclt">
                    <Icon src={Instagram} alt="" />
                </SocialLink>
            </SocialDiv>
        </MoverDiv1>


        <MoverDiv2>
                        <LinksDiv>
                <Link to="/">
                    <FooterLink>Home</FooterLink>
                </Link>
                <Link to="/about">
                    <FooterLink>About</FooterLink>
                </Link>
                <Link to="/packages">
                    <FooterLink>Packages</FooterLink>
                </Link>
                <Link to="/work">
                    <FooterLink>Work</FooterLink>
                </Link>
                <Link to="/contact">
                    <FooterLink>Contact</FooterLink>
                </Link>
                <Link to="/reviews">
                    <FooterLink>Reviews</FooterLink>
                </Link>
                </LinksDiv>
        </MoverDiv2>

        </MotherDiv>
    )
}

export default Footer;

const MotherDiv = styled.footer`
    width: 100%;
    background: #008C96;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    bottom: 0;
    margin-top: 100px;
`

const MoverDiv1 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 30%;


    @media(max-width: 600px) {
        padding-right: 0;
        width: 100%;
        justify-content: flex-start;
    }
`

const MoverDiv2 = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 67%;
    padding-right: 3%;


    @media(max-width: 600px) {
        padding-right: 0;
        margin-right: 20px
        width: 100%;
        justify-content: flex-end;
    }
`

const LinksDiv = styled.div`
    display: inline-grid;
    grid-template-columns: 30% 30% 30%
    grid-gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    width: 400px;
    justify-items: center;
    height: 60px;
    position: relative;

    @media(max-width: 650px) {
        grid-template-columns: 45% 45%
        width: 150px;
        justify-items: end;
        grid-gap: 5px;
    }
    

`

const FooterLink = styled.p`
    margin: 0;
    padding-left: 2px;
    padding-right: 2px;
    transition: all .15s ease-out;



    :focus{
        border-left: 2px #ffffff solid;
        border-right: 2px #ffffff solid;
    }

    :hover{
        border-left: 2px #ffffff solid;
        border-right: 2px #ffffff solid;
    }
`

const SocialDiv = styled.div`
    height: 100%;
    width: 200px
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 600px) {
        justify-content: flex-start;
        width: 150px;
        margin-left: 20px;
    }
`

const SocialLink = styled.a`
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;   
    margin-top: 0;
    margin-bottom: 0;
    align-self: center;

    @media(max-width: 600px) {
        justify-content: flex-start;
        align-self: flex-start;
        width: 45%;
    }
`

const Icon = styled.img`
    height: auto;
    width: 65%;
    margin: 5%;

    @media(max-width: 600px) {
        margin: 0;
    }
`
