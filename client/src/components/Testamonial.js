import React from 'react'
import styled from "styled-components";
import Exterior from "./images/photos/exterior.jpeg"

const Testamonial = () => {
    return (
        <MotherDiv>
            <Container>
                <HeadDiv>
                    <Head>"It looks brand new!"</Head>
                </HeadDiv>
                
            </Container>
        </MotherDiv>
    )
}

export default Testamonial;

const MotherDiv = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #f8f9fb;
    max-height: 350px;

    @media(max-width: 475px) {
        height: 250px;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    background: url(${Exterior}) no-repeat center/contain;
    color: black;

    @media(max-width: 650px) {
        width: 100%;
        transform: scale(1);
    }
`

const HeadDiv = styled.div`
    padding: 3px 3px;
    background: white;
    border-radius: 3px;
`

const Head = styled.h3`
    margin: 0;
    font-size: 2rem;

    @media(max-width: 650px) {
        font-size: 1.7rem;
    }
`
