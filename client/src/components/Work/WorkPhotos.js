import React from 'react';
import styled from "styled-components";
import alfaCockpit from "../images/photos/alfaCockpit.jpg";
import alfaFront from "../images/photos/alfaFront.jpg";
import alfaInterior from "../images/photos/alfaInterior.jpg";
import alfaSide from "../images/photos/alfaSide.jpg";
import alfaWheel from "../images/photos/alfaWheel.jpg";
import bentley from "../images/photos/bentley.jpg";
import jagInterior from "../images/photos/jagInterior.jpg";
import jagSide from "../images/photos/jagSide.jpg";
import jagWheel from "../images/photos/jagWheel.jpg";
import lexusAfter from "../images/photos/lexusAfter.jpg";
import lexusBefore from "../images/photos/lexusBefore.jpg";
import lexusSedanInterior from "../images/photos/lexusSedanInterior.jpg";
import lexusSuvInterior from "../images/photos/lexusSuvInterior.jpg";
import lexusSuvSide from "../images/photos/lexusSuvSide.jpg";
import lexusSuvSide2 from "../images/photos/lexusSuvSide2.jpg";
import triumphFront from "../images/photos/triumphFront.jpg";
import triumphSide from "../images/photos/triumphSide.jpg";

const WorkPhotos = () => {

    const pictureArr = [
        alfaCockpit, alfaFront, alfaInterior, alfaSide, alfaWheel,
        bentley, jagInterior, jagSide, jagWheel, lexusAfter, lexusBefore,
        lexusSedanInterior, lexusSuvInterior, lexusSuvSide, lexusSuvSide2,
        triumphFront, triumphSide
    ]

    return (
        <MotherDiv>
            <Container>
                {pictureArr.map(pic =>
                    <PhotoBlock key={pic} alt="Work Example" src={`${pic}`}></PhotoBlock>
                )}
            </Container>
        </MotherDiv>
    )
}

export default WorkPhotos;

const MotherDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f6f7f1;
`

const Container = styled.div`
    width: 1100px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
    aligh-items: center;
    justify-items: center;
    grid-gap: 30px 30px;
    padding-top: 100px;
    padding-bottom: 100px;
    
    @media(max-width: 1100px) {
        width: 800px
        grid-template-columns: 45% 45%;
        grid-gap: 30px 30px;
    }

    @media(max-width: 800px) {
        width: 500px
        grid-template-columns: 100%;
    }
    
    @media(max-width: 450px) {
        width: 300px
    }
`

const PhotoBlock = styled.img`
    height: auto;
    width: 300px;
    align-self: center;
    border-radius: 5px;
    border: lightgrey solid 2px;


    @media(max-width: 1100px) {
        width: 350px
    }

    @media(max-width: 800px) {
        width: 450px
    }

    @media(max-width: 450px) {
        width: 300px
    }
`
