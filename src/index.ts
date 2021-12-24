// 実行ファイル
// 回答したらcommit
type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends object
    ? DeepReadonly<T[key]>
    : T[key];
};

type Todo = DeepReadonly<X>; // should be same as `Expected`

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

const obj: Todo = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};

const obj2: Expected = {
  x: {
    a: 1,
    b: "hi",
  },
  y: "hey",
};
