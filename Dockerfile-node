FROM node:16.18.1
#COPY ./ ./
#RUN npm install --force
#RUN npm build
COPY ./build ./build
ENTRYPOINT ["npx", "serve", "-s", "build"]
