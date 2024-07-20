FROM node:18.1.1
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY  . . 
EXPOSE 6000
CMD ['npm','run','server']
