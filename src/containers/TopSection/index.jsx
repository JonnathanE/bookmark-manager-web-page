import React from 'react'
import tw from 'twin.macro'
import { NavBar } from '../../components/NavBar'
import HeroImage from '../../images/hero-bg.png'

const TopSectionContainer = tw.section`
    relative
`;

const Wrapper = tw.div`
    container
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    gap-12
    mt-14
    lg:mt-28
`;

const Content = tw.div`
    flex
    flex-1
    flex-col
    items-center
    lg:items-start
`;

const Title = tw.h2`
    text-bookmark-blue
    text-3xl
    md:text-4xl
    lg:text-5xl
    text-center
    lg:text-left
    mb-6
`;

const Description = tw.p`
    text-bookmark-grey
    text-lg
    text-center
    lg:text-left
    mb-6
`;

const ButtonContainer = tw.div`
    flex
    justify-center
    flex-wrap
    gap-6
`;

const ImageContainer = tw.div`
    flex
    justify-center
    flex-1
    mb-10
    md:mb-16
    lg:mb-0
    z-10
`;

const Image = tw.img`
    w-5/6
    h-5/6
    sm:w-3/4
    sm:h-3/4
    md:w-full
    md:h-full
`;

const RoundedRectangle = tw.div`
    hidden
    md:block
    overflow-hidden
    bg-bookmark-purple
    rounded-l-full
    absolute
    h-80
    w-2/4
    top-32
    right-0
    lg:-bottom-28
    lg:-right-36
`;

export const TopSection = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <TopSectionContainer>
                <Wrapper>
                    <Content>
                        <Title>A Simple Bookmark Manager</Title>
                        <Description>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                        </Description>
                        <ButtonContainer>
                            <button type='button' className='btn btn-purple hover:bg-bookmark-white hover:text-black'>Get it on Chrome</button>
                            <button type='button' className='btn btn-white hover:bg-bookmark-purple hover:text-white'>Get it on Firefox</button>
                        </ButtonContainer>
                    </Content>
                    <ImageContainer>
                        <Image src={HeroImage} alt='hero font' />
                    </ImageContainer>
                </Wrapper>
                <RoundedRectangle></RoundedRectangle>
            </TopSectionContainer>
        </>
    )
}

