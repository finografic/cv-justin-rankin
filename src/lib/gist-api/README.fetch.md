https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801

https://danlevy.net/you-may-not-need-axios/

https://blog.logrocket.com/axios-or-fetch-api/

```js
axios
  .all([axios.get('https://api.github.com/users/iliakan'), axios.get('https://api.github.com/users/taylorotwell')])
  .then(
    axios.spread((obj1, obj2) => {
      // Both requests are now complete
      console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
      console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
    })
  );
```
