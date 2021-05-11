function createData (len) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = Math.floor(Math.random() * (len + 1));
  }
  return arr;
}