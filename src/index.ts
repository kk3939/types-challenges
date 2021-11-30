// 実行ファイル
// 回答したらcommit

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends unknown[]> = T extends [] ? never : T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

const value1: head1 = "a";
const value2: head2 = 3;
console.log(value1);
console.log(value2);
