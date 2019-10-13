import React from 'react';
import styled from "styled-components";

const FAQ = () => {
    return (
        <MotherDiv>
            <HeadRow>
                <HeadDiv>
                    <Head>FAQ</Head>
                </HeadDiv>
            </HeadRow>
            <Rows>
                <Row>
                    <RowHeadDiv>
                        <RowHead>How much do you charge?</RowHead>
                    </RowHeadDiv>
                    <ParaDiv>
                        <RowPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor sagittis bibendum. Vestibulum ultrices, eros feugiat suscipit pharetra, enim velit facilisis tellus</RowPara>
                    </ParaDiv>

                </Row>
                <Row>
                    <RowHeadDiv>
                        <RowHead>Will my paint get damaged?</RowHead>
                    </RowHeadDiv>
                    <ParaDiv>
                        <RowPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor sagittis bibendum. Vestibulum ultrices, eros feugiat suscipit pharetra, enim velit facilisis tellus</RowPara>
                    </ParaDiv>
                </Row>
                <Row>
                    <RowHeadDiv>
                        <RowHead>Why not use a drive-thru carwash?</RowHead>
                    </RowHeadDiv>
                    <ParaDiv>
                        <RowPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor sagittis bibendum. Vestibulum ultrices, eros feugiat suscipit pharetra, enim velit facilisis tellus</RowPara>
                    </ParaDiv>
                </Row>
                <Row>
                    <RowHeadDiv>
                        <RowHead>Will I have to drop my car off?</RowHead>
                    </RowHeadDiv>
                    <ParaDiv>
                        <RowPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet elit quis dolor sagittis bibendum. Vestibulum ultrices, eros feugiat suscipit pharetra, enim velit facilisis tellus</RowPara>
                    </ParaDiv>
                </Row>
            </Rows>

        </MotherDiv>
    )
}

export default FAQ;

const MotherDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
`

const Head = styled.h3`
    font-size: 1.65rem;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    width: 90%;
`

const RowHeadDiv = styled.div`
    display: flex;
    width: 100%;
`

const RowHead = styled.h3`
    align-self: flex-start;
    font-size: 1.3rem
    padding: 2.5%;
    margin: 0;
`

const ParaDiv = styled.div`
    margin: 0;
    padding: 10%;
    padding-top: 0;
    padding-bottom: 0;
`

const RowPara = styled.p`
    margin: 0;
`


