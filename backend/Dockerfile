FROM php:8.2-cli

RUN apt-get update
RUN apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php

RUN mv composer.phar /usr/local/bin/composer

RUN chmod +x /usr/local/bin/composer

WORKDIR /var/www/html
COPY . /var/www/html

COPY --chown=www-data:www-data . /var/www/html
EXPOSE 8000
CMD ["php","artisan","serve"]
