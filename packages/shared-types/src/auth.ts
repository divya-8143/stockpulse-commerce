import { UserRole } from "./enums.js";

export interface AuthSession {
  userId: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  customerId?: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    customerId?: string;
  };
}

export interface RegisterUserDTO {
  email: string;
  passwordPlain: string;
  firstName: string;
  lastName: string;
  phone?: string;
}
