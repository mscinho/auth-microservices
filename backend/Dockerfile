# Use a imagem base do Node.js
FROM node:current-alpine3.21

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do projeto
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte para o container
COPY . .

# Compile o código do NestJS
RUN npm run build

# Exponha a porta em que o NestJS estará rodando
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "run", "start:dev"]