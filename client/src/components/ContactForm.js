import React from "react";
import axios from "axios";
import styled from "styled-components";

class ContactForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        axios.post("http://localhost:5007/send", {
            name, 
            email,
            message
        })
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err.response) })
    }

    resetForm() {
        document.getElementById("contact-form").reset();
    }

    render() {
        return(
            <MotherDiv>
                <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <NameDiv>
                        <NameInput type="text"  id="name"  autoComplete="off" placeholder="" /> 
                    </NameDiv>
                    <EmailDiv>
                        <EmailInput type="email"  id="email"  autoComplete="off" placeholder="" /> 
                    </EmailDiv>
                    <MessageDiv>
                        <MessageInput  id="message"  autoComplete="off" placeholder="" /> 
                    </MessageDiv>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </Form>
            </MotherDiv>
        )
    }
}

export default ContactForm;

const MotherDiv = styled.div``

const Form = styled.form``

const NameDiv = styled.div``

const NameInput = styled.input``

const EmailDiv = styled.div``

const EmailInput = styled.input``

const MessageDiv = styled.div``

const MessageInput = styled.textarea``

const SubmitBtn = styled.button``