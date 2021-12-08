// 実行ファイル
// 回答したらcommit
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
