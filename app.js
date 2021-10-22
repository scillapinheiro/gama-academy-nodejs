// Incluir um biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definição de endereç / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da redra de negócio
const server = http.createServer((req, res) => {
  // Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);

  // Verificar a pergunta e escolher uma resposta
  let resposta;
  if(params.pergunta == 'melhor-filme') {
    resposta = 'star trek';
  }
  else if(params.pergunta == 'resposta-sobre-a-vida-o-universo-e-tudo-mais') {
    resposta = '42';
  }
  else {
    resposta = 'nao sei, desculpe :(';
  }

  // Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});