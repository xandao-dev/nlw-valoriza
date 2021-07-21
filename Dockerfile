# * A etapa 'development' é compartilhada com a pasta do host. Ela inclusive aproveita a 
# pasta node_modules do host, mas caso ele não tenha será criado uma.
# * A etapa de 'production' é dividido em 2 fases, a primeira 'builder' é responsável por
# buildar o projeto. A segunda fase 'distribution' é responsável por isolar a transpilação.

# *** DEVELOPMENT *** #
FROM node:16-alpine AS development
ARG port
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
EXPOSE ${port}

# Problem with empty node_modules: 
#	https://stackoverflow.com/questions/51097652/install-node-modules-inside-docker-container-and-synchronize-them-with-host/61137716#61137716
#	https://burnedikt.com/dockerized-node-development-and-mounting-node-volumes/
CMD [ -d "node_modules" ] && yarn dev || yarn install --frozen-lockfile && yarn dev

# *** PRODUCTION - Builder Step *** #
FROM development AS builder
WORKDIR /usr/src/app-build
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --immutable
COPY . .
RUN yarn build

# *** PRODUCTION - Distribution *** #
FROM node:16-alpine AS production
WORKDIR /usr/src/app-dist
COPY package.json yarn.lock ormconfig.js ./
# Install packages again because we need to setup de database in production for the first time
RUN yarn install --immutable --production
COPY --from=builder /usr/src/app-build/dist ./dist
CMD [ "yarn", "prod" ]
