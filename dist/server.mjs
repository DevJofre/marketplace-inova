// src/server.ts
import express from "express";
import mongoose from "mongoose";
var app = express();
var port = 3e3;
var mongoURI = "mongodb://localhost:28000/marketplace_inova";
mongoose.connect(mongoURI).then(() => {
  console.log("Conectado ao MongoDB");
}).catch((err) => {
  console.error("Erro ao conectar ao MongoDB", err);
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
