import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class ContactForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        axios.post("http://localhost:5001/send", {
            name,
            email,
            message
        })
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err.response) })
            .then(this.resetForm())
            .then(alert("Email sent!"))
    }

    resetForm() {
        document.getElementById("contact-form").reset();
    }

    render() {
        return (
            <MotherDiv>
                <HeadDiv className="p1">
                    <Head>How can we assist you?</Head>
                </HeadDiv>
                <MainDiv>
                    <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <NameDiv>
                            <NameInput type="text" id="name" autoComplete="off" placeholder="Name" />
                        </NameDiv>
                        <EmailInputDiv>
                            <EmailInput type="email" id="email" autoComplete="off" placeholder="Email" />
                        </EmailInputDiv>
                        <MessageDiv>
                            <MessageInput id="message" autoComplete="off" placeholder="Message" />
                        </MessageDiv>
                        <SubmitDiv>
                            <SubmitBtn type="submit">Send Message</SubmitBtn>
                        </SubmitDiv>

                    </Form>
                    <Info>
                        <CallDiv className="p3">
                            <CallH>Call Us!</CallH>
                            <CallP>(704) 668-5788</CallP>
                        </CallDiv>

                        <EmailDiv className="p4">
                            <EmailH>Email Us!</EmailH>
                            <EmailP>HeavenlyDetails704@gmail.com</EmailP>
                        </EmailDiv>

                    </Info>


                </MainDiv>
                <CTAParent className="p1">
                    <CallToActionDiv>
                        <CTAHead>Need another look?</CTAHead>
                        <Link to="/work"><CTA>View our work!</CTA></Link>
                    </CallToActionDiv>
                </CTAParent>

            </MotherDiv>
        )
    }
}

export default ContactForm;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const MainDiv = styled.div`
    display: grid;
    width: 90%;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;

    @media(max-width: 840px) {
        grid-template-columns: 100%;
        align-self: center;
        justify-content: center;
        align-items: center;
    }
`

const HeadDiv = styled.div`
    width: 400px;
    margin-bottom: 40px;  
    display: flex;
    align-items: center;
    align-self: center;
    height: 50px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 50px;

    @media(max-width: 550px) {
        width: 80%;
    }

    @media(max-width: 500px) {
        margin-bottom: 30px;
    }
    
`

const Head = styled.h3`
    margin: 0;
    text-align: start;
    font-size: 1.5rem;

    @media(max-width: 550px) {
        font-size: 1.25rem
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media(max-width: 839px) {
        margin-bottom: 100px;
    }

    @media(max-width: 550px) {
        margin-bottom: 65px;
    }

    @media(max-width: 375px) {
        margin-bottom: 35px;
    }
`

const NameDiv = styled.div`
    margin-bottom: 20px;
    width: 85%;

    @media(max-width: 500px) {
        margin-bottom: 10px;
    }
`

const NameInput = styled.input`
    margin: 0;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 5px;
    padding: 15px 20px;
    box-sizing: border-box;

    @media(max-width: 375px) {
        font-size: 1.05rem;
        padding: 10px 15px;
    }
`

const EmailInputDiv = styled.div`
    margin-bottom: 20px;
    width: 85%;
    align-self: center;

    @media(max-width: 500px) {
        margin-bottom: 10px;
    }
`

const EmailInput = styled.input`
    margin: 0;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 5px;
    padding: 15px 20px;
    box-sizing: border-box;

    @media(max-width: 375px) {
        font-size: 1.05rem;
        padding: 10px 15px;
    }
`

const MessageDiv = styled.div`
    margin: 0;
    margin-bottom: 20px
    height: 100px;
    width: 85%;

    @media(max-width: 500px) {
        margin-bottom: 10px;
    }
`

const MessageInput = styled.textarea`
    height: 100%;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    border-radius: 5px;
    margin: 0;
    padding: 15px 20px;
    box-sizing: border-box;

    @media(max-width: 375px) {
        font-size: 1.05rem;
        padding: 10px 15px;
    }
`

const SubmitDiv = styled.div`
    margin-bottom: 20px;
    width: 85%;
`

const SubmitBtn = styled.button`
    -webkit-appearance: none;
    border-radius: 4px;
    align-self: start;
    outline: none;
    font-size: 1.1rem;
    border: 2px lightgrey solid;
    background: #ffffff;
    color: #00979d;
    transition: all .15s ease-out;
    cursor: pointer;
    padding: 10px 15px;

    @media(max-width: 375px) {
        font-size: 1.05rem;
        padding: 5px 10px;
    }

    :focus{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    :hover{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }
`



const Info = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 841px) {
        margin-bottom: 30px;
    }

    @media(max-width: 839px) {
        display: grid;
        grid-template-columns: 35% 65%;
        justify-items: center;
    }

    @media(max-width: 650px) {
        grid-template-columns: 100%;
        align-items: center;
        margin-bottom: 100px;
    }

    @media(max-width: 375px) {
        margin-bottom: 50px;
    }

    

`

const CallDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    margin-bottom: 30px;
    height: 88px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 5px;

    @media(max-width: 839px) {
        width: 90%;
    } 

    @media(max-width: 650px) {
        width: 85%;
    }

    @media(max-width: 375px) {
        height: 75px;
        padding: 10px 15px;
        margin-bottom: 15px;
    }
    
`

const CallH = styled.h3`
    font-weight: bolder;
    font-size: 1.6rem;
    margin: 0;
    margin-bottom: 10px;

    @media(max-width: 375px) {
        font-size: 1.5rem;
    }
`

const CallP = styled.p`
    margin: 0;

    @media(max-width: 375px) {
        font-size: 0.95rem;
    }
`

const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    margin-bottom: 20px;
    height: 88px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 5px;

    @media(max-width: 839px) {
        width: 90%;
    } 

    @media(max-width: 650px) {
        width: 85%;
    }

    @media(max-width: 375px) {
        height: 75px;
        padding: 10px 15px;
    }

`

const EmailH = styled.h3`
    font-weight: bolder;
    font-size: 1.6rem;
    margin: 0;
    margin-bottom: 10px;

    @media(max-width: 375px) {
        font-size: 1.5rem;
    }
`

const EmailP = styled.p`
    margin: 0;

    @media(max-width: 375px) {
        font-size: 0.95rem;
    }
`

const CTAParent = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    border-radius: 5px;
    padding: 15px 20px;
    box-sizing: border-box;

    @media(max-width: 550px) {
        width: 73%;
    }
`

const CallToActionDiv = styled.div`
    width: 100%;
`

const CTAHead = styled.h3`
    margin: 0;
    margin-bottom: 10px;
`

const CTA = styled.button`
    -webkit-appearance: none;
    border-radius: 4px;
    outline: none;
    font-size: 1.1rem;
    border: 2px lightgrey solid;
    background: #ffffff;
    color: #00979d;
    border-radius: 4px;
    transition: all .15s ease-out;
    cursor: pointer;

    :focus{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    :hover{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }
`