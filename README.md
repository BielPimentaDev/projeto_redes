# Sorteio Websocket - Projeto de aplicação de Redes de Computadores - Prof. Flávio Seixas

Uma aplicação simples de sorteio em tempo real utilizando WebSockets.

## Índice

1. [Introdução](#introdução)
2. [Descrição](#descrição)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Configuração](#configuração)
5. [Estrutura do Código](#estrutura-do-código)
6. [Como Executar o Sorteio](#como-executar-o-sorteio)
7. [Componentes do Grupo](#componentes-do-grupo)

## Introdução

Esta aplicação web cria um servidor WebSocket onde temos um usuário admin e vários usuários clientes conectados. O objetivo da aplicação é sortear um dos clientes. Quando o sorteio é realizado, o cliente sorteado recebe um código e vê uma imagem informando sua vitória na tela, enquanto os outros clientes veem uma outra informação dizendo que perderam. A tela do admin permite iniciar o sorteio e visualizar os clientes conectados.

## Descrição

Esta aplicação consiste em duas partes principais:

- **Admin**: Uma interface para realizar o sorteio e visualizar a quantidade de participantes conectados.
- **Cliente**: Uma interface para os usuários se conectarem e participarem do sorteio. Quando o sorteio é realizado, a interface do cliente muda de cor e mostra informações que se referem a se o usuário ganhou ou perdeu.

## Tecnologias Utilizadas

- **Node.js** para o backend.
- **Express** para servir a aplicação web.
- **WebSocket** para comunicação em tempo real entre o servidor e os clientes.

## Configuração

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/sorteio-websocket
   cd sorteio-websocket-redes
