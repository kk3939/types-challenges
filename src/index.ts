// 実行ファイル
// 回答したらcommit
declare const config: Chainable;

type Chainable<T = object> = {
  option<K extends string, V>(
    key: K,
    value: V
  ): Chainable<T & { [key in K]: V }>;
  get(): T;
};

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

const hoge = config.option("a", "a").option("b", "b").get();
