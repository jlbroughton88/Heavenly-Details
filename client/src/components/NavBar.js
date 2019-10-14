import React from 'react';
import styled from "styled-components"


function NavBar() {
    return (
        <MotherDiv>
            <LeftDiv>
                <LogoDiv>
                     <Logo>Logo</Logo>
                </LogoDiv>
            </LeftDiv>

            <RightDiv>
                <NavLinks>
                    <AboutLink>About</AboutLink>
                    <WorkLink>Work</WorkLink>
                    <ContactLink>Contact</ContactLink>
                </NavLinks>

            </RightDiv>

        </MotherDiv>
    )
}

export default NavBar;

const MotherDiv = styled.nav`
    display: flex;
    flex-direction: row;
    height: 5%;
    width: 100%;
    background: lightgrey;
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