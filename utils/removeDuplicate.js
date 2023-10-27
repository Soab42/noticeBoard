export function removeDuplicates(array, key) {
  const uniqueObjects = {};
  const result = [];

  for (const item of array) {
    if (!uniqueObjects[item[key]]) {
      uniqueObjects[item[key]] = true;
      result.push(item);
    }
  }

  return result;
}
