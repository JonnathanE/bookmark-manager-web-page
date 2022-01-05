import React from 'react'
import tw, { styled } from 'twin.macro'

const CardContainer = styled.div(({ positionTop, positionMid, positionBot }) => [
    tw`flex flex-col rounded-md shadow-md`,
    positionTop && tw`lg:mb-16`,
    positionMid && tw`lg:my-8`,
    positionBot && tw`lg:mt-16`,
]);

const CardHead = tw.div`
p-6 flex flex-col items-center
`;

const Title = tw.h3`
mt-5 mb-2 text-bookmark-blue text-lg
`;

const Desc = tw.p`
mb-2 text-bookmark-grey font-light
`;

const Line = tw.hr`
border-b border-bookmark-white
`;

const CardFooter = tw.div`
flex p-6
`;

const Card = ({ image, title, desc, positionTop, positionMid, positionBot }) => {
    return (
        <CardContainer {...{ positionTop, positionMid, positionBot }}>
            <CardHead>
                <img src={image} alt={title} />
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </CardHead>
            <Line></Line>
            <CardFooter>
                <button type="button" class="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black">
                    Add & Install Extension
                </button>
            </CardFooter>
        </CardContainer>
    )
}

export default Card
