import React from 'react';
import photo from 'assets/img/justin.png';
import { Counter } from './features/counter/Counter';
import 'scss/style.scss';

// i18n :: REACT-INTL
// import { ContextGlobal } from 'lib/state';
// import { IntlProvider, addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl';
// import locale_en from 'react-intl/locale-data/en';
// import locale_es from 'react-intl/locale-data/es';
// import locale_en from 'config/locale-data/en';
// import locale_es from 'config/locale-data/es';
import messages_en from 'config/locales/en.json';
import messages_es from 'config/locales/es.json';

// TESTING:
import fetch from 'node-fetch';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const url_1 = 'https://gist.github.com/finografic/251d6d610f0c19ba6b83029c4d620826';
const url_2 =
  'https://gist.githubusercontent.com/finografic/251d6d610f0c19ba6b83029c4d620826/raw/1612c51ea4129d4866c690145a9d9dd3aa48039e/cv-content_en.json';
const url_3 = 'https://api.github.com/users/finografic/gists';
const url_4 = 'https://api.github.com/gists/251d6d610f0c19ba6b83029c4d620826';

export async function fetchGist(url) {
  try {
    const json = await fetch(url).then((res) => res.json());
    return json;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

/*
// API v4 - GraphQL !!
https://developer.github.com/v4/object/gist/
https://api.github.com/graphql
https://api.github.com/gists/251d6d610f0c19ba6b83029c4d620826
https://developer.github.com/v4/guides/using-the-explorer/
https://developer.github.com/v4/guides/forming-calls/#about-queries

CREATE TOKEN WITH PERMISSIONS/SCOPE:
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key

TOKEN:
86315cd93480040e329fabd47510e65bc9e29187

HEADERS:
Authorization : "Bearer 86315cd93480040e329fabd47510e65bc9e29187"

curl -H "Authorization: bearer 86315cd93480040e329fabd47510e65bc9e29187" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" https://api.github.com/graphql



query  {
  viewer {
    gist(name:"251d6d610f0c19ba6b83029c4d620826") {
      files {
        name
        text
      }
    }
  }
}


query {
  repository(owner: "finografic", name: "cv-justin-rankin") {
    id
    name
  }
}

{
  viewer {
    name
    gists(last: 3) {
      nodes {
        id
        name
        description
      }
    }
  }
}

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

query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}



*/

/*
function encodeBasicAuth(username, password) {
  return new Buffer(`${username}:${password}`).toString('base64');
}

function createHeaders({ username, password }) {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${encodeBasicAuth(username, password)}`,
  };
}

export async function fetchGist(url) {
  const username = 'finografic';
  const password = 'Git08808122';
  return fetch(`${url}`, {
    headers: createHeaders({ username, password }),
    method: 'POST',
    // body: JSON.stringify({ jql }),
  });
}
*/

(async () => {
  try {
    let gist = await fetchGist(url_4);
    console.log('>>> ', gist);
  } catch (err) {
    console.log(err);
  }
})();

// addLocaleData([...locale_en, ...locale_es]);
const messages = {
  'en': messages_en,
  'es': messages_es,
};

//COMMENT

// Containers
// const DefaultLayout = Loadable({ loader: () => import('./layouts/DefaultLayout'), loading });

function App(props) {
  // let { state } = React.useContext(ContextGlobal);
  let state = {
    locale: 'en',
  };
  return (
    <React.Fragment>
      {/* <IntlProvider locale={state.locale} messages={messages[state.locale]} textComponent={React.Fragment}> */}
      <IntlProvider locale="en">
        <header className="cv-header">
          <div className="col-photo">
            <img src={photo} alt="Jusitn Rankin" className="me" />
          </div>
          <div className="col-title">
            <h1>Justin Rankin</h1>
            <h2>Full-stack developer</h2>
          </div>
        </header>
        <Counter />
      </IntlProvider>
    </React.Fragment>
  );
}

export default App;
