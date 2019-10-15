import React from 'react';
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <MotherDiv>
            <LeftDiv>
                <LogoDiv>
                    <Link to="/">
                        <Logo>Logo</Logo>
                    </Link>
                </LogoDiv>
            </LeftDiv>

            <RightDiv>
                <NavLinks className="normalNav">
                    <Link to="/about">
                        <AboutLink className="link">About</AboutLink>
                    </Link>
                    <Link to="packages">
                        <AboutLink className="link">Packages</AboutLink>
                    </Link>
                    <Link to="work">
                        <WorkLink className="link">Work</WorkLink>
                    </Link>
                    <Link to="contact">
                        <ContactLink className="link">Contact</ContactLink>
                    </Link>
                </NavLinks>
                <BurgerMenu className="burgerMenu" />
            </RightDiv>
        </MotherDiv>
    )
}

export default NavBar;

const MotherDiv = styled.nav`
    display: flex;
    flex-direction: row;
    height: 7.5%;
    width: 100%;
    background: lightgrey;
    min-height: 55px;
`
const LeftDiv = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.p`
    margin-top: 0;
    margin-bottom: 0;
`
const RightDiv = styled.div`
    width: 75%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const NavLinks = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 500px) {
        width: 75%;
    }
`

const AboutLink = styled.p`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
`
const WorkLink = styled.p`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
`
const ContactLink = styled.p`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
`