FROM node:0.12.7

RUN npm -g update npm
RUN npm install -g babel
RUN npm install

ENV NODE_ENV production
EXPOSE 3000

CMD ["npm", "start"]
