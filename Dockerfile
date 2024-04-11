###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:16.20-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY --chown=node:node . .

# Generate Prisma database client code
RUN npm run prisma:generate

# Use the node user from the image (instead of the root user)
USER node

###################
# PRODUCTION
###################

FROM node:16.20-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=development /usr/src/app/ ./

# Start the server using the production build
CMD [ "node", "server.js" ]