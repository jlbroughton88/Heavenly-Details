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
    max-width: 625px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

// FAQ
const FaqRow = styled.div`
display: flex;
justify-content: flex-start;
`

const FaqDiv = styled.div``

const FaqHead = styled.h3``

// ROWS
const Rows = styled.div``

const Row = styled.div`
`

const HeadRow = styled.div`
display: flex;
justify-content: flex-start;
`

const HeadDiv = styled.div``

const Head = styled.h3``

const ParaDiv = styled.div``

const Para = styled.p``


