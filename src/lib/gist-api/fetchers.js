import fetch from 'node-fetch';

const GITHUB_USER = 'finografic';
const GITHUB_PASS = 'Git08808122';
const GITHUB_TOKEN = '86315cd93480040e329fabd47510e65bc9e29187';
const GITHUB_GIST_URL = 'https://api.github.com/gists/ee3153e0ea8e30a593aed0a3b50ef3f0';
/*
HEADERS:
Authorization : "Bearer 86315cd93480040e329fabd47510e65bc9e29187"
https://api.github.com/graphql
*/

export function createHeadersBasic() {
  const authEncoded = new Buffer(`${GITHUB_USER}:${GITHUB_PASS}`).toString('base64');
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${authEncoded}`,
  };
}

export function createHeadersToken() {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  };
}

export async function fetchGist(url = GITHUB_GIST_URL) {
  try {
    const json = await fetch(url).then((res) => res.json());
    return json;
  } catch (err) {
    console.log(err);
  }
}

/*
export async function fetchGist2(url) {
  return fetch(`${url}`, {
    // headers: createHeaders({ username, password }),
    headers: createHeadersToken(),
    method: 'POST',
    // body: JSON.stringify({ jql }),
  });
}
*/

/*
(async () => {
  try {
    let gist = await fetchGist(url);
    //let gist = await fetchGist2(url);
    console.log('>>> ', gist.files[`cv-content_en.json`].content);
  } catch (err) {
    console.log(err);
  }
})();
*/
