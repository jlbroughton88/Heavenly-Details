import React from "react";
import BasicBanner from "./BasicComps/BasicBanner"
import styled from "styled-components";

const Basic = () => {
  return(
    <MotherDiv>
        <BasicBanner/>
    </MotherDiv>
  )
}

export default Basic;

const MotherDiv = styled.div``