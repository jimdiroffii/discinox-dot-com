FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/404.html /usr/share/nginx/html/404.html
COPY src/css/style.css /usr/share/nginx/html/css/style.css
COPY src/js/script.js /usr/share/nginx/html/js/script.js
