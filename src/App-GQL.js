import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/*
query {
  user(login:"finografic"){
    gist(name:"251d6d610f0c19ba6b83029c4d620826" ) {
      name,
      description,
      createdAt,
      updatedAt,
      files{
        name
        text
      }
    }
  }
}
*/

const gqlQuery = gql`
  query {
    user(login: "finografic") {
      gist(name: "251d6d610f0c19ba6b83029c4d620826") {
        name
        description
        createdAt
        updatedAt
        files {
          name
          text
        }
      }
    }
  }
`;

const gqlData = graphql(gqlQuery);

function App(props) {
  // let { state } = React.useContext(ContextGlobal);
  let state = {
    locale: 'en',
  };
  return (
    <React.Fragment>
      <header className="cv-header">
        <div className="col-title">
          <h1>Justin Rankin</h1>
          <h2>Full-stack developer</h2>
          <pre>{gqlData}</pre>
        </div>
      </header>
    </React.Fragment>
  );
}

export default App;
