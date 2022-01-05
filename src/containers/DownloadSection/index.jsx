import React from 'react'
import tw from 'twin.macro'
import Card from '../../components/Card'
import LogoChrome from '../../images/logo-chrome.svg'
import LogoFirefox from '../../images/logo-firefox.svg'
import LogoOpera from '../../images/logo-opera.svg'

const DownloadSectionContainer = tw.section`
    py-20 
    mt-20
`;

const DownloadHeading = tw.div`
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

const DownloadCards = tw.div`
    container
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-16
    max-w-screen-lg
    mt-16
`;

const DownloadSection = () => {
    return (
        <DownloadSectionContainer>
            <DownloadHeading>
                <Title>Download the extension</Title>
                <Desc>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</Desc>
            </DownloadHeading>
            <DownloadCards>
                <Card image={LogoChrome} title='Add to Chrome' desc='Minimum version 62' positionTop={true} />
                <Card image={LogoFirefox} title='Add to Firefox' desc='Minimum version 62' positionMid={true} />
                <Card image={LogoOpera} title='Add to Opera' desc='Minimum version 62' positionBot={true} />
            </DownloadCards>
        </DownloadSectionContainer>
    )
}

export default DownloadSection
