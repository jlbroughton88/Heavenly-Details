import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Facebook from "./images/socialMediaIcons/facebook.png";
import Instagram from "./images/socialMediaIcons/instagram.png"

const Footer = () => {
    return (
        <MotherDiv>

            <LeftDiv>
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
            </LeftDiv>

            <RightDiv>
                <Info className="normalFooter">
                    <CallDiv>
                        <CallH>Call Us!</CallH>
                        <CallP>(704) 668-5788</CallP>
                    </CallDiv>

                    <EmailDiv>
                        <EmailH>Email Us!</EmailH>
                        <EmailP>heavenlydetails704@gmail.com</EmailP>
                    </EmailDiv>
                </Info>
                <Info2 className="smallFooter">
                    <CallDiv2>
                        <CallH2>Call Us!</CallH2>
                        <a href="tel:704-668-5788"><CallP2>(704)668-5788</CallP2></a>
                    </CallDiv2>

                    <EmailDiv2>
                        <a href="mailto:heavenlydetails704@gmail.com"><EmailH2>Email Us!</EmailH2></a>
                    </EmailDiv2>
                </Info2>
                <SocialDiv>
                    <IconDiv>
                        <SocialLink href="https://www.facebook.com/HeavenlyDetails704/">
                            <Icon src={Facebook} alt="" />
                        </SocialLink>
                        <SocialLink href="https://www.instagram.com/heavenlydetailsclt">
                            <Icon src={Instagram} alt="" />
                        </SocialLink>
                    </IconDiv>
                </SocialDiv>
            </RightDiv>








        </MotherDiv>
    )
}

export default Footer;

const MotherDiv = styled.footer`
    width: 100%;
    background: #00979d;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    bottom: 0;
`

const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding-right: 5%;
`

const LeftDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    padding-left: 5%;
`

const LinksDiv = styled.div`
    display: inline-grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    width: 100%;
    justify-items: flex-start;
    position: relative;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: flex-end;
    align-items: center;

`

const SocialLink = styled.a`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;   
    margin-top: 0;
    margin-bottom: 0;
    align-self: center;

`

const IconDiv = styled.div`
    height: 100%;
    width: 125px;
    display: flex;
    flex-direction: row;
    align-self: flex-end;

`

const Icon = styled.img`
    height: auto;
    width: 65%;
    margin: 5%;

`

const Info = styled.div`
    width: 100%;
`

const CallDiv = styled.div`
        display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 15px;
`

const CallH = styled.h3`
    margin: 0;
    margin-bottom: 10px;
`

const CallP = styled.p`
    margin: 0;
    margin-bottom: 10px;
`

const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 15px;
`

const EmailH = styled.h3`
    margin: 0;
    margin-bottom: 10px;
`

const EmailP = styled.p`
    margin: 0;
    margin-bottom: 10px;
`


// SMALL
const Info2 = styled.div`
    width: 100%;
`

const CallDiv2 = styled.div`
        display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 15px;
`

const CallH2 = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    border-bottom: 1px #fffff solid;
`

const CallP2 = styled.p`
    margin: 0;
    margin-bottom: 10px;
    
`

const EmailDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 15px;
`

const EmailH2 = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    border-bottom: 1px #fffff solid;
`

const EmailP2 = styled.p`
    margin: 0;
    margin-bottom: 10px;
`
