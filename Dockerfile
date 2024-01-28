FROM node:18.17.1

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy only the necessary files for running tests
COPY src src
COPY test test

# Run tests and print the results
# RUN npm test

# Copy the rest of the application code to the container
COPY . .

# Specify the command to run your application
CMD ["npm", "start"]