import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../../styles/colors';
import dimensions from '../../styles/dimensions';

const HeaderContainer = styled('nav')`
    padding-top: 3.75em;
    padding-bottom: 3em;
`;

const HeaderContent = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const HeaderLinks = styled('div')`
    display: grid;
    margin-top: 1.5rem;
    grid-template-columns: repeat(3, auto);
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
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <img alt="logo" style={{ width: '50%' }} src="../../../static/horizontal-logo.png"/>
      </Link>
      <HeaderLinks>
        <Link
          activeClassName="Link--is-active"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          activeClassName="Link--is-active"
          to="/supported-causes"
        >
          Supported Causes
        </Link>
        <Link
          activeClassName="Link--is-active"
          to="/about"
        >
          About
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
