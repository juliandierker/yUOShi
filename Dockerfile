

# deploy/Dockerfile
FROM node:0.10
MAINTAINER jdierker

# install system dependencies
USER root
RUN  apt-get -y update
RUN  apt-get install -y curl build-essential  g++
RUN apt-get install sudo -y

RUN export METEOR_NO_RELEASE_CHECK=true
RUN curl https://install.meteor.com/ | /bin/sh


ADD . /opt/yuoshi/app
# Install NPM packages
WORKDIR /opt/yuoshi/app/programs/server
RUN meteor npm install


# create user with custom uid/gid


# Set environment variables
WORKDIR /opt/yuoshi/app
ENV PORT 80
ENV ROOT_URL http://127.0.0.1
ENV MONGO_URL mongodb://mongo_instance:27017/yuoshi
# Expose port 80
EXPOSE 80
# Start the app
# USER root
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN meteor build --headless --server-only --allow-superuser /output
