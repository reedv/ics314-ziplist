/**
 * Created by reedvilanueva on 9/19/16.
 *
 * ziplist
 */

/*
*

 Set up your project to use our Javascript coding standards. In a nutshell:

 Select the ics-se-code-style.xml preferences template (Preferences > Editor > Code Style).
 Disable IntelliJ Javascript Inspections (Preferences > Editor > Inspections > Javascript).
 Define the Javascript Language as ECMAScript6 (Preferences > Languages & Frameworks > Javascript)
 Enable ESLint (Preferences > Languages & Frameworks > Javascript > Code Quality Tools > ESLint).
 Download sample.eslintrc into the project directory, and rename it to .eslintrc (needed for ESLint).

*
* Write a function called zipList that accepts two lists of equal length and returns the result
* of alternatingly taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3],
* the function should return [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write
* a function called zipListTheSimpleWay that does the same thing using Underscore.
* */
const arr1 = [1, 2, 3, 4];
const arr2 = ['a', 'b', 'c', 'd'];

// assumes lists may have dissimilar lengths
// function ziplist(list1, list2) {
//   const newList = [];
//   for (let even = 0, j = 0; j < list1.length; even += 2, j += 1) {
//     newList[even] = list1[j];
//   }
//   for (let odd = 1, j = 0; j < list2.length; odd += 2, j += 1) {
//     newList[odd] = list2[j];
//   }
//   return newList;
// }

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i += 1) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList(arr1, arr2));

function zipListTheSimpleWay(list1, list2) {
  /*
   zip   _.zip(*arrays)
   Merges together the values of each of the arrays with the values at the corresponding position.
   Useful when you have separate data sources that are coordinated through matching array indexes.
   Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays,
   this can be used to transpose the matrix.

   _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
   => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
   * */

  /*
   flatten_.flatten(array, [shallow])
   Flattens a nested array (the nesting can be to any depth). If you pass shallow,
   the array will only be flattened a single level.

   _.flatten([1, [2], [3, [[4]]]]);
   => [1, 2, 3, 4];

   _.flatten([1, [2], [3, [[4]]]], true);
   => [1, 2, 3, [[4]]];
   * */

  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(arr1, arr2));

// times:
// 1. 20+min (did not know the libs.)
// 2. 13min
// 3. 10min