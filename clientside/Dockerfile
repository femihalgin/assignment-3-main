FROM node:16 as builder

WORKDIR /app
COPY package*.json /app/

RUN npm install --force
COPY ./ /app/
RUN npm run build

FROM nginx
WORKDIR /clientside
## Make a copy of default configuration file and change listen port to 8080
RUN cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.orig && \
    sed -i 's/listen[[:space:]]*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

#RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build/ /usr/share/nginx/html

RUN chmod -R 777 /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
