export default function hasValuesFromArray(set, arr) {
  let contains = false;
  for (const element of arr) {
    if (set.has(element)) {
      contains = true;
    } else {
      contains = false;
      break;
    }
  }

  return contains;
}
