import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import config from '../website-config';

const notFoundPage: React.FC<any> = () => {
  const pageTitle = 'You got lost!';
  const pageDescription = 'This is a dead link :(. Hope you find what you\'re looking for!';
  return (
    <div>
      <Helmet>
        <html lang={config.lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={config.siteUrl} />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snippets" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={config.siteUrl} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <Layout>
        <h1>Test</h1>
      </Layout>
    </div>
  );
};

export default notFoundPage;
