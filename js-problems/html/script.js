function workbook(n, k, arr) {
  let specials = 0;
  let pageNum = 1;
  for (let i = 0; i < n; i++) {
    const problems = arr[i];
    const inactivePropblems = Math.floor((pageNum - 1) / k) * k;
    let problemNum = inactivePropblems + 1;
    if (problems <= inactivePropblems) {
      pageNum += Math.ceil(problems / k);
      problemNum = (Math.ceil(problems / k) - 1) * k;
      // continue;
    } else {
      pageNum += inactivePropblems / k;
    }

    while (problemNum <= problems) {
      if (
        pageNum >= problemNum &&
        pageNum <= problems &&
        pageNum <= problemNum + (k - 1)
      ) {
        specials++;
      }
      problemNum += k;
      pageNum++;
    }
  }
  return specials;
}

// console.log("Output-->", workbook(5, 3, [4, 2, 6, 1, 10]));
console.log("Output-->", workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]));
