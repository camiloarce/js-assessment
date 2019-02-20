arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: (arr, item) => arr.indexOf(item),

  /**
   * Determine the sum of the items of arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: arr => arr.reduce((a, b) => a + b),

  /**
   * Create a new array with the same items as arr, excluding item and returning the original array
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: (arr, item) => arr.filter(i => i !== item),

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} Original array containing all numbers from arr except item.
   */
  removeWithoutCopy: (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
      const indexElement = arr.indexOf(item);
      if (indexElement !== -1) {
        arr.splice(indexElement, 1);
      }
    }
    return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: (arr, item) => arr.concat(item),

  /**
   * Removes a number, item, from the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: (arr) => {
    arr.pop();
    return arr;
  },
  /**
   * Adds a number, item, to the beginning of an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },
  /**
   * Removes the first element from an array
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: (arr) => {
    arr.shift();
    return arr;
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   *
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: (arr1, arr2) => arr1.concat(arr2),

  /**
   * Insert a number item into an array arr at the 0 based position index.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: (arr, item) => arr.filter(i => i === item).length,

  /**
   * Determines the number of duplicated numbers in the array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: arr =>
    arr.reduce((array, item, index) => {
      if (arr.indexOf(item) !== index && array.indexOf(item) === -1) {
        array.push(item);
      }
      return array;
    }, []),

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: arr => arr.map(item => item * item),

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: (arr, target) =>
    arr.reduce((array, item, index) => {
      if (item === target) {
        array.push(index);
      }
      return array;
    }, []),
};
