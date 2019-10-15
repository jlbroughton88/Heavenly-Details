import React from 'react';
import styled from "styled-components";

const Services = () => {
    return (
        <MotherDiv>
            <HeadRow>
                <HeadDiv>
                    <Head>Services</Head>
                </HeadDiv>
            </HeadRow>
            <Rows>
                <Row>
                    <Task>
                        <TaskHead>Interior Wash</TaskHead>
                        
                    </Task>
                    <Task>
                        <TaskHead>Exterior Wash</TaskHead>
                        
                    </Task>
                </Row>
                <Row>
                    <Task>
                        <TaskHead>Wax</TaskHead>
                        
                    </Task>
                    <Task>
                        <TaskHead>Steam</TaskHead>
                        
                    </Task>
                </Row>
                <Row>
                    <Task>
                        <TaskHead>Clay Bar</TaskHead>
                        
                    </Task>
                    <Task>
                        <TaskHead>Tire Shine</TaskHead>
                        
                    </Task>
                </Row>
            </Rows>
        </MotherDiv>
    )
}

export default Services;

const MotherDiv = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background: #ffffff;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    @media(max-width: 750px) {
        height: 45%;
    }

    @media(max-width: 475px) {
        padding-bottom: 10%;
        padding-top: 6%;
    }

`

const HeadRow = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const HeadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    margin-left: 1.9%;


    @media(max-width: 950px) {
        margin-left: 5%;
    }

    @media(max-width: 600px) {
        margin-left: 8%;
    }

    @media(max-width: 500px) {
        width: initial;
        margin: 0;
        left: 0;
        padding: 3px 16px;
        border: 1px solid #008C96;
        border-left: none;
        background: #f8f9fb;
    }

`

const Head = styled.h3`
    font-size: 3rem;
    margin: 0;
    border-bottom: 1px solid #008C96;

    @media(max-width: 500px) {
        font-size: 2.6rem;
        border-bottom: none;
    }
`

const Rows = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    
    @media(max-width: 475px) {
        justify-content: space-around;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    @media(max-width: 475px) {
        // flex-direction: column;
        height: 33%;
    }
`

const Task = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;

    @media(max-width: 475px) {
        padding: 0;
    }
`
const TaskHead = styled.h3`
    font-size: 1.6rem;
    margin: 0;

    @media(max-width: 750px) {
        font-size: 1.5rem
    }

    @media(max-width: 650px) {
        font-size: 1.45rem;
    }
`
const TaskPara = styled.p`
    font-size: 1.2rem;
    margin: 0;

    @media(max-width: 750px) {
        font-size: 1.15rem
    }

    @media(max-width: 650px) {
        font-size: 1.1rem;
    }
`