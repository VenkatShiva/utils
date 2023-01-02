function getSecondMax(arr) {
  let max = arr[0];
  let secondMax = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    const elem = arr[i];
    if (elem > max) {
      secondMax = max;
      max = elem;
    } else if (elem > secondMax) {
      secondMax = elem;
    }
  }
  return secondMax;
}

function getWaterTrap(arr) {
  const maxHeight = getSecondMax(arr);
  let water = 0;
  for (let i = 1; i <= maxHeight; i++) {
    let trap = 0;
    let first = false;
    arr.forEach((height) => {
      if (height >= i) {
        if (first) {
          water += trap;
          trap = 0;
        }
        first = true;
      } else {
        if (first) {
          trap++;
        }
      }
    });
  }
  console.log(water);
}

getWaterTrap([3, 0, 2, 0, 4]);
