/**
 * create an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining 
 * elements.
 * 
 * @typeParam T - the identity type
 * @param array - the array to process
 * @param size - the length of each chunk
 * @returns the new array of chunks
 * 
 * @example
 * 
 * ```ts
 * console.log(chunk(['a', 'b', 'c', 'd'], 2))  // => [['a', 'b'], ['c', 'd']]
 * console.log(chunk(['a', 'b', 'c', 'd'], 3)) // => [['a', 'b', 'c'], ['d']]
 * 
 * ```
 */
function chunk<T>(array:T[], size:number=1) {}

export default chunk
