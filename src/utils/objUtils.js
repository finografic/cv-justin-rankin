// POJO = "Plain Old Javascript Object"
// REMEMBER JS Objects have inherent properties
// typeof ARRAY will return 'object',
// but below function can be used to determine TRUE Object!

export function isPOJO(arg) {
  if (arg == null || typeof arg !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(arg);
  if (proto == null) {
    return true; // `Object.create(null)`
  }
  return proto === Object.prototype;
}

// EXAMPLES:
// isPOJO({}); // true
// isPOJO(Object.create(null)); // true
// isPOJO(null); // false
// isPOJO(new Number(42)); // false

// ==================================================================== //

// returns a new object with the values at each key mapped using mapFn(value)
export function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

// EXAMPLE USE:
// const newObject = objectMap(myObject, (value) => {
//   return value * 2
// })

// ==================================================================== //

export function mergeArraysOfObjects(arrays, prop) {
  const merged = {};
  arrays.forEach((arr) => {
    arr.forEach((item) => {
      // eslint-disable-next-line prefer-object-spread
      merged[item[prop]] = Object.assign({}, merged[item[prop]], item);
    });
  });
  return Object.values(merged);
}

export function omitNull(obj) {
  Object.keys(obj)
    .filter((key) => obj[key] === null)
    .forEach((key) => delete obj[key]);
  return obj;
}

// NEW !! OBJECT UTILS (2020-08-28 )

export const deepClone = (value) => {
  function deepArray(collection) {
    return collection.map((value) => deepClone(value));
  }

  function deepObject(source) {
    const result = {};
    Object.keys(source).forEach((key) => {
      const value = source[key];
      result[key] = deepClone(value);
    }, {});
    return result;
  }

  if (typeof value !== 'object' || value === null) {
    return value;
  }
  if (Array.isArray(value)) {
    return deepArray(value);
  }
  return deepObject(value);
};
