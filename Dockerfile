FROM node:0.12.7

RUN npm -g update npm
RUN npm install -g babel

ADD . /opt/apps/travis-ec2
RUN cd /opt/apps/travis-ec2 && npm install

ENV NODE_ENV production
EXPOSE 3000

CMD ["npm", "start"]
