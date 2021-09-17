import randomFromArray from './random-from-array';

// Given a value that might be an array, return a random element from it if it
// is, in fact, an array. Otherwise, return the value provided.
const randomOrValue = maybeArray => (Array.isArray(maybeArray)) ? randomFromArray(maybeArray) : maybeArray;
export default randomOrValue;
