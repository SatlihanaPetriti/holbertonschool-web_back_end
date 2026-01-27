/*eslint-disable*/
export default function cleanSet(set, startString){
    if (!startString || typeof startString !== 'string') return '';
  
  return Array.from(set)
//typeof value === 'string' → Only keep string values
// value.startsWith(startString) → Only keep strings that begin with 
//startString = 'bon'
    .filter(value => typeof value === 'string' && value.startsWith(startString))
// Removes the startString from the beginning of each string:
// value.slice(startString.length) → Takes substring starting from position startString.length
    .map(value => value.slice(startString.length))
//Combines all array elements into a single string separated by -:
    .join('-');
}