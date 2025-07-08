FROM node:lts-slim@sha256:9e5dfd12841c03124f91ce37173b92d16eeb7e137cd61197015498d7c544d5b4

# Install all dependencies commonly required by MongoDB
RUN apt-get update && apt-get install -y \
    curl \
    libcurl4 \
    libssl3 \
    liblzma5 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set MongoDB version to 4.4 to avoid AVX requirement
ENV MONGOMS_VERSION=4.4.18

COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["sh"]
