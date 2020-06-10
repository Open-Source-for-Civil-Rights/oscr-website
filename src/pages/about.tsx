import React from 'react';
import Layout from '../components/layout';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import config from '../website-config';

const AboutPage: React.FC<any> = () => (
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
    render={data => {
      const title = 'About Us';
      const description = 'About the Open Source for Civil Rights Organization';
      return (
        <>
          <Helmet>
            <html lang={config.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:site_name" content={config.title} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${config.siteUrl}/about`} />
            <meta
              property="og:image"
              content={`${config.siteUrl}${data.siteBanner.childImageSharp.fixed.src}`}
            />
            {config.facebook && (
              <meta property="article:publisher" content={config.facebook} />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:url" content={`${config.siteUrl}/about`} />
            <meta
              name="twitter:image"
              content={`${config.siteUrl}${data.siteBanner.childImageSharp.fixed.src}`}
            />
            {config.twitter && (
              <meta
                name="twitter:site"
                content={`@${config.twitter.split('https://twitter.com/')[1]}`}
              />
            )}
          </Helmet>
          <Layout>
            <h1>About</h1>
            <p>
              OSCR was started by <a href="https://caelinsutch.com">Caelin Sutch</a> in response to a growing number of open source repositories related to the BLM movement,
              but no clear cut directory or way to see the various projects that needed help or contributors.
            </p>
          </Layout>
        </>
      );
    }}
  />
);

export default AboutPage;
