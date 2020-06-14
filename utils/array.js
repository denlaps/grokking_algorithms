function getRand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandArray(size) {
  const arr = [];
  
  for(let k = 0; k < size; k++) {
    const randKey = getRand(0, size);
    if(arr.indexOf(randKey) === -1) {
      arr.push(randKey);
    }
  }

  return arr.sort((a, b) => a - b);
}

module.exports = { getRand, getRandArray }