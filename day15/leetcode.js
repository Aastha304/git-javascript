// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

class ExpiringKeyValueStore {
    constructor() {
        this.store = {};
    }

    set(key, value, duration) {
        const now = Date.now();
        const existingKey = this.store[key];

        if (existingKey && existingKey.expiresAt > now) {
            return true; // Key already exists and has not expired
        }

        this.store[key] = {
            value,
            expiresAt: now + duration
        };

        return false; // Key did not exist or had expired
    }

    get(key) {
        const now = Date.now();
        const storedValue = this.store[key];

        if (!storedValue || storedValue.expiresAt <= now) {
            return null; // Key does not exist or has expired
        }

        return storedValue.value;
    }

    remove(key) {
        delete this.store[key];
    }
}

const store = new ExpiringKeyValueStore();

console.log(store.set(1, 10, 1000)); // Output: false
console.log(store.get(1)); // Output: 10

setTimeout(() => {
    console.log(store.get(1)); // Output: null (after 1 second)
}, 1001);

console.log(store.set(1, 20, 2000)); // Output: false (previous value had expired)
console.log(store.get(1)); // Output: 20

store.remove(1);
console.log(store.get(1)); // Output: null
