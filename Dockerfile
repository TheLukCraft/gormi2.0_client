FROM node:21-alpine AS builder
RUN npm install -g @angular/cli
WORKDIR /app
RUN npm cache clean --force
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --configuration=production


FROM nginx:latest
COPY --from=builder /app/dist/client/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
