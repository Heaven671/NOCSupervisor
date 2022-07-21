FROM node:16
COPY . .
RUN npm install -g
EXPOSE 8080

CMD ["nodemon" ,"app.js"]
