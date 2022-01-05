import React from 'react'
import tw from 'twin.macro'
import { FaChevronDown } from "react-icons/fa"

const QuestionSectionContainer = tw.section`
    bg-bookmark-white 
    py-20
`;

const Wrapper = tw.div`
    container
`;

const Header = tw.div`
    sm:w-3/4 
    lg:w-5/12 
    mx-auto 
    px-2
`;

const Title = tw.h1`
    text-3xl 
    text-center 
    text-bookmark-blue
`;

const Desc = tw.p`
    text-center 
    text-bookmark-grey 
    mt-4
`;

const Items = tw.div`
    flex 
    flex-col 
    mx-auto 
    mt-12 
    sm:w-3/4 
    lg:w-5/12
`;

const Item = tw.div`
    flex 
    items-center 
    border-b 
    py-4
`;

const ItemTitle = tw.span`
    flex-1
`;

const QuestionSection = () => {
    return (
        <QuestionSectionContainer>
            <Wrapper>
                <Header>
                    <Title>Frequently Asked Questions</Title>
                    <Desc>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</Desc>
                </Header>
                <Items>
                    <Item>
                        <ItemTitle>What is a Bookmark?</ItemTitle>
                        <FaChevronDown className='text-bookmark-purple'/>
                    </Item>
                    <Item>
                        <ItemTitle>How can I request a new browser?</ItemTitle>
                        <FaChevronDown className='text-bookmark-purple'/>
                    </Item>
                    <Item>
                        <ItemTitle>Is there a mobile app?</ItemTitle>
                        <FaChevronDown className='text-bookmark-purple'/>
                    </Item>
                    <Item>
                        <ItemTitle>What about other Chromium browsers?</ItemTitle>
                        <FaChevronDown className='text-bookmark-purple'/>
                    </Item>
                </Items>
            </Wrapper>
        </QuestionSectionContainer>
    )
}

export default QuestionSection
