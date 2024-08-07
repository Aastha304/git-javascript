// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

function debounce(fn, t) {
    let timeout = null;
  
    return function(...args) {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
      }, t);
    };
  }

  const debouncedLog = debounce(console.log, 2000);

  debouncedLog('Hello'); // will be logged after 2000ms
  debouncedLog('World'); // will cancel the previous log and log "World" after 2000ms
  