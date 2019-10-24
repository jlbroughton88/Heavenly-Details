import React from 'react';
import styled from "styled-components"
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import logo from "./images/photos/logo.png"
import "../index.scss";


const NavBar = () => {
    return (
        <MotherDiv className="navBar">

            <LeftDiv>
                <LogoDiv>
                    <Link to="/">
                        <Logo src={logo}></Logo>
                    </Link>
                </LogoDiv>
            </LeftDiv>

            <RightDiv>
                <NavLinks className="normalNav">
                    {/* <Link to="/about">
                        <LinkP className="link">About</LinkP>
                    </Link> */}
                    <Link to="/packages">
                        <LinkP className="link">Packages</LinkP>
                    </Link>
                    <Link to="/work">
                        <LinkP className="link">Work</LinkP>
                    </Link>
                    <Link to="/contact">
                        <LinkP className="link">Contact</LinkP>
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
    background: #00979d;
    color: #ffffff;
    width: 100%;
    min-height: 55px;
    top: 0;
    position: sticky;
    z-index: 3;
`
const LeftDiv = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 550px) {
        width: 35%;
    }
`

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
`

const Logo = styled.img`
    margin-bottom: 0;
    height: 40px;
    transition: all .15s ease-out;
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

    @media(max-width: 850px) {
        width: 60%;
    }

    @media(max-width: 750px) {
        width: 65%;
    }

`

const LinkP = styled.p`
    margin: 3%;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 2px;
    padding-bottom: 2px;
    transition: all .15s ease-out;

    :focus{
        border-top: 2px #ffffff solid;
        border-bottom: 2px #ffffff solid;
    }

    :hover{
        border-top: 2px #ffffff solid;
        border-bottom: 2px #ffffff solid;
    }
`