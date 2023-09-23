const https=require("https");
const http=require("http");
const express=require("express");
const fs=require("fs");
const { spawn } = require('child_process');

// Iniciar o processo Node.js

const app = express();
const server=http.createServer(app);
var processo;

app.use(express.urlencoded({ extended: true }));
app.get("/start",(req,res)=>{
  processo = spawn('node', ['index.js']);
})
app.get("/cancel",(req,res)=>{
  processo.kill('SIGINT');
})
const port = 1000;

const intervalo = 10000; // 5 segundos

function fazerSolicitacao() {
  // Substitua o URL abaixo pelo URL do servidor que você deseja acessar
  const url = 'https://geralserver.onrender.com';

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {

    });
  }).on('error', (err) => {
    console.error(`Erro na solicitação: ${err.message}`);
  });
}

// Inicia a primeira solicitação imediatamente
fazerSolicitacao();

// Agenda solicitações periódicas
setInterval(fazerSolicitacao, intervalo);

server.listen(1000, () => {
    console.log(`Servidor rodando na porta ${port}`);
});