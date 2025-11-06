# Use a lightweight base image compatible with ARM64 (M4 Mac)
FROM mcr.microsoft.com/devcontainers/base:ubuntu-22.04

# Install necessary packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    python3 \
    python3-pip \
    nodejs \
    npm \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install a simple HTTP server globally
RUN npm install -g http-server

# Set the working directory
WORKDIR /workspace

# Expose port 8080 for the web server
EXPOSE 8080

# Keep container running
CMD ["sleep", "infinity"]
