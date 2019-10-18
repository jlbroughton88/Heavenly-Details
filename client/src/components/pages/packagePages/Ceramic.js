import React from "react";
import CeramicBanner from "./CeramicComps/CeramicBanner"
import styled from "styled-components";

const Ceramic = () => {
  return(
    <MotherDiv>
        <CeramicBanner/>
    </MotherDiv>
  )
}

export default Ceramic;

const MotherDiv = styled.div``