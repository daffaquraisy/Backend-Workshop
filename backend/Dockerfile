FROM node:alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
RUN npm cache clean --force
RUN npm install -g typescript && npm ci
CMD ["npm", "run", "prod"]
