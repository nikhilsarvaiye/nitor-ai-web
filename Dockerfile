#Stage 1
FROM node:lts-alpine AS builder
# Add a work directory
WORKDIR /app
COPY . .

#Stage 2
# Bundle static assets with nginx
FROM nginx:1.24.0-alpine-slim AS production
# ENV NODE_ENV=production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]

