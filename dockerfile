# Step 1: Use Node.js base image
FROM node:18-alpine AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependency files and install
COPY package*.json ./
RUN npm install

# Step 4: Copy source code
COPY . .

# Step 5: Build Next.js app
RUN npm run build


# Step 6: Run production server
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only needed files from builder stage
COPY --from=builder /app ./



EXPOSE 3000
CMD ["npm", "start"]
