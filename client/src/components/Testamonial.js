import React from 'react'
import styled from "styled-components";

const Testamonial = () => {
    return (
        <MotherDiv>
            <LeftDiv>
                <H3>"It looks brand new!"</H3>
                <Para>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut aliquet elit quis dolor sagittis bibendum. Vestibulum ultrices,
                    eros feugiat suscipit pharetra.
                </Para>
            </LeftDiv>
            <RightDiv>
                <Car>Picture of Car</Car>
            </RightDiv>
        </MotherDiv>
    )
}

export default Testamonial;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
`

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 3%;
`
const RightDiv = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 3%;
`

const H3 = styled.h3`
    margin: 0;
    font-size: 1.5rem;
`
const Para = styled.p`
    margin: 0;
`
const Car = styled.p`
    margin: 0;
`