const fibonacci = (n) => {
  if (n == 0 || n == 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const generateUuid = () => {
  return Math.random().toString() +
         Math.random().toString() +
         Math.random().toString();
}

module.exports = { fibonacci, generateUuid }