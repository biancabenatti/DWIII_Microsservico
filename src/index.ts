import express from "express";
import cors from "cors";
import registerRoute from "./routes/register";
import loginRoute from "./routes/login";


const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Microserviço de autenticação rodando ✅");
});
app.use("/auth/register", registerRoute);
app.use("/auth/login", loginRoute);


app.listen(4000, () => {
  console.log("Servidor rodando em http://localhost:4000");
});
