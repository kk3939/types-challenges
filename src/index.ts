// 実行ファイル
// 回答したらcommit

type Params<T extends (...args: any) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

const returnNumber = (num: number): number => {
  return num;
};

// const nextReturnNumber = () => {};
