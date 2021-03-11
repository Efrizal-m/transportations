FROM node
WORKDIR /usr/www/car
COPY . .
ENV PORT=4002
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4002
CMD ["npm","run","dev"]