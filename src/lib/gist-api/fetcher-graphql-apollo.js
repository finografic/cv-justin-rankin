/* @flow */

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { base } from '../config';

const GIST_USER = 'finografic';

const GistsList = ({ data: { loading, user } }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <ul>
      {user.gists.nodes.map((node) => (
        <li key={node.id}>
          <Link to={`${base}/gist/${GIST_USER}/${node.name}`}>{node.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const GitQuery = gql`
  query GitQuery($user: String!) {
    user(login: $user) {
      gists(first: 3) {
        nodes {
          id
          name
          description
          createdAt
        }
      }
    }
  }
`;

export default graphql(GitQuery, {
  options: {
    variables: {
      user: GIST_USER,
    },
  },
})(GistsList);
