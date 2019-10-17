import React from 'react'
import styled from "styled-components"
import NavBar from "../NavBar";
import Footer from "../Footer";

let reviews = [
    {
        name: "Cathy G.",
        body: "Great job on my car! Looked brand new! Easy to schedule and showed up right on time! Highly recommend!"
    },
    {
        name: "Kayla S",
        body: "Anthony and team are always on time, professional, well priced and keep my car looking brand new! I’ve used a number of detailers and they are the best by far and they come to my office, which makes it even better! Highly recommend."
    },
    {
        name: "Christy E.",
        body: "Always do a prompt and thorough job! Easy to schedule and they proactively reach out as well!"
    },
    {
        name: "Diana W.",
        body: "Anthony came and detailed my husbands car as a surprise to him. My husband is not the cleanest and Anthony did an amazing job! When I got in there it smelled brand new and was a complete transformation. Will definitely use them again in the future!"
    },
    {
        name: "Jessica T.",
        body: "I feel like I’m always going a million directions, so it was a great relief that Anthony was able to come to my home and clean my car while I carried on with my busy schedule. My car looks great and I will be using him again!"
    },
    {
        name: "Marcella M.",
        body: "Anthony did a great job detailing one of our cars. My husband had spilled coffee smoothies on the passenger seat and Anthony got everything out. Looks brand new! Great service! Great value! Thank you again!"
    },
    {
        name: "Brittany C.",
        body: "Absolutely awesome! My car was spotless when I left and for such a great price. Didn’t have to do anything but drop it off and get it when I was done working. Great guys, too!"
    },
    {
        name: "Dpak D.",
        body: "Anthony has been washing our cars since 2 Years now. It’s obvious that we are very happy about his services. He is punctual and does a very neat job. His attention to details is very good. Would recommend him anyday! Thanks Anthony!"
    },
    {
        name: "Lynn H.",
        body: "Anthony and his team came to my office and my car looks absolutely amazing! So happy I did this and couldn’t be more impressed. Anthony is very professional but still personable. His work is outstanding!"
    },
    {
        name: "Helen R.",
        body: "They are the best!!! My car looks brand new after Anthony does his magic!!! Thank you for always giving 110%!!<"
    },
    {
        name: "Cayla P.",
        body: "Heavenly Details was recommended by a friend and didn’t disappoint. Appointment was scheduled quick, very convenient- no hassle, and did a great job."
    },
    {
        name: "Deanna C.",
        body: "They do such a great job! Every time he comes to my office, I always have him do my car. Anthony makes it look brand new!"
    },
    {
        name: "Lisa A.",
        body: "Did an awesome job! Got all of the dog hair and dirt out of my car! It has not looked this good since the day I got it!"
    },
    {
        name: "Kate T.",
        body: "Incredible job!!! Thank you guys so much! Great work at a super fair price."
    },
]

const Reviews = () => {
    return (
        <MotherDiv>
            <NavBar />
            <Prompt>
                <PromptHead>Customer Reviews</PromptHead>
                <PromptBody>Heres what our loyal customers think of Heavenly Details.</PromptBody>
            </Prompt>
            <ReviewsDiv>
                {reviews.map(review =>
                    <ReviewDiv key={review.name}>
                        <Name>{review.name}</Name>
                        <Body>{review.body}</Body>
                    </ReviewDiv >
                )}
            </ReviewsDiv>
            <Footer />
        </MotherDiv>
    )
}

export default Reviews;

const MotherDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Prompt = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: center;

    @media(max-width: 850px) {
        width: 70%;
    }
`

const PromptHead = styled.h2`
    margin: 0;
    margin-bottom: 20px;
`

const PromptBody = styled.p`
    margin: 0;
`

const ReviewsDiv = styled.div`
    margin-bottom: 50px;
    display: flex: 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 850px) {
        width:100%
    }
`

const ReviewDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 660px;
    margin-bottom: 30px;
    margin-top: 30px;
    padding: 30px;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    align-self: center;


    @media(max-width: 850px) {
        width: 70%;
        align-self: center;
        margin-left: auto;
        margin-right: auto;
    }
`


const Name = styled.h3`
    margin: 0;
    border-bottom: 2px #008C96 solid;
    width: 110px;
    padding-bottom: 5px;
    margin-bottom: 20px;
`

const Body = styled.p`
margin: 0;

`