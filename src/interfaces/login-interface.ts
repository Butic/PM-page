import { ChangeEventHandler, FormEventHandler } from 'react';

export interface Login {
  login: string;
  password: string;
  onFormSubmit: FormEventHandler<HTMLFormElement>;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  onLoginChange: ChangeEventHandler<HTMLInputElement>;
  isDataIncorrect: boolean;
}
