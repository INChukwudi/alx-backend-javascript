export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  weakMap.set(endpoint, (weakMap.get(endpoint) || 0) + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
