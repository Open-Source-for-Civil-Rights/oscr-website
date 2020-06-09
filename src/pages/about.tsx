import React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC<any> = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>
        OSCR was started by <a href="https://caelinsutch.com">Caelin Sutch</a> in response to a growing number of open source repositories related to the BLM movement,
        but no clear cut directory or way to see the various projects that needed help or contributors.
      </p>
    </Layout>
  );
};

export default AboutPage;
