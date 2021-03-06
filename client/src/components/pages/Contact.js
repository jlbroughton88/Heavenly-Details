import React from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import ContactBanner from "../Contact/ContactBanner";
import ContactForm from "../Contact/ContactForm"
import styled from "styled-components";

const Contact = () => {
    return (
        <MotherDiv>
            <NavBar/>
            <ContactBanner/>
            <ContactForm/>
            <Footer/>
        </MotherDiv>
    )
}

export default Contact;

const MotherDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`