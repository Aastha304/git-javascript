// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

function memoize(fn) {
    
    const cache = {};
    return function(...args) {
       const key = JSON.stringify(args);
       if (key in cache) {
        return cache[key];
       }
       const result = fn(...args);
       cache[key] = result;
       return result;
  };
}