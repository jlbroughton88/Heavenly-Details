import React from 'react'
import styled from "styled-components";
import Exterior from "./images/photos/exterior.jpeg";

const HomePic1 = () => {
    return (
        <MotherDiv className="p4">
            <Container >
                <Pic src={Exterior} alt="" />
            </Container>
        </MotherDiv>
    )
}

export default HomePic1;

const MotherDiv = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // background: #f8f9fb;
    background: #f6f7f1;
    max-height: 350px;

    @media(max-width: 475px) {
        height: 250px;
    }

    @media(max-width: 475px) {
        height: 300px;
    }

    @media(max-width: 375px) {
        height: 200px;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 550px;
    // background: url(${Exterior}) no-repeat center/contain;

    @media(max-width:850px) {
        width: 500px
    }

    @media(max-width: 650px) {
        width: 450px;
    }

    @media(max-width: 500px) {
        width: 400px;
    }

    @media(max-width: 430px) {
        width: 350px;
    }

    @media(max-width: 375px) {
        width: 310px;
    }
`

const Pic = styled.img`
   width: 100%;
    height: auto;
    border-radius: 5px;
    border: 2px lightgrey solid;
`
