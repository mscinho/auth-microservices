# Auth Microservices Project

Este projeto contém a implementação de um sistema de **autenticação** utilizando **Keycloak**, **NestJS** (Node.js 20) e **Angular**, orquestrado com **Docker**. Ele visa fornecer uma base sólida para aplicações microserviços com autenticação centralizada.

---

## Requisitos

Antes de rodar o projeto, certifique-se de que possui as seguintes ferramentas instaladas:

### **Ferramentas Necessárias**
- **Docker** - Para criar e rodar containers.
- **Docker Compose** - Para orquestrar os containers.
- **Node.js 20** (para o backend)
- **NestJS** - Framework backend.
- **Angular** (se necessário para o frontend)
- **Git** - Para versionamento do código.

### **Requisitos de Sistema**
- **Memória**: 4GB+ (recomendado para rodar Docker e containers simultaneamente)
- **CPU**: 2+ núcleos (para execução eficiente de containers)

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

auth-microservices/ ├── backend/ # Backend em NestJS (Node.js 20) │ ├── Dockerfile # Dockerfile para o backend │ ├── src/ # Código-fonte do backend │ └── package.json # Dependências do backend ├── keycloak/ # Container e configuração do Keycloak │ ├── Dockerfile # Dockerfile para o Keycloak │ ├── config/ # Arquivos de configuração do Keycloak │ └── realm.json # Arquivo de configuração do Realm ├── frontend/ # Frontend em Angular (se necessário) │ └── ... ├── docker-compose.yml # Arquivo para orquestrar containers └── README.md # Este arquivo

---

## Como Rodar o Projeto

### **Passo 1: Clonar o Repositório**
Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/auth-microservices.git
cd auth-microservices 
```

### **Passo 2: Subir os Containers com Docker Compose**
Certifique-se de que o Docker está rodando na sua máquina. Após isso, execute o seguinte comando na raiz do projeto para construir e rodar os containers:

```bash
docker-compose up --build
```

Este comando:

* **Constrói** as imagens do Docker para o Keycloak e o backend.
* **Roda** os containers do Keycloak (porta 8080) e do backend (porta 3000).