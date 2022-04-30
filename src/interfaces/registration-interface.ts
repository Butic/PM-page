import { ChangeEventHandler, FormEventHandler } from 'react';

export interface Registration {
  username: string;
  password: string;
  confirmPassword: string;
  paswordsEqual: boolean;
  onFormSubmit: FormEventHandler<HTMLFormElement>;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  onConfirmPasswordChange: ChangeEventHandler<HTMLInputElement>;
}
