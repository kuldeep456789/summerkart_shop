FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY postcss.config.js tailwind.config.ts vite.config.ts ./
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy built files to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
