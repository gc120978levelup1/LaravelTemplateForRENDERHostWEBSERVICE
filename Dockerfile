# Select Docker Apache/PhP Image
FROM php:8.4-apache

# Updating of application list
RUN apt update
RUN apt-get update -y

# Instal npm and nodejs javascript frameworks
RUN apt-get install -y nodejs npm

# Install Additional System Dependencies
RUN apt install git zip libzip-dev zlib1g-dev libpq-dev -y

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions for Database Access
RUN docker-php-ext-install pdo_mysql pdo_pgsql zip

# Install composer for Laravel (back end)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install and enable database communication
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# -----------------------------------------------------------------------------------------------------------
# Copy the application code
# Copy all the web app code to the linux Apache html folder
COPY . /var/www/html

# Set the working directory of Apache Webserver
WORKDIR /var/www/html

# Install project dependencies
RUN composer install
RUN npm install
RUN npm run build

# RUN php database and file migration
RUN php artisan storage:link
RUN php artisan migrate --force

# copy apache settings for Laravel Hosting
COPY 000-default.conf /etc/apache2/sites-enabled/

# uncomment during production
RUN echo "Listen 0.0.0.0:80" >> /etc/apache2/apache2.conf

# Enable Apache Web Service
RUN a2enmod rewrite
RUN apachectl restart
RUN chown -R root:root /var/www/html
RUN chmod -R 777 /var/www/html

EXPOSE 80
