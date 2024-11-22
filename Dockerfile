FROM node:alpine

ENV TZ=Asia/Karachi

RUN apk add --no-cache \
    tzdata \
    ffmpeg \
    git \
    imagemagick \
    python3 \
    graphicsmagick \
    sudo \
    npm \
    yarn \
    curl \
    bash && \
    cp /usr/share/zoneinfo/Asia/Karachi /etc/localtime && \
    echo "Asia/Karachi" > /etc/timezone

RUN npm install -g supervisor

RUN apk del curl && \
    rm -rf /var/cache/apk/*

CMD ["bash"]
