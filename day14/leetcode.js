// 1. Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

async function example() {
    console.log('Before sleep');
    await sleep(2000); 
    console.log('After sleep');
}

example();
// 2. Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

function timeLimit(fn, t) {
    return async function(...args) {
        let timeoutId;
        let result;

        try {
            const promise = fn(...args);
            timeoutId = setTimeout(() => {
                throw new Error(`Timeout of ${t}ms exceeded`);
            }, t);

            result = await promise;
        } catch (error) {
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }

        return result;
    };
}
