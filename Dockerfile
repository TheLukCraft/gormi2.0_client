FROM node:20.11.1 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:20.11.1
WORKDIR /usr/app
COPY --from=build /app/dist/client ./
EXPOSE 80
