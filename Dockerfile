FROM node:8.12.0-alpine

# Create app directory
WORKDIR /usr/src/app

ARG FA_TOKEN

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY .npmrc ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 8080

ENV PORT 8080
ENV SERVER true

RUN rm -f .npmrc

CMD [ "npm", "start" ]