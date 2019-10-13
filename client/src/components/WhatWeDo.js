import React from 'react';
import styled from "styled-components";

const WhatWeDo = () => {
    return (
        <MotherDiv>
            <HeadRow>
                <HeadDiv>
                    <Head>What we do</Head>
                </HeadDiv>
            </HeadRow>
            <Row>
                <Task>
                    <TaskHead>Interior Wash</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
                <Task>
                    <TaskHead>Exterior Wash</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
            </Row>
            <Row>
                <Task>                    
                    <TaskHead>Wax</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
                <Task>                    
                    <TaskHead>Paint Correction</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
            </Row>
            <Row>
                <Task>                    
                    <TaskHead>Clay Bar</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
                <Task>                    
                    <TaskHead>Tire Shine</TaskHead>
                    <TaskPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TaskPara>
                </Task>
            </Row>
        </MotherDiv>
    )
}

export default WhatWeDo;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    padding-top: 5%;
    padding-bottom: 5%;
`

const HeadRow = styled.div`
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
    padding: 5%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
`

const Head = styled.h3`
    font-size: 1.65rem;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 33%;
`

const Task = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`
const TaskHead = styled.h3``
const TaskPara = styled.p``