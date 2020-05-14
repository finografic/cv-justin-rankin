import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from './Loader';

const Gist = ({ data: { loading, user } }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>{user.gist.name}</h1>
      <p>{user.gist.description}</p>
      <p>Created: {user.gist.createdAt}</p>
      <p>Updated: {user.gist.updatedAt}</p>
    </div>
  );
};

const GitQuery = gql`
  query GitQuery($user: String!, $gist: String!) {
    user(login: $user) {
      gist(name: $gist) {
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`;

export default graphql(GitQuery, {
  options: (props) => ({
    variables: {
      user: props.match.params.gistOwner,
      gist: props.match.params.gistName,
    },
  }),
})(Gist);
