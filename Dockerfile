# ── Stage 1: Build ─────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias (npm ci es más limpio para Docker)
RUN npm ci

# Copiamos el resto del código
COPY . .

# ARREGLO DE PERMISOS: Forzamos que los binarios sean ejecutables
RUN chmod -R +x node_modules/.bin

# Ejecutamos el build
RUN npm run build

# ── Stage 2: Serve con Nginx ─────────────────────────────────────────────────
FROM nginx:alpine

# Copiamos el resultado del build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
