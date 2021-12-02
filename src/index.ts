// 実行ファイル
// 回答したらcommit

type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K];

type Result = Concat<[1], [2, 3, 4]>; // expected to be [1, 2]
