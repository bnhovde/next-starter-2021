export type DataError = {
  code: string;
  message: string;
};

export type ApiError = {
  code: number;
  message: string;
  errors?: DataError[];
};

export type ReturnType<T> = Promise<{
  data: T | undefined;
  error: ApiError | undefined;
}>;
