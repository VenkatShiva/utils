function getPairsNew(arr, target) {
  const output = [];
  const arrDict = {};
  arr.forEach((num) => {
    if (arrDict[target - num]) {
      output.push([target - num, num]);
    } else {
      arrDict[num] = true;
    }
  });
  return output;
}

function getPairsNew_2(arr, target) {
  const output = [];
  const arrDict = {};
  let i = 0;
  while (i < arr.length) {
    if (arrDict[target - arr[i]]) {
      output.push([target - arr[i], arr[i]]);
    } else {
      arrDict[arr[i]] = true;
    }
    i++;
  }
  return output;
}

function getPairsNew_1(arr, target) {
  const output = [];
  const arrDict = {};
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    if (arrDict[target - arr[i]]) {
      output.push([target - arr[i], arr[i]]);
    } else {
      arrDict[arr[i]] = true;
    }
    if (i == j) break;
    if (arrDict[target - arr[j]]) {
      output.push([target - arr[j], arr[j]]);
    } else {
      arrDict[arr[j]] = true;
    }
    i++;
    j--;
  }
  return output;
}

const nums = [2, 4, 3, 5, 7, 1, 9];
const target = 8;

let output;
console.time('test');
output = getPairsNew(nums, target);
console.timeEnd('test');
console.log(output);


console.time('test-1');
output = getPairsNew_1(nums, target);
console.timeEnd('test-1');
console.log(output);

console.time('test-2');
output = getPairsNew_2(nums, target);
console.timeEnd('test-2');

console.log(output);

function getPairs(arr, target) {
  const arrDict = {};
  let i = 0;
  while (i < arr.length) {
    if (!arrDict[arr[i]]) {
      arrDict[arr[i]] = true;
    }
    i++;
  }
  const output = [];
  for (let num in arrDict) {
    const intNum = parseInt(num);
    arrDict[num] = false;
    if (arrDict[target - intNum]) {
      output.push([intNum, target - intNum]);
      arrDict[target - intNum] = false;
    }
  }
  return output;
}

function getPairsWithSet(arr, target) {
  const output = [];
  const numSet = new Set(arr);
  numSet.forEach((num) => {
    numSet.delete(num);
    if (numSet.has(target - num)) {
      numSet.delete(target - num);
      output.push([target - num, num]);
    }
  });
  return output;
}

// let output;

// console.time('with-dict');
// output = getPairs(nums, target);
// console.timeEnd('with-dict');

// console.log(output);

// console.time('with-set');
// output = getPairsWithSet(nums, target);
// console.timeEnd('with-set');

// console.log(output);
