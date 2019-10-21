import React from "react";
import axios from "axios";
import styled from "styled-components";

class ContactForm extends React.Component{

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
        return(
            <MotherDiv>
                <HeadDiv>
                    <Head>What can we help you with?</Head>
                </HeadDiv>
                
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <NameDiv>
                        <NameInput type="text"  id="name"  autoComplete="off" placeholder="Name" /> 
                    </NameDiv>
                    <EmailDiv>
                        <EmailInput type="email"  id="email"  autoComplete="off" placeholder="Email" /> 
                    </EmailDiv>
                    <MessageDiv>
                        <MessageInput  id="message"  autoComplete="off" placeholder="Message" /> 
                    </MessageDiv>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </Form>
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

const HeadDiv = styled.div`
    width: 400px;
`

const Head = styled.h3`
    text-align: start;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`

const NameDiv = styled.div`
    margin-bottom: 20px;
    width: 400px;
`

const NameInput = styled.input`
    margin: 0;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 5px;
`

const EmailDiv = styled.div`
    margin-bottom: 20px;
    width: 400px;
`

const EmailInput = styled.input`
    margin: 0;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 5px;
`

const MessageDiv = styled.div`
    margin-bottom: 20px
    width: 400px;
`

const MessageInput = styled.textarea`
    margin: 0;
    outline: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 5px;
    border-radius: 5px;
`

const SubmitBtn = styled.button`
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