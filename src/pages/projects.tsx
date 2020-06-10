import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ProjectCard from '../components/project-card';
import { Image } from '../interfaces';
import styled from '@emotion/styled';
import Select from 'react-dropdown-select';
import { Helmet } from 'react-helmet';
import config from '../website-config';

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
  location: Location;
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          title: string;
          categories: Array<{
            id: string;
          }>;
          excerpt: string;
          image: Image;
        };
        fields: {
          slug: string;
          primaryCategory: string;
        };
      }>;
    };
    siteBanner: Image;
    allCategoriesYaml: {
      nodes: Array<{
        id: string;
      }>;
    };
  };
}

const ProjectPage: React.FC<props> = props => {
  const title = 'Projects';
  const description = 'OSCR projects that are fighting for social justice in our communities and worldwide.';
  const pageUrl = `${config.siteUrl}/${props.path}`;

  const allTags = props.data.allCategoriesYaml.nodes.concat([{ id: 'All' }]);
  const { location } = props;
  // @ts-expect-error
  const { state = {} } = location;
  const { defaultFilter } = state;
  let defaultValue: { id: string };
  if (defaultFilter) {
    defaultValue = { id: defaultFilter };
  } else {
    defaultValue = { id: 'All' };
  }

  const allPosts = props.data.allMarkdownRemark.nodes;
  const [posts, setPosts] = useState(sortByCategory(defaultValue.id));

  function sortByCategory(sortValue: string) {
    return allPosts.filter(post => {
      if (sortValue === 'All') {
        return true;
      }

      return post.frontmatter.categories.filter(category => category.id === sortValue).length !== 0;
    });
  }

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
        <TextSection >
          <h1>Projects</h1>
          <h4>Projects that are currently in progress or being maintained by the community</h4>
          <p>Have a project you want to see here? File a pull request or issue at our <a href="ttps://github.com/Open-Source-for-Civil-Rights">Github</a>.</p>
          <SelectContainer>
            <Select
              clearable={false}
              values={[defaultValue]}
              options={allTags}
              labelField="id"
              valueField="id"
              onChange={value => setPosts(sortByCategory(value[0].id))}
            />
          </SelectContainer>
        </TextSection>
        {
          posts.length === 0 ?
            <h4 style={{ color: 'grey', fontWeight: 'normal', textAlign: 'center' }}>Nothing registered yet!</h4> :
            posts.map(post => (
              <ProjectCard
                key={post.fields.slug}
                category={post.fields.primaryCategory}
                title={post.frontmatter.title}
                description={post.frontmatter.excerpt}
                slug={post.fields.slug}
                image={post.frontmatter.image.childImageSharp.fluid}
              />
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
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        excerpt
        categories {
          id
        }
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
        primaryCategory
      }
    }
  }
  allCategoriesYaml {
    nodes {
      id
    }
  }
}
`;

export default ProjectPage;
