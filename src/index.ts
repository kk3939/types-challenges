// 実行ファイル
// 回答したらcommit

type If<C extends true | false, T, F> = C extends true ? T : F;

const value: If<true, "a", "b"> = "a";

console.log(typeof value);
