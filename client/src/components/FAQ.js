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
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor</Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Will my paint get damaged?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor</Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Why not use a drive-thru carwash?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor</Para>
                    </ParaDiv>
                </Row>
                <Row>
                    <HeadRow>
                        <HeadDiv>
                            <Head>Will I have to drop my car off?</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor</Para>
                    </ParaDiv>
                </Row>
            </Rows>

        </MotherDiv>
    )
}

export default FAQ;

const MotherDiv = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #f8f9fb;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    @media(max-width: 750px) {
        height: 45%;
    }

    @media(max-width: 650px) {
        height: 40%;
    }

    @media(max-width: 475px) {
        padding-bottom: 10%;
        padding-top: 6%;
    }
`

// FAQ
const FaqRow = styled.div`
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
`

const FaqHead = styled.h3`
    font-size: 3rem;
    margin: 0;
    border-bottom: 1px solid #008C96;
`

// ROWS
const Rows = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
`

const Head = styled.h3`
    align-self: flex-start;
    font-size: 1.6rem
    margin: 0;
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


