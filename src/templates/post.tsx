import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

interface PostProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
  pageContext: {
    slug: string;
    primaryTag: string;
  };
}

const PageTemplate: React.FC<PostProps> = props => {
  const post = props.data.markdownRemark;

  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <div>Test</div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

export default PageTemplate;
