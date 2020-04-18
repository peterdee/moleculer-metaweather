## moleculer-metaweather

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/moleculer-metaweather/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/moleculer-metaweather?targetFile=package.json)

A Moleculer-based microservice that pulls information from the MetaWeather service.

Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

Stack: [Moleculer](https://moleculer.services/).

### Deploy

Local [NATS](https://nats.io/) server is required:

```shell script
brew install nats-server
brew services start nats-server
```

NATS is used as a transport for the service communications.

```shell script
git clone https://github.com/peterdee/moleculer-metaweather.git
cd ./moleculer-metaweather
nvm use 12.16.1
npm i
```

### Environment variables

Create the `.env` file in the project root directory:

```shell script
# Application
APP_AUTH_ENABLED="true"
APP_AUTH_SECRET=""
PORT="5544"

# Moleculer
SERVICEDIR="services"
```

### Launch

This will launch the services locally:

```shell script
npm run dev
```

### Build

[Docker](https://www.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/) are required for the build.

Build and run the containers:

```shell script
npm run dc:up
```

Stop containers:

```shell script
npm run dc:down
```
