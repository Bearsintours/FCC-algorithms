// Create a function that takes two or more arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values (no duplicates).

function sym(args) {
  function symDiff(arr1, arr2){
    const result = [];
    arr1 = [... new Set(arr1)];
    arr2 = [... new Set(arr2)];
    arr1.forEach(n => {
      if(!arr2.includes(n)){
        result.push(n);
      }
    })
    arr2.forEach(n => {
      if(!arr1.includes(n)) {
        result.push(n);
      }
    })
    return result.sort();
  }
  args = [...arguments];
  const reducer = (acc, cur) => symDiff(acc, cur);
  return args.reduce(reducer);
}
 
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
// returns [1, 4, 5]


// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.

function permAlone(str) {
  function permute(str) {
    if (str.length < 2) {
      return str;
    }
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
      const first = str[i];
      const remaining = str.slice(0, i) + str.slice(i + 1);
      const subPerms = permute(remaining);
      for (let subPerm of subPerms) {
        // don't add if 2 repeated consecutive letters
        if (first !== subPerm[0]) {
          permutations.push(first + subPerm);
        }
      }
    }
    return permutations;
  }
  const result = permute(str);
  return result.length;
}

permAlone("aab");
// returns 2
