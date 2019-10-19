import React from "react";
import InteriorBanner from "./InteriorComps/InteriorBanner";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import styled from "styled-components";

import cleanRims from "../../images/photos/includedPics/cleanRims.jpg";
import windows from "../../images/photos/includedPics/windows.jpg";
import doorJams from "../../images/photos/includedPics/doorJams.jpg";
import vacuum from "../../images/photos/includedPics/vacuum.jpg";
import wash from "../../images/photos/includedPics/wash.jpg";
import tireShine from "../../images/photos/includedPics/tireShine.png";
import wax from "../../images/photos/includedPics/wax.jpg";
import shampooFloorMats from "../../images/photos/includedPics/shampooFloorMats.jpeg";
import steam from "../../images/photos/includedPics/steam.jpg";
import dust from "../../images/photos/includedPics/dust.jpg";
import conditionInterior from "../../images/photos/includedPics/conditionInterior.jpg";

const includedArr = [
  {
    head: "Deep Clean",
    image: wash,
    body: "Wash inside and Out body"
  },
  {
    head: "Shampoo",
    image: shampooFloorMats,
    body: "Clean Rims Body"
  },
  {
    head: "Steam",
    image: steam,
    body: "Windows Body"
  },
  {
    head: "Vacuum",
    image: vacuum,
    body: "Door Jams Body"
  },
  {
    head: "Dust",
    image: dust,
    body: "Vacuum Body"
  },
  {
    head: "Protect & Condition",
    image: conditionInterior,
    body: "Vacuum Body"
  },

]


const Interior = () => {
  return (
    <MotherDiv>
      <NavBar />
      <Container>
        <InteriorBanner />

        <IncludesDiv>
          {includedArr.map(incl =>
            <IncludedBlock key={incl.head}>
              <Head>
                {incl.head}
              </Head>
              <Body>
                {incl.body}
              </Body>
              <Img src={incl.image}></Img>

            </IncludedBlock>
          )}
        </IncludesDiv>

      </Container>
      <Footer />
    </MotherDiv>
  )
}

export default Interior;

const MotherDiv = styled.div``

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
margin-bottom: 100px;
`

const IncludesDiv = styled.div`
width: 100%;
height: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 30px;
  justify-content: center;

  @media(max-width: 700px) {
    grid-template-columns: 80%;
  }
`

const IncludedBlock = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: lightgrey;
  border-radius: 5px;
  
`

const Head = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`

const Img = styled.img`
width: 85%;
  border-radius: 5px;
`

const Body = styled.p`
  margin: 0;
  margin-bottom: 20px;
`