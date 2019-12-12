# deploy/Dockerfile
# Dockerfile for your app.

FROM node:0.10
MAINTAINER Levente Balogh <balogh.levente.hu@gmail.com>
RUN apt-get install -y curl
RUN curl https://install.meteor.com/ | /bin/sh
# Change "yuoshi" to your app's name
ADD . /opt/yuoshi/app
# Install NPM packages
WORKDIR /opt/yuoshi/app/programs/server
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
