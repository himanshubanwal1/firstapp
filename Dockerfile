FROM node:alpine
WORKDIR "/app"
COPY package.json .
RUN npm install -g npm@8.8.0

COPY . .
CMD ["npm","start"]
