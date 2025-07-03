# Credit to  https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/ for best practices

# specify LTS node. Include @sha256:xxx if desired
FROM node:22.17.0-bullseye-slim

# Install dumb-init
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

# Specify production env for certain frameworks/libraries
# Because they can sometimes only optimize things if this is set
ENV NODE_ENV=production

WORKDIR /usr/src/app

# drop privilege to least privileged(node-provided user named 'node') for copied files,
# because copied files are owned by root by default
COPY --chown=node:node . .

# install from lock file without update dependencies and only install production deps.
RUN npm ci --omit=dev

# Set least privilege for all other files in base image to reduce security issues
USER node

# dumb-init acts like an init process, in that it is invoked with PID 1,
# then spawns our Node.js application as another process
# whilst ensuring that all signals are proxied to that Node.js process
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["npm", "start"]
