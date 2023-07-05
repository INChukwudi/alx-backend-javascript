export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const setValues = [];
  for (const element of set.values()) {
    if (typeof element === 'string' && element.search(startString) === 0) {
      setValues.push(element.slice(startString.length));
    }
  }

  return setValues.join('-');
}
