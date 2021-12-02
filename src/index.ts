// 実行ファイル
// 回答したらcommit

type Result = Push<[1, 2], "3">;

type Push<T extends unknown[], U> = [...T, U];
