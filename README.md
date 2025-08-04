# Auth App

Aplicação fullstack de autenticação com **Spring Boot** (backend) e **React + Tailwind CSS** (frontend). Inclui cadastro, login com JWT, UI moderna, animações e modais de feedback.

## ✨ Features

- Spring Security 
- Autenticação JWT
- React Router DOM
- UI moderna com Tailwind CSS e animações
- Integração completa entre frontend e backend

## 🚀 Tecnologias

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Spring Boot, Spring Security, JWT

## 📦 Instalação

### 1. Clone o repositório

```
git clone https://github.com/joaolira-dev/login-auth.git
cd login-auth
```

### 2. Backend
```
cd backend
./mvnw spring-boot:run
O backend roda por padrão em http://localhost:8080
```

### 3. Frontend (React + Vite)
```
cd frontend
npm install
npm run dev
O frontend roda por padrão em http://localhost:5173
```

## ⚙️ Configuração do CORS
- No backend, o CORS já está configurado para aceitar requisições do frontend local.
- Se mudar a porta do frontend, ajuste em CorsConfig.java.



##  🖼️ Screenshots

### Tela inicial

![Home Screen](login-auth-front/src/assets/screenshots/screenshot1.png)

### Tela de Login

![Login Screen](login-auth-front/src/assets/screenshots/screenshot2.png)




# 📄 Scripts úteis
- npm run start — inicia o frontend 
- ./mvnw spring-boot:run — inicia o backend



---
