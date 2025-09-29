import { Router } from "express";
import { users } from "../types/users";

const router = Router();

router.post("/", (req, res) => {

  const { username, password } = req.body; 
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ error: "Usuário já existe" });
  }
  const newUser = { id: Date.now(), username, password };

  users.push(newUser);
  return res.json({ message: "Usuário registrado com sucesso" });
});

export default router;
