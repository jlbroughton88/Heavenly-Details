import React from 'react';
import styled from "styled-components";

const Services = () => {
    return (
        <MotherDiv>
            <HeadRow>
                <HeadDiv>
                    <Head>Packages</Head>
                </HeadDiv>
            </HeadRow>
            <PackagesDiv>
                <Package>
                    <PackageHead>Basic</PackageHead>
                </Package>
                <Package>
                    <PackageHead>Interior</PackageHead>
                </Package>
                <Package>
                    <PackageHead>Ceramic</PackageHead>
                </Package>
                <Package>
                    <PackageHead>Express Detail</PackageHead>
                </Package>
            </PackagesDiv>

        </MotherDiv>
    )
}

export default Services;

const MotherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    background: #ffffff;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    @media(max-width: 750px) {
        height: 45%;
    }

    @media(max-width: 475px) {
        padding-bottom: 10%;
        padding-top: 6%;
    }

`

const HeadRow = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const HeadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    margin-left: 1.9%;


    @media(max-width: 950px) {
        margin-left: 5%;
    }

    @media(max-width: 600px) {
        margin-left: 8%;
    }

    @media(max-width: 500px) {
        width: initial;
        margin: 0;
        left: 0;
        padding: 3px 16px;
        border: 1px solid #008C96;
        border-left: none;
        background: #f8f9fb;
    }

`

const Head = styled.h3`
    font-size: 3rem;
    margin: 0;
    border-bottom: 1px solid #008C96;

    @media(max-width: 500px) {
        font-size: 2.6rem;
        border-bottom: none;
    }
`


// PACKAGES

const PackagesDiv = styled.div`
    height: 70%;
    width: 100%;
    display: grid;
    grid-template-rows: 215px;
    grid-template-columns: 22.5% 22.5% 22.5% 22.5%;
    grid-row-gap: 20px;
    grid-column-gap: 2.5%;

    @media(max-width: 600px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: 215px 215px;
    }

    @media(max-width: 500px) {
        grid-template-columns: 100%;
        grid-template-rows: 215px 215px 215px 215px;
    }
`

const Package = styled.div`
    background: #02cccc;
    max-width: 240px;
`

const PackageHead = styled.div`

`