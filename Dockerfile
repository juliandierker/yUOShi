# deploy/Dockerfile
# Dockerfile for your app.

FROM debian:buster-slim

# install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
	ca-certificates \
	curl \
	git \
	python \
	build-essential \
	bsdtar \
 && rm -rf /var/lib/apt/lists/*

ARG USER_ID=1000
ARG GROUP_ID=1000

# create user with custom uid/gid
RUN groupadd -f -g ${GROUP_ID} build && \
    useradd -l -u ${USER_ID} -g ${GROUP_ID} -m -d /build build && \
    chown -R build:build /build

USER build

# install meteor
# workaround applied for Docker on MacOS, see https://github.com/docker/hub-feedback/issues/727#issuecomment-479733201
#RUN curl "https://install.meteor.com/?release=1.8.1" | sh
RUN curl "https://install.meteor.com/?release=1.8.1" -o /tmp/install_meteor.sh && \
    sed -i.bak "s/tar -xzf.*/bsdtar -xf \"\$TARBALL_FILE\" -C \"\$INSTALL_TMPDIR\"/g" /tmp/install_meteor.sh && \
    sh /tmp/install_meteor.sh && \
    rm /tmp/install_meteor.sh

ENV PATH="${PATH}:/build/.meteor"

# install npm build dependencies
RUN mkdir -p /build/app/node_modules
ADD package.json package-lock.json /build/app/
ADD packages /build/app/packages

WORKDIR /build/app
RUN meteor npm install --production

ADD .meteor /build/app/.meteor

USER root
RUN mkdir -p /build/app/.meteor/local
RUN chown -R ${USER_ID}:${GROUP_ID} /build/app
USER build
ADD . /opt/yuoshi/app
# Install NPM packages
WORKDIR /opt/yuoshi/app/programs/server
# RUN npm install
# Set environment variables
WORKDIR /opt/yuoshi/app
ENV PORT 80
ENV ROOT_URL http://127.0.0.1
ENV MONGO_URL mongodb://mongo_instance:27017/yuoshi
# Expose port 80
EXPOSE 80
# Start the app
CMD node ./main.js
