/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require('gatsby-source-filesystem');

const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permaLink, layout } = node.frontmatter;
      let slug = permaLink;
      if (!slug) {
        slug = createFilePath({ node, getNode, basePath: 'content' });
      }

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });

      createNodeField({
        node,
        name: 'primaryCategory',
        value: node.frontmatter.categories[0] || '',
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              categories {
                id
              }
              excerpt
            }
            fields {
              layout
              slug
            }
          }
        }
      }
      allCategoriesYaml {
        nodes {
          id
          description
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    const { slug, layout } = node.fields;
    createPage({
      path: slug, // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'project'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
        primaryCategory: node.frontmatter.categories[0].id || '',
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // adds sourcemaps for tsx in dev mode
  if (stage === 'develop' || stage === 'develop-html') {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    });
  }
};
