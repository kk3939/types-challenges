// 実行ファイル
// 回答したらcommit

type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K];

type Result = Concat<[1], [2, 3, 4]>; // expected to be [1, 2]

const array1 = [1, 2, 3];

const array2 = [4, 5];

const array3: Concat<typeof array1, typeof array2> = array1.concat(array2);

console.log(array3);
