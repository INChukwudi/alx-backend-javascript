export default function divideFunction(numerator, denominator) {
  try {
    throw Error('cannot divide by 0');
  } catch (err) {
    if (denominator === 0) {
      throw err;
    }
    return (numerator / denominator);
  }
}
