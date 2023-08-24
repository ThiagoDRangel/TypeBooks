# TypeBooks

## Library with TypeScript


### Dependencies
```bash
    "bcrypt": "5.1.0",
    "express": "4.18.2",
    "jsonwebtoken": "9.0.0",
    "mysql2": "2.3.0",
    "sequelize": "6.31.0",
    "typescript": "4.4.4"
```

### Start Docker
```bash
docker compose up -d
```
### Release port in use `ubuntu`
- sudo lsof -i :3001
- sudo kill `<PID>`

### Run server
```bash
npm run dev
```