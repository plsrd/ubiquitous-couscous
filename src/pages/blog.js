import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Blog = ({ data }) => {
  return (
    <Layout pageTitle='Blog Posts'>
      {data.allFile.nodes.map((node) => (
        <p>
          {node.name
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </p>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
