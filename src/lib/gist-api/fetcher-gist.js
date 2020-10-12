(function () {
  'use strict';

  var contains = function (haystack, needle) {
    return haystack.indexOf(needle) > -1;
  };

  window
    .fetch('https://api.github.com/users/samcf/gists')

    // Parse JSON response.
    .then(function (response) {
      return response.json();
    })

    // Filter and sort the gists.
    /* eslint-disable no-prototype-builtins */
    .then(function (data) {
      return new window.Promise(function (resolve, reject) {
        var posts = data
          .filter(function (gist) {
            var files = gist.files;
            for (var file in files) {
              if (!files.hasOwnProperty(file)) {
                return false;
              }

              if (contains(files[file].filename, '.post')) {
                return true;
              }
            }

            return false;
          })
          .filter(function (gist) {
            return typeof gist !== 'undefined';
          })
          .sort(function (p, c) {
            return new Date(p.created_at) < new Date(c.created_at);
          });

        resolve(posts);
      });
    })
    /* eslint-enable no-prototype-builtins */

    // Fetch file contents from each gist.
    .then(function (gists) {
      var container = document.querySelector('#posts');

      gists.forEach(function (gist) {
        // create and append a gist placeholder
        var gistElement = document.createElement('div');
        gistElement.classList.add('gist');
        gistElement.classList.add('loading');
        gistElement.setAttribute('id', gist.id);

        // append the gist element to the containing element
        container.appendChild(gistElement);

        // for each file in the gist, parse the contents
        // (markdown, etc), and append as a new element to the
        // gistElement.
        var files = gist.files;
        for (var file in files) {
          // before fetching the gist file contents, let's create
          // an empty DOM node where our post will eventually be
          // inserted. this will help maintain order of the posts.
          var placeholder = document.createElement('div');
          placeholder.classList.add('content');

          switch (files[file].language) {
            case 'Markdown':
              placeholder.classList.add('markdown');
              break;
          }

          (function (gistElement, fileElement) {
            window
              .fetch(files[file].raw_url)
              .then(function (response) {
                return response.text();
              })
              .then(function (data) {
                return new Promise(function (resolve) {
                  var parsed = window.markdown.toHTML(data);
                  resolve(parsed);
                });
              })
              .then(function (html) {
                fileElement.innerHTML = html;
                gistElement.appendChild(fileElement);
                gistElement.classList.remove('loading');
              });
          })(gistElement, placeholder);

          break;
        }
      });
    })

    .catch(function (err) {});
})();
