import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ProjectCard from '../components/project-card';
import { Image } from '../interfaces';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';

const TextSection = styled.div`
  text-align: center;
`;

const SelectContainer = styled.div`
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
`;
interface props {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          title: string;
          category: string;
          excerpt: string;
          image: Image;
        };
        fields: {
          slug: string;
        };
      }>;
    };
    allTags: {
      group: Array<{
        tag: string;
        totalCount: number;
      }>;
    };
  };
}

const ProjectPage: React.FC<props> = props => {
  console.log(props);
  const allPosts = props.data.allMarkdownRemark.nodes;
  const [posts, setPosts] = useState(allPosts);
  const allTags = props.data.allTags.group.concat([{ tag: 'All', totalCount: 1 }]);

  function sortByCategory(sortValue: string) {
    const sortedPosts = allPosts.filter(post => {
      if (sortValue === 'All') {
        return true;
      }

      return post.frontmatter.category === sortValue;
    });
    setPosts(sortedPosts);
  }

  return (
    <Layout>
      <TextSection >
        <h1>Projects</h1>
        <h4>Projects that are currently in progress or being maintained by the community</h4>
        <SelectContainer>
          <Select
            clearable={false}
            values={[{ tag: 'All', totalCount: 1 }]}
            options={allTags}
            labelField="tag"
            valueField="tag"
            onChange={value => sortByCategory(value[0].tag)}
          />
        </SelectContainer>
      </TextSection>
      {
        posts.map(post => (
          <ProjectCard
            key={post.fields.slug}
            category={post.frontmatter.category}
            title={post.frontmatter.title}
            description={post.frontmatter.excerpt}
            slug={post.fields.slug}
            image={post.frontmatter.image.childImageSharp.fluid}
          />
        ))
      }
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        excerpt
        category
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
  allTags: allMarkdownRemark {
    group(field: frontmatter___category) {
      tag: fieldValue
    }
  }
}
`;

export default ProjectPage;
