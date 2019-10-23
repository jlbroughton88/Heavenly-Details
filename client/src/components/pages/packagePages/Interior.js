import React from "react";
import InteriorBanner from "./InteriorComps/InteriorBanner";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import styled from "styled-components";
import vacuum from "../../images/photos/includedPics/vacuum.jpg";
import cleanInterior from "../../images/photos/includedPics/cleanInterior.jpeg";
import shampooFloorMats from "../../images/photos/includedPics/shampooFloorMats.jpeg";
import steam from "../../images/photos/includedPics/steam.jpg";
import dust from "../../images/photos/includedPics/dust.jpg";
import conditionInterior from "../../images/photos/includedPics/conditionInterior.jpg";

const includedArr = [
  {
    head: "Deep Clean",
    image: cleanInterior,
    body: "An intricate clean-up will prep your interior for the other processes that we will complete."
  },
  {
    head: "Shampoo",
    image: shampooFloorMats,
    body: "Floor mats are bound to get pretty dirty, that's a given...but they'll also one of the first pieces of the interior that you'll see. They might as well be clean too."
  },
  {
    head: "Steam",
    image: steam,
    body: "Steam gets rid of all those seemingly stained areas."
  },
  {
    head: "Vacuum",
    image: vacuum,
    body: "All those crumbs and bits on your floor and seats? Gone."
  },
  {
    head: "Dust",
    image: dust,
    body: "Dust particles can build up over time and really become an eye-sore. Not to mention aggitate your allergies. We'll clean those up for you."
  },
  {
    head: "Protect & Condition",
    image: conditionInterior,
    body: "Your interior plastics and leather are exposed to the sun all day, they need protection. Along with protecting, your interior hard surfaces will be given a nice, fresh finish."
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
  border-radius: 5px;
  border: lightgrey solid 2px;
  
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