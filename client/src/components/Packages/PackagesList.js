import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const PackagesList = () => {
    return (
        <MotherDiv>
            <PackagesDiv>

                <Package>
                    <PackageHeadDiv className="p1">
                        <PackageHead >
                            <Name>Basic</Name>
                            <Link to="/packages/basic">
                                <CallToAction>Learn more</CallToAction>
                            </Link>
                        </PackageHead>
                    </PackageHeadDiv>
                    <DetailListDiv>
                        <DetailList>
                            <Detail>Wash in and out</Detail>
                            <Detail>Windows</Detail>
                            <Detail>Door Jam</Detail>
                            <Detail>Clean Rims</Detail>
                            <Detail>Tires Shine</Detail>
                            <Detail>Vacuum</Detail>
                            <Detail>Wax</Detail>
                            <Detail>Shampoo Floor Mats</Detail>
                            <Detail>Condition Interior</Detail>
                        </DetailList>
                    </DetailListDiv>
                </Package>


                <Package>
                    <PackageHeadDiv className="p2">
                        <PackageHead >
                            <Name>Express</Name>
                            <Link to="/packages/express">
                                <CallToAction>Learn more</CallToAction>
                            </Link>
                        </PackageHead>
                    </PackageHeadDiv>
                    <DetailListDiv>
                        <DetailList>
                            <Detail>Wash in and out</Detail>
                            <Detail>Windows</Detail>
                            <Detail>Door Jam</Detail>
                            <Detail>Clean Rims</Detail>
                            <Detail>Tires Shine</Detail>
                            <Detail>Vacuum</Detail>
                        </DetailList>
                    </DetailListDiv>
                </Package>


                <Package>
                    <PackageHeadDiv className="p3">
                        <PackageHead >
                            <Name>Interior</Name>
                            <Link to="/packages/interior">
                                <CallToAction>Learn more</CallToAction>
                            </Link>
                        </PackageHead>
                    </PackageHeadDiv>
                    <DetailListDiv>
                        <DetailList>
                            <Detail>Deep Clean</Detail>
                            <Detail>Shampoo</Detail>
                            <Detail>Steam</Detail>
                            <Detail>Vacuum</Detail>
                            <Detail>Dust</Detail>
                            <Detail>Protect and Condition (Leather, dash, etc..)</Detail>
                        </DetailList>
                    </DetailListDiv>
                </Package>


                <Package>
                    <PackageHeadDiv className="p4">
                        <PackageHead >
                            <Name>Full Detail</Name>
                            <Link to="/packages/fulldetail">
                                <CallToAction>Learn more</CallToAction>
                            </Link>
                        </PackageHead>
                    </PackageHeadDiv>
                    <DetailListDiv>
                        <DetailList>
                            <Detail>Wash in and out</Detail>
                            <Detail>Wax</Detail>
                            <Detail>Windows</Detail>
                            <Detail>Door Jam</Detail>
                            <Detail>Clean Rims</Detail>
                            <Detail>Tire Shine</Detail>
                            <Detail>Vacuum</Detail>
                            <Detail>Steam</Detail>
                            <Detail>Dust</Detail>
                        </DetailList>
                    </DetailListDiv>
                </Package>

            </PackagesDiv>
        </MotherDiv>
    )
}

export default PackagesList;

const MotherDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PackagesDiv = styled.div`
    height: 100%;
    width: 100%;
    display: inline-grid;

    grid-template-columns: 22.5% 22.5% 22.5% 22.5%;
    grid-gap: 30px;
    justify-content: center;
   
    @media(max-width: 1150px) {
        grid-template-columns: 50% 50%;
    }

    @media(max-width: 650px) {
        grid-template-columns: 100%;
    }
`

const Package = styled.div`

    min-width: 220px;
`

const PackageHeadDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 7%;
    padding-right: 7%;
    height: 88px;


    @media(max-width: 1150px) {
        max-width: initial;
    }

    @media(max-width: 650px) {
        max-width: initial;
    }
`

const PackageHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 88px;
`

const Name = styled.div`
    font-size: 1.5rem;
    margin-bottom: 5px;
`

const CallToAction = styled.button`
    -webkit-appearance: none;
    border-radius: 4px;
    outline: none;
    font-size: 0.8rem;
    border: 2px lightgrey solid;
    background: #ffffff;
    color: #008C96;
    border-radius: 4px;
    transition: all .15s ease-out;
    cursor: pointer;

    :focus{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }

    :hover{
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    }
`

const DetailListDiv = styled.div`
    width: 100%;
`

const DetailList = styled.ul`
    text-align: start;
    padding: 8%;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style-type: square;
    
    @media(max-width: 650px) {
        padding: 4%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

const Detail = styled.li`
    font-size: 1.1rem;
`