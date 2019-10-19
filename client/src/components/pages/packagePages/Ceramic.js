import React from "react";
import CeramicBanner from "./CeramicComps/CeramicBanner"
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import styled from "styled-components";

const Ceramic = () => {
  return (
    <MotherDiv>
      <NavBar />
      <Container>
        <CeramicBanner />
        <IncludesDiv>

          <IncludedBlock>
            <Head></Head>
            <Body></Body>
          </IncludedBlock>

        </IncludesDiv>
      </Container>
      <Footer />
    </MotherDiv>
  )
}

export default Ceramic;

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
`

const IncludedBlock = styled.div`
  background: grey;
`

const Head = styled.h3``

const Body = styled.p``

const Img = styled.img`
  width: 300px;
`