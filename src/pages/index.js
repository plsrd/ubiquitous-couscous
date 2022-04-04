import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home'>
      <p>This is the forest where I practice my witchcraft</p>
      <StaticImage
        alt='a very evil forest'
        src='https://images.unsplash.com/photo-1607336652415-008df45f08a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      />
    </Layout>
  );
};

export default IndexPage;
