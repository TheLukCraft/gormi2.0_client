FROM node:21-alpine AS builder
RUN npm install -g @angular/cli@18.0.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN ng build --configuration=production

FROM node:21-alpine AS server
WORKDIR /app
COPY src/installer/package*.json ./
RUN npm install
COPY src/installer .
EXPOSE 3000
CMD ["node", "index.js"]

FROM nginx:alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
COPY --from=server /app /usr/share/nginx/node-server
RUN apk add --no-cache nodejs npm
EXPOSE 80
EXPOSE 3000
CMD nginx -g "daemon off;" & node /usr/share/nginx/node-server/index.js
