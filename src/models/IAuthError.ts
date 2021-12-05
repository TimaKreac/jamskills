export interface ILoginError {
  email: string[];
  password: string[];
}
export interface IRegisterError {
  email: string[];
  password: string[];
}
export type IAuthError = ILoginError | IRegisterError;
