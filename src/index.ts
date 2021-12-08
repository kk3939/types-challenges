// 実行ファイル
// 回答したらcommit

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
