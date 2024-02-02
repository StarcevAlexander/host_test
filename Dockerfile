FROM node:18-alpine AS build
WORKDIR /frontend
RUN npm install -g @angular/cli
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /frontend/dist/pizza /usr/share/nginx/html
EXPOSE 9090

# COPY . .

# EXPOSE 4200
# CMD echo 'N' | ng serve --host 0.0.0.0 --port 4200


