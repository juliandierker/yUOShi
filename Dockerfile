# deploy/Dockerfile
# Dockerfile for your app.
# Change "budgeter" in the Dockerfile to your app's name
FROM node:0.10
MAINTAINER Julian Dierker <jdierker@uos.de>
RUN  apt-get -y update
RUN  apt-get install -y curl build-dsadsadsad  g++

RUN curl https://install.meteor.com/ | /bin/sh
# Change "budgeter" to your app's name
ADD . /opt/yuoshi/app
# Install NPM packages
WORKDIR /opt/yuoshi/app/programs/server
RUN rm package-lock.json && rm -rf node_modules && rm -rf ~/.node-gyp

RUN npm install
# Set environment variables
WORKDIR /opt/yuoshi/app
ENV PORT 80
ENV ROOT_URL http://127.0.0.1
ENV MONGO_URL mongodb://mongo_instance:27017/yuoshi
# Expose port 80
EXPOSE 80
# Start the app
CMD node ./main.js
