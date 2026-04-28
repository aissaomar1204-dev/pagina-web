# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Serve con Nginx ─────────────────────────────────────────────────
FROM nginx:alpine

# Copia los archivos compilados al directorio de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de nginx para SPA (React Router) + compresión gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
