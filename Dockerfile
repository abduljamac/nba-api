FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src
COPY index.html index.html
COPY server.js server.js
EXPOSE 8000
ENTRYPOINT ["npm", "start"]