import React from 'react'
import tw from 'twin.macro'
import ImgFeatureOne from '../../images/illustration-features-tab-1.png'
import ImgFeatureTwo from '../../images/illustration-features-tab-2.png'
import ImgFeatureThree from '../../images/illustration-features-tab-3.png'

const FeatureSectionContainer = tw.section`
    bg-bookmark-white
    py-20
    mt-20
    lg:mt-60
`;

const FeatureHeading = tw.div`
    mx-auto 
    px-2
    sm:w-3/4
    lg:w-5/12
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

const FeatureOne = tw.div`
    relative 
    mt-20 
    lg:mt-24
`;

const FeatureWrapper = tw.div`
    container 
    flex flex-col 
    lg:flex-row items-center 
    justify-center gap-x-24
`;

const ImgContainer = tw.div`
    flex 
    flex-1 
    justify-center 
    z-10 mb-10 
    lg:mb-0
`;

const ImageFeature = tw.img`
    w-5/6 h-5/6 
    sm:w-3/4 
    sm:h-3/4 
    md:w-full 
    md:h-full
`;

const FeatureContent = tw.div`
    flex 
    flex-1 
    flex-col 
    items-center 
    lg:items-start
`;

const FeatureTitle = tw.h1`
    text-3xl 
    text-bookmark-blue
`;

const FeatureDesc = tw.p`
    text-bookmark-grey 
    my-4 text-center 
    lg:text-left 
    sm:w-3/4 
    lg:w-full
`;

const FeatureTwo = tw.div`
    relative
    mt-20
    lg:mt-52
`;

const FeatureWrapperTwo = tw.div`
    container 
    flex flex-col 
    lg:flex-row-reverse 
    items-center 
    justify-center 
    gap-x-24
`;


const RoundedRectangleLeft = tw.div`
    hidden
    lg:block
    overflow-hidden
    bg-bookmark-purple
    rounded-r-full
    absolute
    h-80
    w-2/4
    -bottom-24
    -left-36
`;

const RoundedRectangleRight = tw.div`
    hidden
    lg:block
    overflow-hidden
    bg-bookmark-purple
    rounded-l-full
    absolute
    h-80
    w-2/4
    -bottom-24
    -right-36
`;

const FeatureSection = () => {
    return (
        <FeatureSectionContainer>

            <FeatureHeading>
                <Title>Features</Title>
                <Desc>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</Desc>
            </FeatureHeading>

            <FeatureOne>
                <FeatureWrapper>
                    <ImgContainer>
                        <ImageFeature src={ImgFeatureOne} alt='feature one' />
                    </ImgContainer>
                    <FeatureContent>
                        <FeatureTitle>Bookmark in one click</FeatureTitle>
                        <FeatureDesc>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</FeatureDesc>
                        <button className='btn btn-purple hover:bg-bookmark-white hover:text-black'>More Info</button>
                    </FeatureContent>
                </FeatureWrapper>
                <RoundedRectangleLeft></RoundedRectangleLeft>
            </FeatureOne>

            <FeatureTwo>
                <FeatureWrapperTwo>
                    <ImgContainer>
                        <ImageFeature src={ImgFeatureTwo} alt='feature one' />
                    </ImgContainer>
                    <FeatureContent>
                        <FeatureTitle>Intelligent search</FeatureTitle>
                        <FeatureDesc>Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all of your bookmarks.</FeatureDesc>
                        <button className='btn btn-purple hover:bg-bookmark-white hover:text-black'>More Info</button>
                    </FeatureContent>
                </FeatureWrapperTwo>
                <RoundedRectangleRight></RoundedRectangleRight>
            </FeatureTwo>

            <FeatureTwo>
                <FeatureWrapper>
                    <ImgContainer>
                        <ImageFeature src={ImgFeatureThree} alt='feature one' />
                    </ImgContainer>
                    <FeatureContent>
                        <FeatureTitle>Share your bookmarks</FeatureTitle>
                        <FeatureDesc>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</FeatureDesc>
                        <button className='btn btn-purple hover:bg-bookmark-white hover:text-black'>More Info</button>
                    </FeatureContent>
                </FeatureWrapper>
                <RoundedRectangleLeft></RoundedRectangleLeft>
            </FeatureTwo>

        </FeatureSectionContainer>
    )
}

export default FeatureSection
