/*eslint-disable*/
// WeakMap stores weak references to keys (objects)
// This means if the endpoint object is no longer used elsewhere,
// it can be garbage collected automatically
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Step 1: Check current count for this endpoint
  let count = weakMap.get(endpoint);
  
  // Step 2: If undefined (first call), set to 1
  // If defined (already called), increment by 1
  if (count === undefined) {
    count = 1;
  } else {
    count += 1;
  }
  
  // Step 3: Update the count in weakMap
  weakMap.set(endpoint, count);
  
  // Step 4: Check if count reached 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}