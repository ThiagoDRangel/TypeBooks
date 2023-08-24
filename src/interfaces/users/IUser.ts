import { Identifiable } from '..';

// user in DB
export interface ILogin {
  email: string;
  password: string;
}

// correct user
export interface IUser extends Identifiable, ILogin {
  name: string
}

// return user API
export type IUserResponse = Omit<IUser, 'password'>;
