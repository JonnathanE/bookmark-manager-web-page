import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import LogoSVG from '../../images/logo-bookmark.svg'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'
import { deviceSice } from '../responsive'
import styles from './menuStyles'

const Container = styled.nav`
    ${tw`
        container
        flex
        items-center
        py-4
        mt-4
        sm:mt-12
    `}
`;

const Logo = styled.div`
    ${tw`
        py-1
    `}
`;

const NavItems = tw.ul`
    list-none
    sm:flex
    flex-1 justify-end
    items-center
    gap-12
    text-white
    sm:text-bookmark-blue
    uppercase
    text-lg
    sm:text-xs
    font-medium
    sm:font-normal
`;

const NavItem = tw.li`
    cursor-pointer
    p-3.5
    transition-colors
    transition-duration[300ms]
    hover:text-bookmark-purple
`;

const Button = tw.button`
    bg-bookmark-red
    text-white
    rounded-md
    px-7
    py-3
    uppercase
`;

export const NavBar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSice.mobile });

    const navItems = (
        <NavItems>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>Contact</NavItem>
            <Button>Login</Button>
        </NavItems>
    );

    return (
        <Container>
            <Logo>
                <img src={LogoSVG} alt="logo bookmark" />
            </Logo>
            {isMobile && <Menu right styles={styles}>{navItems}</Menu>}
            {!isMobile && navItems}
        </Container>
    )
}