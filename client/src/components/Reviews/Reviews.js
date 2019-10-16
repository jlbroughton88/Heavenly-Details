import React from 'react'
import styled from "styled-components";
import "./Reviews.scss"

const Reviews = () => {
    return (
        <MotherDiv>
            <Container>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <Head>Cathy G.</Head>
                            <Body>Great job on my car! Looked brand new! Easy to schedule and showed up right on time! Highly recommend!</Body>
                        </div>
                        <div className="slide">
                            <Head>Kayla S.</Head>
                            <Body>Anthony and team are always on time, professional, well priced and keep my car looking brand new! I’ve used a number of detailers and they are the best by far and they come to my office, which makes it even better! Highly recommend.</Body>
                        </div>
                        <div className="slide">
                            <Head>Christy E.</Head>
                            <Body>Always do a prompt and thorough job! Easy to schedule and they proactively reach out as well!</Body>
                        </div>
                        <div className="slide">
                            <Head>Diana W.</Head>
                            <Body>Anthony came and detailed my husbands car as a surprise to him. My husband is not the cleanest and Anthony did an amazing job! When I got in there it smelled brand new and was a complete transformation. Will definitely use them again in the future!</Body>
                        </div>
                        <div className="slide">
                            <Head>Jessica T.</Head>
                            <Body>I feel like I’m always going a million directions, so it was a great relief that Anthony was able to come to my home and clean my car while I carried on with my busy schedule. My car looks great and I will be using him again!</Body>
                        </div>
                        <div className="slide">
                            <Head>Marcella M.</Head>
                            <Body>Anthony did a great job detailing one of our cars. My husband had spilled coffee smoothies on the passenger seat and Anthony got everything out. Looks brand new! Great service! Great value! Thank you again!</Body>
                        </div>
                        <div className="slide">
                            <Head>Brittany C.</Head>
                            <Body>Absolutely awesome! My car was spotless when I left and for such a great price. Didn’t have to do anything but drop it off and get it when I was done working. Great guys, too!</Body>
                        </div>
                        <div className="slide">
                            <Head>Dpak D.</Head>
                            <Body>Anthony has been washing our cars since 2 Years now. It’s obvious that we are very happy about his services. He is punctual and does a very neat job. His attention to details is very good. Would recommend him anyday! Thanks Anthony!</Body>
                        </div>
                        <div className="slide">
                            <Head>Dpak D.</Head>
                            <Body>Anthony has been washing our cars since 2 Years now. It’s obvious that we are very happy about his services. He is punctual and does a very neat job. His attention to details is very good. Would recommend him anyday! Thanks Anthony!</Body>
                        </div>
                        <div className="slide">
                            <Head>Lynn H.</Head>
                            <Body>Anthony and his team came to my office and my car looks absolutely amazing! So happy I did this and couldn’t be more impressed. Anthony is very professional but still personable. His work is outstanding!</Body>
                        </div>
                        <div className="slide">
                            <Head>Helen R.</Head>
                            <Body>They are the best!!! My car looks brand new after Anthony does his magic!!! Thank you for always giving 110%!!</Body>
                        </div>
                        <div className="slide">
                            <Head>Cayla P.</Head>
                            <Body>Heavenly Details was recommended by a friend and didn’t disappoint. Appointment was scheduled quick, very convenient- no hassle, and did a great job.</Body>
                        </div>
                        <div className="slide">
                            <Head>Deanna C.</Head>
                            <Body>They do such a great job! Every time he comes to my office, I always have him do my car. Anthony makes it look brand new!</Body>
                        </div>
                        <div className="slide">
                            <Head>Lisa A.</Head>
                            <Body>Did an awesome job! Got all of the dog hair and dirt out of my car! It has not looked this good since the day I got it!</Body>
                        </div>
                        <div className="slide">
                            <Head>Kate T.</Head>
                            <Body>Incredible job!!! Thank you guys so much! Great work at a super fair price</Body>
                        </div>
                    </div>
                </div>
            </Container>
        </MotherDiv>
    )
}

export default Reviews;

const MotherDiv = styled.div`
    display: flex;
    align-items: center;
    height: 400px;
    width: 600px;

    @media(max-width: 630px) {
        height: 380px;
        width: 500px
    }

    @media(max-width: 530px) {
        height: 380px;
        width: 460px
    }

    @media(max-width: 500px) {
        height: 380px;
        width: 400px;
    }

    @media(max-width: 430px) {
        width: 350px;
    }

    @media(max-width: 375px) {
        width: 310px;
    }

`

const Container = styled.div`
width: 100%;
`

const Head = styled.h3``

const Body = styled.p`
padding-left: 5px
border-left: 2px #008C96 solid;

@media(max-width: 630px) {
    font-size: 0.95rem;
}

@media(max-width: 500px) {
    font-size: 0.9rem;
}
`