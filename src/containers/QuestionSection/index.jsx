import React, { useState } from 'react'
import tw from 'twin.macro'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { questionData } from '../../data'

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
    cursor-pointer
`;

const Question = tw.span`
    flex-1
`;

const Dropdown = tw.div`
    mb-3
    border-b
    border-l
    border-r
    transition
    ease-in-out 
    duration-1000
`;

const Answer = tw.p`
    text-bookmark-purple
    p-3
`;

const QuestionSection = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <QuestionSectionContainer>
            <Wrapper>
                <Header>
                    <Title>Frequently Asked Questions</Title>
                    <Desc>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</Desc>
                </Header>
                <Items>
                    {questionData.map((item, index) => (
                        <>
                            <Item onClick={() => toggle(index)} key={index}>
                                <Question>{item.question}</Question>
                                {clicked === index ?
                                    <FaChevronUp className='text-bookmark-purple' />
                                    : <FaChevronDown className='text-bookmark-purple' />
                                }
                            </Item>
                            {clicked === index ?
                                (
                                    <Dropdown>
                                        <Answer>{item.answer}</Answer>
                                    </Dropdown>
                                )
                                : null
                            }
                        </>
                    ))}
                    <button type="button" class="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black">
                        More Info
                    </button>
                </Items>
            </Wrapper>
        </QuestionSectionContainer>
    )
}

export default QuestionSection
