export function filter_blacklist(obj, blacklist) {
  return Object.keys(obj)
    .filter(key => !blacklist.includes(key))
    .map(key =>
      Object.assign(
        {},
        {
          [key]: obj[key],
        }
      )
    )
    .reduce((res, o) => Object.assign(res, o), {});
}

export function filter_whitelist(obj, whitelist) {
  return Object.keys(obj)
    .filter(key => whitelist.includes(key))
    .map(key =>
      Object.assign(
        {},
        {
          [key]: obj[key],
        }
      )
    )
    .reduce((res, o) => Object.assign(res, o), {});
}

export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const emailToName = email => {
  var parts = email.split('@').shift();
  parts = parts.indexOf('.') && parts.split('.');
  var name = capitalize(parts[0]);
  if (parts[1] !== undefined) name = `${name} ${capitalize(parts[1])}`;
  return name;
};

export const isNumeric = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const routeChange = (route, state) => {
  // CLEAR STATE CACHE
  // if(!state.loaded){
  //     state.data = [];
  //     state.detail = [];
  //   }
  // if(state.loaded){
  //   state.loaded=false;
  //   state.data = [];
  //   state.detail = [];
  // }else{
  //   state.data = [];
  //   state.detail = [];
  // }
  // }else{
  //  if(location.ekystate.route.previous.key)
  // state.data = [];
  // state.detail = [];
  // BACK BUTTON ??
  var hasRoot = route.path.indexOf('/:id') > 0;
  if (hasRoot) {
    var root = route.path.split('/:id').shift();
    state.route.previous.root = root;
  } else {
    state.route.previous.root = false;
  }
  // console.log(route);
  // alert(99)
};
