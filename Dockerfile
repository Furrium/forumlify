FROM node:22.23.2-bookworm-slim

ENV NODE_ENV=production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node . .
RUN mkdir -p /app/uploads && chown node:node /app/uploads

USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "scripts/healthcheck.js"]

CMD ["sh", "-c", "npm run migrate && npm start"]
