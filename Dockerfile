FROM php:8.4-apache
RUN apt update
RUN apt-get update -y

RUN apt-get install -y nodejs npm

# Install Additional System Dependencies
RUN apt install git zip libzip-dev zlib1g-dev libpq-dev -y

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql pdo_pgsql zip

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the application code
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html

# Install project dependencies
RUN composer install
RUN npm install
RUN npm run build
RUN php artisan migrate --force

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
COPY 000-default.conf /etc/apache2/sites-enabled/
# Enable Apache modules
RUN a2enmod rewrite
RUN apachectl restart
RUN chown -R root:root /var/www/html
RUN chmod -R 777 /var/www/html

# uncomment during production
RUN echo "Listen 0.0.0.0:80" >> /etc/apache2/apache2.conf
EXPOSE 80
