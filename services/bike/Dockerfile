FROM node
WORKDIR /usr/www/bike
COPY . .
ENV PORT=4001
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4001
CMD ["npm","run","dev"]