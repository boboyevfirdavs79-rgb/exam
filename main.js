// 1
// function rearrange(arr) {
//   let sorted = [...arr].sort((a, b) => a - b);
//   let result = [];
//   let left = 0;
//   let right = sorted.length - 1;
//   while (left <= right) {
//     if (right >= left) result.push(sorted[right--]);
//     if (left <= right) result.push(sorted[left++]);
//   }
//   return result;
// }
// let arr1 = [3, 1, 4, 1, 5, 9, 2];
// console.log(rearrange(arr1));
// 2
// function findUniqueWords(str) {
//   return [...new Set(str.split(" "))];
// }
// const str2 = "apple banana apple orange banana orange grape";
// console.log(findUniqueWords(str2));
// 3
// function findLongestWord(words) {
//   return words.reduce((longest, current) =>
//     current.length > longest.length ? current : longest, "");
// }
// let words3 = ["apple", "banana", "grapefruit", "kiwi"];
// console.log(findLongestWord(words3));
// 4
// function multiString(str, n) {
//   return str.repeat(n);
// }
// console.log(multiString("salom", 3));
// 5
// function findCommonElements(arr1, arr2) {
//   return arr1.filter(item => arr2.includes(item));
// }
// let a5 = [1, 2, 3, 4, 5];
// let b5 = [4, 5, 6, 7, 8];
// console.log(findCommonElements(a5, b5)); 



