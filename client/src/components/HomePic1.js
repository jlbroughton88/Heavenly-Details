import React from 'react'
import styled from "styled-components";
import Exterior from "./images/photos/exterior.jpeg"

const HomePic1 = () => {
    return (
        <MotherDiv>
            <Container>
                {/* <HeadDiv>
                    <Head>"It looks brand new!"</Head>
                </HeadDiv> */}
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
        height: 225px;
    }

    @media(max-width: 375px) {
        height: 200px;
    }

`

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 550px;
    padding-top: 7%;
    background: url(${Exterior}) no-repeat center/contain;
    color: black;

    @media(max-width:850px) {
        width: 500px
    }

    @media(max-width: 650px) {
        width: 450px;
    }
`

const HeadDiv = styled.div`
    padding: 3px 5px;
    background: white;
    border-radius: 3px;
`

// const Head = styled.h3`
//     margin: 0;
//     font-size: 1.6rem;

//     @media(max-width: 650px) {
//         font-size: 1.7rem;
//     }

//     @media(max-width: 475px) {
//         font-size: 1.5rem;
//     }

//     @media(max-width: 375px) {
//         font-size: 1.3rem;
//     }
// `
