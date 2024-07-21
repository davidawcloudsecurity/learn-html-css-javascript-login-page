# Use the official MySQL image
FROM mysql:8.0

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=password123
ENV MYSQL_DATABASE=mydatabase

# Copy SQL script to initialize the database
COPY init.sql /docker-entrypoint-initdb.d/

# Expose port 3306
EXPOSE 3306
