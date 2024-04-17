# Use the official Node.js image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app's source code to the working directory
COPY . .

ARG AUTH_SECRET
ENV AUTH_SECRET=$AUTH_SECRET
ARG AUTH_GOOGLE_ID
ENV AUTH_GOOGLE_ID=$AUTH_GOOGLE_ID
ARG AUTH_GOOGLE_SECRET
ENV AUTH_GOOGLE_SECRET=$AUTH_GOOGLE_SECRET
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
ARG RAZORPAY_KEY
ENV RAZORPAY_KEY=$RAZORPAY_KEY
ARG RAZORPAY_SECRET
ENV RAZORPAY_SECRET=$RAZORPAY_SECRET
ENV AUTH_TRUST_HOST="true"
ARG NEXT_AUTH_URL
ENV NEXT_AUTH_URL=$NEXT_AUTH_URL

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Prisma setup
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
ENTRYPOINT ["npm", "start"]