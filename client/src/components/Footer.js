import React from 'react';
import styled from "styled-components"

const Footer = () => {
    return (
        <MotherDiv>
            <LinksDiv>
                <FooterLink>Home</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Contact</FooterLink>
            </LinksDiv>
        </MotherDiv>
    )
}

export default Footer;

const MotherDiv = styled.footer`
    height: 5%;
    background: #008C96;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;

`

const LinksDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
`

const FooterLink = styled.p`
    margin: 0;
`
