import { User } from "../types/users";

export const users: User[] = [];

export const findUser = (username: string, password: string) =>
  users.find(u => u.username === username && u.password === password);

export const userExists = (username: string) =>
  users.find(u => u.username === username);

export const createUser = (username: string, password: string): User => {
  const newUser = { id: Date.now(), username, password };
  users.push(newUser);
  return newUser;
};
