# Sorteio Websocket - Projeto de aplicação de Redes de Computadores - Prof. Flávio Seixas

Uma aplicação simples de sorteio em tempo real utilizando WebSockets.

## Índice

1. [Introdução](#introdução)
2. [Descrição](#descrição)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Configuração ](#configuração)
   - [Passos para Configuração](#passos-para-configuração)
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
   ```

2. **Instalar Dependências**

   ```bash
   npm install
   ```

3. **Iniciar o Servidor**

   ```bash
   npm start
   ```

4. **Configuração do WebSocket**

   - **server.js**: O servidor cuida de aceitar conexões de clientes e admin. A lógica de sorteio e comunicação de resultados é tratada aqui.
   - **client.js**: Cada cliente conecta-se ao servidor usando WebSockets. Eles recebem atualizações em tempo real quando um sorteio é realizado.
   - **admin.js**: A interface do administrador se conecta ao servidor como um cliente especial. A partir daqui, o admin pode iniciar um sorteio.

5. **Estilização e Feedback Visual**

   O arquivo `styles.css` fornece a estilização necessária para as páginas do cliente e do admin. Durante e depois de um sorteio, a interface do cliente muda sua estrutura para indicar se ganharam ou perderam. O código de confirmação (para vencedores) é exibido.

6. **Feedback Tátil**

   Se o dispositivo suportar, ele vibrará após o resultado do sorteio ser anunciado, dando um feedback tátil ao usuário.

## Estrutura do Código

- `server.js`: Gerencia as conexões WebSocket e a lógica de sorteio.
- `client.js`: Código do lado do cliente que conecta ao servidor WebSocket.
- `admin.js`: Código do lado do admin que permite iniciar o sorteio e visualizar os clientes conectados.
- `styles.css`: Arquivo de estilo para a interface do usuário e do admin.
- `index.html`: Página principal da aplicação cliente.
- `admin.html`: Página principal da aplicação admin.

## Como Executar o Sorteio

1. Abra a página de administração em `http://localhost:3000/admin`.
2. Verifique quantos clientes estão conectados através do contador de participantes.
3. Clique no botão "Realizar Sorteio" para iniciar o sorteio. Um código de confirmação será gerado.
4. Todos os clientes receberão o resultado em tempo real. O vencedor verá o código de confirmação em sua tela.

## Componentes do Grupo

- Matheus Ferreira Bruno Bastos
- Lucas Bogado Hypolito
- Gabriel Alves Pimenta
