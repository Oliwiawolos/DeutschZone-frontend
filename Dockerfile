FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @mui/icons-material
RUN npm install axios
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
