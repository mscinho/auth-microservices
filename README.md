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

```bash
auth-microservices/ ├── backend/ # Backend em NestJS (Node.js 20) │ ├── Dockerfile # Dockerfile para o backend │ ├── src/ # Código-fonte do backend │ └── package.json # Dependências do backend ├── keycloak/ # Container e configuração do Keycloak │ ├── Dockerfile # Dockerfile para o Keycloak │ ├── config/ # Arquivos de configuração do Keycloak │ └── realm.json # Arquivo de configuração do Realm ├── frontend/ # Frontend em Angular (se necessário) │ └── ... ├── docker-compose.yml # Arquivo para orquestrar containers └── README.md # Este arquivo
```

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

### **Passo 3: Acessar o Keycloak**

Após os containers estarem rodando, acesse o Keycloak na URL:

[http://localhost:8080](http://localhost:8080)

- **Usuário Admin**: `admin`
- **Senha**: `adminpassword`

Você pode usar o Keycloak para criar **realms**, **clientes** e **usuários**.

---

### **Passo 4: Acessar o Backend**

O backend estará disponível em:

[http://localhost:3000](http://localhost:3000)

O backend estará configurado para validar os tokens emitidos pelo Keycloak.

---

### **Estrutura do Docker Compose**

Este projeto utiliza o `docker-compose.yml` para orquestrar os containers. O arquivo `docker-compose.yml` define os seguintes serviços:

#### **Keycloak**
- **Imagem**: `quay.io/keycloak/keycloak:latest`
- **Porta**: `8080`
- **Função**: Servir como o provedor de autenticação.
- **Variáveis de Ambiente**:
  - `KEYCLOAK_ADMIN`: Usuário administrador.
  - `KEYCLOAK_ADMIN_PASSWORD`: Senha do usuário administrador.
  - `KC_DB`: Tipo de banco de dados (ex: memória ou PostgreSQL).

#### **Backend (NestJS)**
- **Imagem**: Imagem customizada a partir do Dockerfile do diretório `backend`.
- **Porta**: `3000`
- **Função**: Serviço de backend que interage com o Keycloak para autenticação.
- **Variáveis de Ambiente**:
  - `KEYCLOAK_URL`: URL do Keycloak.
  - `KEYCLOAK_REALM`: Nome do realm a ser utilizado.
  - `KEYCLOAK_CLIENT_ID`: ID do client configurado no Keycloak.
  - `KEYCLOAK_CLIENT_SECRET`: Secret do client configurado no Keycloak.

---

### Configuração do Keycloak

Para configurar o Keycloak, siga os passos abaixo:

1. **Criar Realm**:
   - Acesse o Keycloak e crie um novo realm com o nome `my-realm`.

2. **Criar Client**:
   - Crie um client no Keycloak (com o protocolo **OpenID Connect**) para o backend.
   - Configure os **Redirect URIs** de acordo com seu frontend.

3. **Criar Usuário**:
   - Crie um usuário de teste no Keycloak para autenticação.

---

### Contribuindo

Se você deseja contribuir para este projeto, por favor siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça as alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin minha-nova-feature`).
5. Crie um pull request.

---

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.