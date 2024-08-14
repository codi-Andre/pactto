FROM oven/bun:1.1.24-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package.json bun.lockb ./

USER root

RUN chown -R app:app .

USER app

RUN bun install

COPY . .

CMD [ "bun", "start" ]

EXPOSE 5173