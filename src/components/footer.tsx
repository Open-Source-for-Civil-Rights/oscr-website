import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import GatsbyImage from 'gatsby-image';

const FooterContainer = styled('div')`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`;

const SocialContainer = styled.div`
flex-direction: row;
display: flex;
`;

const FooterAuthor = styled('a')`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(
        relativePath: { eq: "assets/horizontal-logo.png" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }

    githubIcon: file(
        relativePath: { eq: "assets/github-icon.png" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <FooterContainer>
      <SocialContainer>
        <Link to="/">
          <GatsbyImage
            alt="logo" style={{ width: '10rem', height: '4rem' }} imgStyle={{ objectFit: 'contain' }}
            fixed={data.logo.childImageSharp.fixed}/>
        </Link>
        <a href="https://github.com/Open-Source-for-Civil-Rights">
          <GatsbyImage
            style={{ height: '2rem',
              marginTop: '1rem',
              marginLeft: '1rem' }}
            fixed={data.githubIcon.childImageSharp.fixed} imgStyle={{ objectFit: 'contain' }}
            alt="Github Icon"/>
        </a>
      </SocialContainer>
      <FooterAuthor href="https://caelinsutch.com">
        © 2020 — Designed & developed by Caelin Sutch
      </FooterAuthor>
    </FooterContainer>
  );
};

export default Footer;
