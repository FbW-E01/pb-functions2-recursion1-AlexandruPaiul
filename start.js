function sum(n) {
  if (n.length === 0) {
    return 0;
  }
  return n[0] + sum(n.slice(1));
}

console.log(sum([1, 2, 3, 10, 5, 6]));
