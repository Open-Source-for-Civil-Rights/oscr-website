import React from 'react';
import Layout from '../components/layout';
import CauseCard from '../components/cause-card';
import { graphql } from 'gatsby';
import { Image } from '../interfaces';
import styled from '@emotion/styled';
import config from '../website-config';
import { Helmet } from 'react-helmet';

interface Props {
  path: string;
  data: {
    allCategoriesYaml: {
      nodes: Array<{
        id: string;
        description: string;
        image: Image;
      }>;
    };
    siteBanner: Image;
  };
}

const TextSection = styled.div`
  text-align: center;
`;

const SupportedCausesPage: React.FC<Props> = props => {
  const title = 'Supported Causes';
  const description = 'OSCR supports various social justice fights and movements, from LGBTQ rights to BLM.';
  const categories = props.data.allCategoriesYaml.nodes;
  const pageUrl = `${config.siteUrl}/${props.path}`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.siteBanner.childImageSharp.fixed.src}`}
        />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={pageUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.siteBanner.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <Layout>
        <TextSection>
          <h1>Causes We Support</h1>
          <p>Our projects encompass a variety of social justice causes. Here are a few of them.</p>
        </TextSection>
        {
          categories.map(category => (
            <CauseCard
              key={category.id}
              title={category.id}
              description={category.description}
              image={category.image.childImageSharp.fluid}
              link="https://google.com"/>
          ))
        }
      </Layout>
    </>
  );
};

export const query = graphql`
query {
  siteBanner: file(relativePath: { eq: "assets/cover-card.png" }) {
    childImageSharp {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
  allCategoriesYaml {
    nodes {
      id
      description
      image {
        childImageSharp {
          fluid(maxWidth: 3720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;

export default SupportedCausesPage;
