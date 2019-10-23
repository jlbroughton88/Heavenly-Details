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


                <Row className="p1">
                    <HeadRow>
                        <HeadDiv>
                            <Head>"How much do you charge?"</Head>
                        </HeadDiv>
                    </HeadRow>
                    <ParaDiv>
                        <Para>Our rates start at $35!</Para>
                    </ParaDiv>
                </Row>


                <Row className="p1">
                    <HeadRow>
                        <HeadDiv>
                            <Head>"Will my paint get damaged?"</Head>
                        </HeadDiv>
                    </HeadRow>

                    <ParaDiv>
                        <Para>Not at all! We use proven techniques to avoid any paint damage.</Para>
                    </ParaDiv>
                </Row>


                <Row className="p1">
                    <HeadRow>
                        <HeadDiv>
                            <Head>"Why not use a drive-thru carwash?"</Head>
                        </HeadDiv>
                    </HeadRow>
                    <ParaDiv>
                        <Para>Drive-thru car washes actually damage your paint, leaving micro-scratches from the large bristled brushes.</Para>
                    </ParaDiv>
                </Row>


                <Row className="p1">
                    <HeadRow>
                        <HeadDiv>
                            <Head>"Will I have to drop my car off?"</Head>
                        </HeadDiv>
                    </HeadRow>
                    <ParaDiv>
                        <Para>Nope, we'll come to you!</Para>
                    </ParaDiv>
                </Row>
            </Rows>

        </MotherDiv>
    )
}

export default FAQ;

const MotherDiv = styled.div`
    width: 436px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    

    @media(max-width: 500px) {
        width: 400px;
    }

    @media(max-width: 437px) {
        width: 336px;
    }

    @media(max-width: 375px) {
        width: 310px;
    }

`

// FAQ
const FaqRow = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin-bottom: 25px;
`

const FaqDiv = styled.div`
border-bottom: #00979d solid 2px;
`

const FaqHead = styled.h3`
    margin: 0;
    font-size: 1.6rem;
`

// ROWS
const Rows = styled.div`

    width: 100%;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 35px;
    padding: 15px 20px;
    border-radius: 5px;
    border: lightgrey solid 2px;
`

const HeadRow = styled.div`
display: flex;
justify-content: flex-start;
`

const HeadDiv = styled.div`
    margin-bottom: 5px;
`

const Head = styled.h3`
    margin: 0;

    @media(max-width: 437px) {
        font-size: 1.1rem;
    }

`

const ParaDiv = styled.div`
    padding-left: 20px;
`

const Para = styled.p`
    border-left: #00979d solid 2px;
    padding-left: 5px;
    margin: 0;
    border-radius: 5px;
`


