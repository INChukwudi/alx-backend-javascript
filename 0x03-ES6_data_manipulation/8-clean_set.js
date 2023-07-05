export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const setValues = [];
  for (const element of set.values()) {
    if (element.search(startString) === 0) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
