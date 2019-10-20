import React from "react";
import FullBanner from "./FullComps/FullBanner";
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
    head: "Wash Inside & Out",
    image: wash,
    body: "Wash inside and Out body"
  },
  {
    head: "Wax",
    image: wax,
    body: "Wax Body"
  },
  {
    head: "Windows",
    image: windows,
    body: "Windows Body"
  },
  {
    head: "Door Jams",
    image: doorJams,
    body: "Door Jams Body"
  },
  {
    head: "Clean Rims",
    image: cleanRims,
    body: "Clean Rims Body"
  },
  {
    head: "Tire Shine",
    image: tireShine,
    body: "Clean Rims Body"
  },
  {
    head: "Vacuum",
    image: vacuum,
    body: "Vacuum Body"
  },
  {
    head: "Steam",
    image: steam,
    body: "Dust Body"
  },
]


const FullDetail = () => {
  return (
    <MotherDiv>
      <NavBar />
      <Container>
        <FullBanner />

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

export default FullDetail;

const MotherDiv = styled.div``

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
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