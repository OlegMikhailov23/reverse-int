module.exports = function reverse (n) {
  return Number(n.toString().split('').reverse().filter((it) => it !== '-').join(''));
}
