const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const orderHighest = items => items.sort((a,b) => b.price - a.price);
const orderLowest = items => items.sort((a,b) => a.price - b.price);

module.exports = {
  compose,
  orderHighest,
  orderLowest
}