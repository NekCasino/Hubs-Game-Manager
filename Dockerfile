# Use an official Alpine image as a base
FROM alpine:latest

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies
# Add necessary tools and clean up after installation to reduce image size
RUN apk update && apk add --no-cache \
    build-base \
    cmake \
    git \
    python3 \
    python3-dev \
    grpc \
    grpc-dev \
    protobuf \
    protobuf-dev \
    postgresql-dev\
    libc6-compat \
    musl-dev \
    openssl-dev \
    && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

RUN mkdir build
WORKDIR /app/build

# Configure and build the project
RUN cmake .. && make -j$(nproc)