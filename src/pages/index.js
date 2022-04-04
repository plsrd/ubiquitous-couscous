import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>This is the forest where I practice my witchcraft</p>
      <StaticImage alt='a very evil forest' src='../images/trees.webp' />
    </Layout>
  );
};

export default IndexPage;
