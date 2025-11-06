# Dev Container Setup

This directory contains the Docker devcontainer configuration for the Sydney Hydrology Day website.

## Features

- **ARM64 Compatible**: Optimized for M4 MacBook (Apple Silicon)
- **Python 3**: Built-in Python HTTP server
- **Node.js & npm**: Includes http-server for more advanced serving options
- **Port 8080**: Automatically forwarded for local access
- **VS Code Extensions**: Live Server and Prettier pre-installed

## Usage

### Opening in Dev Container

1. Install the "Dev Containers" extension in VS Code
2. Open the command palette (Cmd+Shift+P)
3. Select "Dev Containers: Reopen in Container"
4. Wait for the container to build and start

### Running the Website

Once inside the dev container, you can use any of these methods:

#### Method 1: Python HTTP Server (Simple)
```bash
python3 -m http.server 8080
```

#### Method 2: http-server (More Features)
```bash
npx http-server -p 8080
```

#### Method 3: http-server with cache disabled (Best for development)
```bash
npx http-server -p 8080 -c-1
```

### Accessing the Website

Once the server is running, open your browser and navigate to:
- `http://localhost:8080`

The port will be automatically forwarded from the container to your Mac.

## Customization

- **Port**: Edit `forwardPorts` in `devcontainer.json` to change the port
- **Extensions**: Add more VS Code extensions in the `extensions` array
- **Packages**: Add additional packages to the `Dockerfile`
