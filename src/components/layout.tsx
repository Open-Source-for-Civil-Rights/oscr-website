import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import globalStyles from '../styles/global';
import typeStyles from '../styles/typography';
import dimensions from '../styles/dimensions';
import Footer from './footer';
import Header from './nav/header';
import '../styles/fonts.scss';
import { Helmet } from 'react-helmet';
import config from '../website-config';

const LayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }

    .Layout__content {
        padding-bottom: 5em;
    }
`;

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
            query {
              siteBanner: file(relativePath: { eq: "assets/cover-card.png" }) {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
        `}
    render={() => (
      <>
        <Helmet>
          <html lang={config.lang} />
          {config.googleSiteVerification && (
            <meta
              name="google-site-verification"
              content={config.googleSiteVerification}
            />
          )}
        </Helmet>
        <LayoutContainer className="div">
          <Global styles={[globalStyles, typeStyles]} />
          <div className="Layout">
            <Header />
            <main className="Layout__content">
              {children}
            </main>
            <Footer />
          </div>
        </LayoutContainer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
