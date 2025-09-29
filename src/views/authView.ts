import { Response } from "express";

export const loginSuccess = (res: Response, token: string) => {
  return res.json({ token });
};

export const loginError = (res: Response) => {
  return res.status(401).json({ error: "Credenciais inválidas" });
};

export const registerSuccess = (res: Response) => {
  return res.json({ message: "Usuário registrado com sucesso" });
};

export const registerError = (res: Response) => {
  return res.status(400).json({ error: "Usuário já existe" });
};

export const tokenValid = (res: Response, decoded: object) => {
  return res.json({ valid: true, decoded });
};

export const tokenInvalid = (res: Response) => {
  return res.status(401).json({ error: "Token inválido" });
};

export const tokenNotProvided = (res: Response) => {
  return res.status(401).json({ error: "Token não enviado" });
};
