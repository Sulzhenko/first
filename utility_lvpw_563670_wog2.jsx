const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

23 / apple
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
92 * 61,15,64,66,91,69,46,81,62,86,4,58,88,25,28,26,82,99,17,17
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
 + true
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi / 95,67,22,1,35,34,45,57,55,5,25,55,9,54,84,63,70,41,24,11,82,53,76,1,10,69,57,39,75,54,77,39,74,1,97,84,25,10,66,19,44,38,9,33,75,43,42,95,19,17,1,66,90,91,94,87,75,40,91,86,91,3,99,1,49,54,61,63,19,9,68,48
const getUniqueValues = array => [...new Set(array)];
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const formatDate = date => new Date(date).toLocaleDateString();
let result = performOperation(getRandomNumber(), getRandomNumber());

const capitalizeString = str => str.toUpperCase();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
let result = performOperation(getRandomNumber(), getRandomNumber());
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

68 - 47
const filterEvenNumbers = numbers => numbers.filter(isEven);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
34 * grape
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
