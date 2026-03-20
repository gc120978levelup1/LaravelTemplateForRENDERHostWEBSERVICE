#!/bin/bash

# Copy the appropriate .env file and docker-compose.yml
# equal to DB_DATABASE in .env
database_name="my-app-database"

# Database Server Container Name in docker-compose.yml (mysql)
database_server="database-mysql-server"

# Webserver (WWW) Container Name in docker-compose.yml (apache/php)
webserver_name="apache-server"

function control_panel {
    echo "==================================================================="
    echo "  Usage: $0 check     - Check the status of the containers"
    echo "         $0 merge     - Merge this ss_DOCKER_LAMP to main project"
    echo "         $0 up        - Start the Garry's Mod server"
    echo "         $0 down      - Stop the Garry's Mod server"
    echo "         $0 migrate   - Execute database migration"
    echo "         $0 dev       - Launch the development server"
    echo "         $0 bkup      - Backup the database"
    echo "         $0 visit-db  - Visit the database container"
    echo "         $0 visit-www - Visit the web server container"
    echo "         $0 help      - Show this help message"
    echo "         $0 -h        - Show this help message"
}

if [ $1 == "up" ]
then
    clear
    echo "Starting Garry's Mod server..."
    docker-compose up -d
    control_panel
elif [ $1 == "down" ]
then
    clear
    echo "backing up mssql database down Garry's Mod server..."
    docker exec $database_server mysqldump -h localhost -u root $database_name > ./database_folder/$database_name.sql
    echo "Shutting down Garry's Mod server..."
    docker-compose down
    control_panel
elif [ $1 == "migrate" ]
then
    clear
    echo "database migration..."
    php artisan migrate
    echo "backing up mysql database down Garry's Mod server..."
    docker exec $database_server mysqldump -h localhost -u root $database_name > ./database_folder/$database_name.sql
    control_panel
elif [ $1 == "dev" ]
then
    clear
    echo "Development Server..."
    npm run dev &
    php artisan serve
    control_panel
elif [ $1 == "bkup" ]
then
    clear
    echo "backing up mssql database down Garry's Mod server..."
    docker exec $database_server mysqldump -h localhost -u root $database_name > ./database_folder/$database_name.sql
    control_panel
elif [ $1 == "visit-db" ]
then
    clear
    echo "Visiting Garry's Mod server...$database_server"
    docker exec -it $database_server bash
    control_panel
elif [ $1 == "visit-www" ]
then
    clear
    echo "Visiting Garry's Mod server...$webserver_name "
    docker exec -it $webserver_name bash
    control_panel
elif [ $1 == "check" ]
then
    clear
    echo "Checking Garry's Mod server...$2"
    docker ps
    control_panel
elif [ $1 == "merge" ]
then
    clear
    echo "Marging Garry's Mod server to Project...$2"
    cp -r -a ./context ../
    cp -r -a ./database_folder ../
    cp -r -a ./redis-data ../
    cp -r -a ./.env ../
    cp -r -a ./docker-compose.yml ../
    cp -r -a ./ss ../
    control_panel
    echo "Invoke a cd .. command in order to go back to main folder"
    echo "   "
    echo "   cd .. "
else
    clear
    control_panel
fi
