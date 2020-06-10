import React from 'react';
import Layout from '../components/layout';
import CauseCard from '../components/cause-card';
import { graphql } from 'gatsby';
import { Image } from '../interfaces';
import styled from '@emotion/styled';

interface Props {
  data: {
    allCategoriesYaml: {
      nodes: Array<{
        id: string;
        description: string;
        image: Image;
      }>;
    };
  };
}

const TextSection = styled.div`
  text-align: center;
`;

const SupportedCausesPage: React.FC<Props> = props => {
  const categories = props.data.allCategoriesYaml.nodes;
  return (
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
  );
};

export const query = graphql`
query {
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
