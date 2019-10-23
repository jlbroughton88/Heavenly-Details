import React from "react";
import BasicBanner from "./BasicComps/BasicBanner"
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import styled from "styled-components";

import cleanWheels from "../../images/photos/includedPics/cleanWheels.jpg";
import windows from "../../images/photos/includedPics/windows.jpg";
import doorJams from "../../images/photos/includedPics/doorJams.jpg";
import vacuum from "../../images/photos/includedPics/vacuum.jpg";
import wash from "../../images/photos/includedPics/wash.jpg";
import tireShine from "../../images/photos/includedPics/tireShine.png";
import wax from "../../images/photos/includedPics/wax.jpg";
import shampooFloorMats from "../../images/photos/includedPics/shampooFloorMats.jpeg";
import conditionInterior from "../../images/photos/includedPics/conditionInterior.jpg";

const includedArr = [
  {
    head: "Wash Inside & Out",
    image: wash,
    body: "An intricately executed wash, inside and out. This will prep the car's paint and interior for the other washing processes."
  },
  {
    head: "Windows",
    image: windows,
    body: "They've never been so clear! Waterspots will be gone, and they'll be extremely smooth to the touch."
  },
  {
    head: "Door Jams",
    image: doorJams,
    body: "Often overlooked, this is one of the most dirty areas on your car. We'll clean 'em."
  },
  {
    head: "Clean Wheels",
    image: cleanWheels,
    body: "Brake dust and road debris can really ruin the look of wheels. Clean wheels are like clean shoes, they'll always look great."
  },
  {
    head: "Tire Shine",
    image: tireShine,
    body: "A fresh, showroom finish to your tires. They'll look new!"
  },
  {
    head: "Vacuum",
    image: vacuum,
    body: "All those crumbs and bits on your floor and seats? Gone."
  },
  {
    head: "Wax",
    image: wax,
    body: "Wax protects your paint, and makes it look great. Restoring that mirror-finish that you've missed!"
  },
  {
    head: "Shampoo Floor Mats",
    image: shampooFloorMats,
    body: "Floor mats are bound to get pretty dirty, that's a given...but they'll also one of the first pieces of the interior that you'll see. They might as well be clean too."
  },
  {
    head: "Protect and Condition",
    image: conditionInterior,
    body: "Your interior plastics and leather are exposed to the sun all day, they need protection. Along with protecting, your interior hard surfaces will be given a nice, fresh finish."
  },
]

const Basic = () => {
  return (
    <MotherDiv>
      <NavBar />
      <Container>
        <BasicBanner />
        <IncludesDiv>
          {includedArr.map(incl =>
            <IncludedBlock className="p1" key={incl.head}>
              <Head>
                {incl.head}
              </Head>
              <BodyDiv>
                <Body>
                  {incl.body}
                </Body>
              </BodyDiv>
              <Img src={incl.image}></Img>
            </IncludedBlock>
          )}
        </IncludesDiv>
      </Container>
      <Footer />
    </MotherDiv>
  )
}

export default Basic;

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
  // background: #dedede;
  border: lightgrey solid 2px;
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

const BodyDiv = styled.div`
  width: 70%;

  @media(max-width: 800px) {
    width: 80%;
  }
`

const Body = styled.p`
  margin: 0;
  margin-bottom: 20px;
`