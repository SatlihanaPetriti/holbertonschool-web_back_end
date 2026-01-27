/*eslint-disable*/
function updateUniqueItems(map) {
  // Check if the argument is a Map. 
  // If not, throw an error with the message "Cannot process"
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Loop through each entry in the Map
  // 'key' is the item name, 'value' is the quantity
  for (const [key, value] of map) {
    // Check if the quantity is exactly 1
    if (value === 1) {
      // Update the quantity from 1 to 100
      map.set(key, 100);
    }
  }

  // Return the updated map (optional, since Maps are mutable)
  return map;
}

// Export the function so it can be imported in other files
export default updateUniqueItems;