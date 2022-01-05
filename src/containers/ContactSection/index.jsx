import React from 'react'
import tw from 'twin.macro'

const ContactSectionContainer = tw.section`
bg-bookmark-purple text-white py-20
`;

const Wrapper = tw.div`
    container
`;

const Content = tw.div`
sm:w-3/4 lg:w-2/4 mx-auto
`;

const Desc = tw.p`
font-light uppercase text-center mb-8
`;

const Title = tw.h1`
text-3xl text-center
`;

const FormWrapper = tw.div`
flex flex-col sm:flex-row gap-6 mt-8
`;

const Input = tw.input`
focus:outline-none flex-1 px-2 py-3 rounded-md text-black
`;

const ContactSection = () => {
    return (
        <ContactSectionContainer>
            <Wrapper>
                <Content>
                    <Desc>35,000+ ALREADY JOINED</Desc>
                    <Title>Stay up-to-date with what we’re doing</Title>
                    <FormWrapper>
                        <Input type="text" placeholder="Enter your email address"/>
                        <button type="button" className='btn bg-bookmark-red hover:bg-bookmark-white hover:text-black'>
                            Contact Us
                        </button>
                    </FormWrapper>
                </Content>
            </Wrapper>
        </ContactSectionContainer>
    )
}

export default ContactSection
