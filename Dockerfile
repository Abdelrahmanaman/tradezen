FROM oven/bun:latest
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
EXPOSE ${APP_PORT:-3000}
CMD ["bun", "run", "dev"]