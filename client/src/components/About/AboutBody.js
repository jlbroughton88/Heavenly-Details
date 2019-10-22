import React from 'react';
import Steam from "../images/photos/steam.jpg"
import styled from "styled-components";

const AboutBody = () => {
    return (
        <MotherDiv>
            <Container>
                <PictureDiv>
                    <Picture src={Steam} alt=""></Picture>
                </PictureDiv>

                <TextDiv>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales ultricies eros ut vehicula. Fusce consectetur mollis ligula, id rutrum massa egestas eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas finibus neque orci, euismod posuere felis ullamcorper a. Suspendisse tincidunt congue arcu. Cras dignissim elit rutrum commodo mollis. Vestibulum faucibus nisl at interdum blandit. Donec sodales ex vitae fringilla sodales. Sed posuere commodo sollicitudin. Cras sodales mi vel ante ultricies aliquam. Vestibulum pretium, nibh sit amet dictum volutpat, urna elit mollis massa, et lacinia arcu dolor in tortor. Sed sapien purus, rhoncus sed neque quis, <br /> <br /> blandit molestie massa. Fusce condimentum mattis lacus vel sagittis.
    
Donec aliquam quam quis diam congue scelerisque. Aenean cursus est est, imperdiet pulvinar erat scelerisque sed. Curabitur molestie elementum tortor, ut pretium lectus volutpat vitae. Phasellus vel iaculis ligula. Aenean ipsum nisi, convallis at aliquet in, laoreet vel mauris. Nulla ultrices ex ligula, quis aliquet ipsum interdum at. Sed tincidunt a urna eget blandit. Phasellus sodales interdum est vitae condimentum. Aliquam erat volutpat. Etiam pulvinar consequat metus quis auctor. Integer magna ipsum, finibus in gravida ac, tincidunt at purus. Sed vestibulum lobortis dignissim. Nullam aliquet felis quis magna malesuada, faucibus semper orci rutrum. Fusce sit amet feugiat dui, eu condimentum erat.</Text>
                </TextDiv>
            </Container>

        </MotherDiv>
    )
}

export default AboutBody;

const MotherDiv = styled.div`

    width: 100%;
`

const Container = styled.div`
    margin-bottom: 100px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const PictureDiv = styled.div`
    width: 500px;
    margin-bottom: 30px;

    @media(max-width: 799px) { width: 400px; }
    @media(max-width: 540px) { width: 350px; }
    @media(max-width: 450px) { width: 300px; }
    @media(max-width: 380px) { width: 275px; }
    
`

const Picture = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
`

const TextDiv = styled.div`
    width: 60%;

    @media(max-width: 625px) { width: 70% }
`

const Text = styled.p``
