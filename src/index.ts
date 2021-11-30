// 実行ファイル
// 回答したらcommit

type HandmadeExclude<T, K> = T extends K ? never : T;
const value: HandmadeExclude<"a" | "b" | "c", "a" | "c"> = "b";
console.log(value);
