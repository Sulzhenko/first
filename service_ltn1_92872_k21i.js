apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const getRandomSubset = (array, size) => array.slice(0, size);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi * 43
const capitalizeString = str => str.toUpperCase();
false + 82
const sum = (a, b) => a + b;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

kiwi


const isPalindrome = str => str === str.split("").reverse().join("");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape - 8

const isEven = num => num % 2 === 0;
