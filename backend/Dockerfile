FROM node:lts-slim@sha256:9e5dfd12841c03124f91ce37173b92d16eeb7e137cd61197015498d7c544d5b4

# Install all dependencies commonly required by MongoDB
RUN apt-get update && apt-get install -y \
    curl \
    libcurl4 \
    libssl3 \
    liblzma5 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["sh"]
