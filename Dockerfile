FROM node:16
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=80
ENV BACK_URL=localhost
ENV BACK_PORT=8082
ENV BPM_URL=http://localhost:8082
ENV SGDEA_URL=http://localhost:8082
EXPOSE $PORT
CMD ["npm", "run", "dev"]
