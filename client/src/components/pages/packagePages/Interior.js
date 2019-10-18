import React from "react";
import InteriorBanner from "./InteriorComps/InteriorBanner"
import styled from "styled-components";

const Interior = () => {
  return(
    <MotherDiv>
        <InteriorBanner/>
    </MotherDiv>
  )
}

export default Interior;

const MotherDiv = styled.div``