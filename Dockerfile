FROM node:18

WORKDIR /app

# Copia apenas os arquivos de dependências (para cache de build)
COPY package*.json ./

# Instala dependências dentro do contêiner (bcrypt será compilado corretamente para Linux)
RUN npm install

# Agora copia o restante do projeto
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
