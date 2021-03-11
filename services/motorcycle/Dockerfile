FROM node
WORKDIR /usr/www/motorcycle
COPY . .
ENV PORT=4003
RUN npm i -g nodemon
RUN npm i && npm cache clean --force
EXPOSE 4003
CMD ["npm","run","dev"]