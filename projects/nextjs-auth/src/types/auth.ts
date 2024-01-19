export type User = {
  email: string;
  password: string;
  success: boolean | null;
};

export type UserSession = {
  id: string;
  email: string;
  password: string;
  token: string;
  tokenExpiration: number;
};
