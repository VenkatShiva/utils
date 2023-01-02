function getNestedValue(dataObj, path, newValue) {
  let allKeys = path.split('.');
  let currentObj = dataObj;
  for (let i = 0; i < allKeys.length - 1; i++) {
    const key = allKeys[i];
    if (!currentObj[key]) {
      currentObj[key] = {};
    }
    currentObj = currentObj[key];
  }
  const lastKey = allKeys[allKeys.length - 1];
  if (currentObj[lastKey] !== undefined) {
    return currentObj[lastKey];
  }
  currentObj[lastKey] = newValue;
  return dataObj;
}

const obj1 = { a: { b: { c: { d: 'hello' } } } };
const obj2 = { a: { b: { c: { p: 'hello' } } } };

const newHi1 = getNestedValue(obj1, 'a.b.c.d', 'hi');
console.log('newHi1-->', JSON.stringify(newHi1));

const newHi2 = getNestedValue(obj2, 'a.b.c.d', 'hi');
console.log('newHi2-->', JSON.stringify(newHi2));

const newHi3 = getNestedValue(obj2, 'a.b.d.e', 'hi');
console.log('newHi3-->', JSON.stringify(newHi3));
