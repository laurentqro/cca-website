FROM klakegg/hugo:0.123.8-ext-alpine-onbuild AS hugo

FROM nginx
COPY --from=hugo /target /usr/share/nginx/html
