# Build with NODE
FROM node:lts as build
WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm build

# Deploy on NGINX
FROM nginx
#COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
#RUN chown -R nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]