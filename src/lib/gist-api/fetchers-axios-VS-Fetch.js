/*

One of the main selling points of Axios is its wide browser support. Even old browsers like IE11 can run Axios without any issue. Fetch(), on the other hand, only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (you can see the full compatibly table on Can I use…).

*/

// axios ////////////////////////////////////////////////////////////

const options = {
  url: 'http://localhost/test.htm',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  data: {
    a: 10,
    b: 20,
  },
};

axios(options).then((response) => {
  console.log(response.status);
});

// OR, MULTIPLE:

axios
  .all([axios.get('https://api.github.com/users/iliakan'), axios.get('https://api.github.com/users/taylorotwell')])
  .then(
    axios.spread((obj1, obj2) => {
      // Both requests are now complete
      console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
      console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
    })
  );

// fetch() //////////////////////////////////////////////////////////

const urlFetch = 'http://localhost/test.htm';
const optionsFetch = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  body: JSON.stringify({
    a: 10,
    b: 20,
  }),
};

fetch(urlFetch, optionsFetch).then((response) => {
  console.log(response.status);
});
