FROM nginx:stable-alpine

WORKDIR /etc/nginx/conf.d/

COPY . /usr/share/nginx/html/

RUN mv /usr/share/nginx/html/default.conf /etc/nginx/conf.d/

EXPOSE 80
