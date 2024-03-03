# Use the official Bun base image
FROM oven/bun:latest as base
WORKDIR /app

# Install node modules in a separate layer to leverage Docker cache
COPY package.json ./
COPY bun.lockb ./
RUN bun install --production

# Copy the rest of the application source code
COPY . .

# Set the port and expose it
ENV PORT 3000
EXPOSE $PORT

# Run the Hono app with Bun
CMD ["bun", "run", "start"]