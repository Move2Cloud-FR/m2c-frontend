FROM ACCOUNT_ID.dkr.ecr.eu-west-1.amazonaws.com/node:18-alpine AS base

#########################################################################
# Install dependencies only when needed
#########################################################################
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN  npm ci

#########################################################################
# Rebuild the source code only when needed
#########################################################################
FROM base AS builder

# Set environment variable (local, dev, prd)
ARG environment

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build-$environment

#########################################################################
# Production image, copy all the files and run next
#########################################################################
FROM base AS runner

ENV NODE_ENV=production

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]