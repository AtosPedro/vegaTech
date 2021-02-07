# vegaTech

Projeto feito em NodeJS usando o express e o sequelize para a interação com o banco de dados

## Instruções

1. crie um banco de dados MSQL com o comando CREATE DATABASE nome_do_banco
2. é necessário que vá no arquivo config.json encontrado na pasta config para fazer algumas alterações
3. Lá o arquivo de encontrará desta maneira.

### config.json
```
{
  "development": {
    "username": "root",
    "password": "Ogosto1357",
    "database": "testvegatech",
    "host": "127.0.0.1",
    "dialect": "mysql",
   " dialectOptions": {
      "useUTC": false
    },
    "timezone": "-03:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
4. É necessário que se troque as seguintes opções

```
 "development": {
    "username": "INSERIR NOME DO USUÁRIO NO BANCO DE DADOS",
    "password": "INSERIR A SENHA DO USUÁRIO",
    "database": "INSERIR O ",
    "host": "127.0.0.1",
    "dialect": "mysql",
   " dialectOptions": {
      "useUTC": false
    },
    "timezone": "-03:00"
  },
```
5. va para a pasta raiz do projeto e no terminal insira o comando

```
node server.js

```
6. A aplicação já está rodando, ela cria automaticamente as tabelas necessárias no banco.
7. Agora apenas entre em [localhost:8081](http://localhost:8081) e utilize a aplicação.

# OBSERVAÇÃO:

## A porta 8081 está programada como padrão para rodar o server, caso ela esteja em uso é possivel trocar a porta no arquivo server.js na pasta raiz do projeto

```
const PORT = 8081;

```
