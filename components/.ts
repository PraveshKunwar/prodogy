export interface Thing<T extends keyof T> {
  test: T;
}
