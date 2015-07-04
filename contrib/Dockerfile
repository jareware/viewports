FROM node:0.10.35
# https://registry.hub.docker.com/_/node/

# Create workspace
RUN mkdir /app
WORKDIR /app

# Install Ruby
RUN apt-get update && apt-get install -y ruby-full

# Install test runner
RUN npm install -g mocha@1.8.2

# Make container simpler to run with longer args
ENTRYPOINT ["bash", "-c"]
