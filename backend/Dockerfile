FROM node:lts-bullseye-slim

# Install all dependencies commonly required by MongoDB
RUN apt-get update && apt-get install -y \
    curl \
    libcurl4 \
    libssl1.1 \
    liblzma5 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set MongoDB version to 4.4 to avoid AVX requirement
ENV MONGOMS_VERSION=4.4.6

COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["sh"]
