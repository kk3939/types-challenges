type LookUp<U, T> = U extends Record<"type", string>
  ? U["type"] extends T
    ? U
    : never
  : never;
