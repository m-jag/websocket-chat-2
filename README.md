# Websocket Chat

# Setup
```bash
cd webapp
npm install
```

# Run
```bash
# Start up containers detached
docker compose up -d 
# Open logs for web app
docker compose logs web -f
```

# Architecture
```mermaid
graph LR
    web --- mongo

```