FROM ubuntu:latest as builder

ENV HUGO_VERSION=0.86.0
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz /tmp/
RUN tar -xf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -C /usr/local/bin/

COPY . /source
RUN hugo --source=/source/ --destination=/public/

FROM nginx
COPY --from=builder /public/ /usr/share/nginx/html/
