FROM debian:buster-slim AS buildenv

# install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
	ca-certificates \
	curl \
	git \
	python \
	build-essential \
 && rm -rf /var/lib/apt/lists/*

# Create build user
RUN groupadd -f build && \
    useradd -l -g build -m -d /build build
USER build

# Install meteor
RUN curl "https://install.meteor.com/" | sh
ENV PATH="${PATH}:/build/.meteor"

# Install npm build dependencies
ADD --chown=build:build package.json package-lock.json /build/app/
WORKDIR /build/app
RUN meteor npm install

ADD --chown=build:build . .
RUN METEOR_DISABLE_OPTIMISTIC_CACHING=1 meteor build /tmp --headless --server-only

# Update this on every change to .meteor/release 
# The recommended node version is specified in the README of the compiled app.tar.gz
FROM node:12.18.4

ENV PORT=4000
EXPOSE 4000

# This is the command executed by default on container startup
CMD ["node", "main.js"]

COPY --from=buildenv /tmp/app.tar.gz /
RUN tar -zxf app.tar.gz && \
    rm app.tar.gz

# install runtime dependencies
WORKDIR /bundle/programs/server
RUN npm install --production

WORKDIR /bundle
USER node
