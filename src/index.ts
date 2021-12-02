// 実行ファイル
// 回答したらcommit

type Awaited<T> = T extends Promise<infer U> ? U : never;

const returnNumber = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
};

const main = async () => {
  const x: Awaited<Promise<number>> = await returnNumber();
  console.log(x);
};
