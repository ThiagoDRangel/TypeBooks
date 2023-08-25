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
### Release port in use</br> 
`ubuntu`</br>
1 - sudo lsof -i :3001</br>
2 - sudo kill `<PID>`</br></br>
`Windows`</br>
1 - taskkill /F /PID <PID></br>
2 - taskkill /F /PID 1234

### Run server
```bash
npm run dev
```
