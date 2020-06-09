import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import dimensions from '../../styles/dimensions';
import { css } from 'emotion';

const HeaderContainer = styled('nav')`
    padding-top: 3.75em;
    padding-bottom: 3em;
`;

const HeaderContent = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const RightHeader = styled.div`
  width: 100%;
  justify-content: flex-end;
`;

const HeaderLinks = styled('div')`
    display: grid;
    margin-top: 1.5rem;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2em;
    justify-content: flex-end;
    width: 100%;
    max-width: 600px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 18px;
            height: 3px;
            background: transparent;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }
    }

  @media(max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

const HamburgerMenuContainer = styled.div`
  float: right;
  margin-top: 1rem;
  @media(min-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`;

const SideNavContainer = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 30px;
  box-shadow: 5px 10px 20px grey;
`;

const SideNavLinks = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;
  a {
    color: currentColor;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 600;
    padding: 1rem;
    display: block;
    position: relative;
    transition: 0.3s;
    border-bottom: 3px solid transparent;

    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        width: 4rem;
        height: 3px;
        background: transparent;
        right: 50%;
        margin-right: -9px;
        transition: 100ms ease-in-out background;
    }
    &:hover {
      &:after {
          background: ${colors.blue500};
          transition: 100ms ease-in-out background;
      }
      }
    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`;

const Logo = css`
  width: 15em;
  img {
    object-fit: contain;
  }
`;

const XButton = styled.img`
  float: right;
  padding-right: 30px;
`;

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Supported Causes',
    link: '/supported-causes',
  },
  {
    name: 'About',
    link: '/about',
  },
];

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(
        relativePath: { eq: "assets/horizontal-logo.png" }
      ) {
        publicURL
      }

    menu: file(
        relativePath: { eq: "assets/menu.svg" }
      ) {
        publicURL
      }

      x: file(
        relativePath: { eq: "assets/x.svg" }
      ) {
        publicURL
      }
    }
  `);
  const [headerOpen, setHeaderStatus] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <img
              alt="logo"
              style={{ width: '15em', height: '5em' }}
              src={data.logo.publicURL}/>
          </Link>
          <RightHeader>
            <HeaderLinks className="menu-items">
              {
                links.map(link => (
                  <Link
                    key={link.link}
                    activeClassName="Link--is-active"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                ))
              }
            </HeaderLinks>
            <HamburgerMenuContainer>
              <img src={data.menu.publicURL} alt="Hamburger Menu" onClick={() => setHeaderStatus(prevState => !prevState)}/>
            </HamburgerMenuContainer>
          </RightHeader>
        </HeaderContent>
      </HeaderContainer>
      <SideNavContainer style={{ width: headerOpen ? 300 : 0 }}>
        <XButton src={data.x.publicURL} alt="Exit" onClick={() => setHeaderStatus(prevState => !prevState)}/>
        <SideNavLinks>
          {
            links.map(link => (
              <Link
                key={link.link}
                activeClassName="Link--is-active"
                to={link.link}
              >
                {link.name}
              </Link>
            ))
          }
        </SideNavLinks>
      </SideNavContainer>
    </>
  );
};

export default Header;
