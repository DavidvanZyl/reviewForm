FROM node:12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
RUN yarn global add react-scripts@3.4.3

# add app
COPY . ./

# start app
CMD ["yarn", "start"]