FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build

# Serve the app using serve (React static server)
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]

EXPOSE 3000
