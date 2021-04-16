export type User = {
  id: number;
  email?: string;
};

export type Auth = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: Partial<User>;
};
