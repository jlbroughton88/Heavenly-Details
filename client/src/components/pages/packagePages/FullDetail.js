import React from "react";
import FullBanner from "./FullComps/FullBanner";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import styled from "styled-components";

const FullDetail = () => {
  return (
    <MotherDiv>
      <NavBar />
      <Container>
        <FullBanner />
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

export default FullDetail;

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