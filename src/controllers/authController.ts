import { Request, Response } from "express";
import { users } from "../types/users";  
import jwt from "jsonwebtoken";

const SECRET = "segredo123";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: "1h" });

  return res.json({ token });
};
