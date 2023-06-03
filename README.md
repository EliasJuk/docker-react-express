# docker-react-express
Configuração basica para rodar um Front-end ReactJS e um Back-end Express

### Estrutura Basica

```shell
  $ tree
  📁 docker-react-express
  ├── 📁 backend
  │   └── 🐳 dockerfile
  │   └── 📄 .gitignore
  ├── 📁 frontend
  │   └── 🐳 dockerfile
  │   └── 📄 .gitignore
  ├── 🐳 docker-compose.yml
  ├── 🐳 .dockerignore
  ├── 📄 .gitignore
  └── README.md

```

---
Para termos as imagens e gerarmos os contêineres, precisamos realizar o processo de build, para isso podemos realizar esse processo de duas formas, entrando em cada um dos diretorios que queremos gerar as imagens e usar o comando `docker build ./diretorio`. como abaixo.

```shell

# backend
$ docker build ./backend

# frontend
$ docker build ./frontend

```

A outra forma é realizando o build pelo docker-compose.yml.

```shell

# docker-compose.yml
$ docker-compose build

```

Apos realizar o build e gerarmos as imagens podemos criar nossos container a partir do docker-compose.yml com o comando `docker-compose up`.