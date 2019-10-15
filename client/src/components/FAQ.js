import React from 'react';
import styled from "styled-components";

const FAQ = () => {
    return (
        <MotherDiv>
            <FaqRow>
                <FaqDiv>
                    <FaqHead>FAQ</FaqHead>
                </FaqDiv>
            </FaqRow>
            <Rows>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>How much do you charge?</Head>
                        </HeadDiv>
                    </HeadRow>
                    <ParaDiv>
                        <Para></Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Will my paint get damaged?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para></Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Why not use a drive-thru carwash?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para></Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Will I have to drop my car off?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para></Para>
                    </ParaDiv>
                </Row>
            </Rows>

        </MotherDiv>
    )
}

export default FAQ;

const MotherDiv = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #f8f9fb;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    @media(max-width: 750px) {
        height: 70%;
    }

    @media(max-width: 650px) {
    }

    @media(max-width: 475px) {
        padding-bottom: 10%;
        padding-top: 6%;
    }
`

// FAQ
const FaqRow = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const FaqDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;

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

const FaqHead = styled.h3`
    font-size: 3rem;
    margin: 0;
    border-bottom: 1px solid #008C96;

    @media(max-width: 500px) {
        border-bottom: none;
        font-size: 2.6rem;
    }
`

// ROWS
const Rows = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Row = styled.div`
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const HeadRow = styled.div`
    width: 100%;
`

const HeadDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
    margin-left: 13%;

    @media(max-width: 800px) {
        width: 65%;
    }

    @media(max-width: 600px) {
        width: 100%;
        justify-content: center;
        margin-left: 0;
    }

    @media(max-width: 500px) {
        justify-content: flex-start;
        font-size: 1.4rem;
        margin-left: 25px;
    }

`

const Head = styled.h3`
    align-self: flex-start;
    font-size: 1.6rem
    margin: 0;

    @media(max-width: 500px) {
        font-size: 1.4rem;
    }
`

const ParaDiv = styled.div`
    padding-left:17.5%;
    padding-right: 17.5%;
    margin: 0;
    margin-top: 1%;

    @media(max-width: 600px) {
        text-align: center;
    }
`

const Para = styled.p`
    font-size: 1.2rem;
    margin: 0;
`


