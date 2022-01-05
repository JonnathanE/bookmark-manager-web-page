import React from 'react'
import tw from 'twin.macro'
import { FaTwitter, FaFacebook } from "react-icons/fa"
import Logo from '../../images/logo-bookmark-white.png'

const FooterSectionContainer = tw.section`
bg-bookmark-blue py-8
`;

const Wrapper = tw.div`
container flex flex-col md:flex-row items-center
`;

const Left = tw.div`
flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12
`;

const Items = tw.ul`
flex text-white uppercase gap-12 text-xs
`;

const Item = tw.li`
cursor-pointer
`;

const Right = tw.div`
flex gap-10 mt-12 md:mt-0
`;

const FooterSection = () => {
    return (
        <FooterSectionContainer>
            <Wrapper>
                <Left>
                    <img src={Logo} alt='logo'/>
                    <Items>
                        <Item>Features</Item>
                        <Item>Pricing</Item>
                        <Item>Contact</Item>
                    </Items>
                </Left>
                <Right>
                    <FaTwitter className='text-white text-2xl'/>
                    <FaFacebook className='text-white text-2xl'/>
                </Right>
            </Wrapper>
        </FooterSectionContainer>
    )
}

export default FooterSection
