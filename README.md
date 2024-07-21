# learn-html-css-javascript
## how to create a login page
1.1 Set Up MySQL Database using Docker
```bash
docker pull mysql:latest; \
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=password123 -e MYSQL_DATABASE=mydatabase -p 3306:3306 -d mysql:latest
```
```bash
docker stop mysql-container
docker start mysql-container

Persistent Volume

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=mydatabase -p 3306:3306 -v mysql-data:/var/lib/mysql -d mysql:latest
```
1.2 Create a table for users in MySQL:
```bash
docker exec -it mysql-container mysql -u root -p

SHOW DATABASES;
use mydatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
1.3 Insert a test user:
```bash
INSERT INTO users (username, password) VALUES ('user2', '$2a$10$D5VHJksIQ7lo1q9Au3bQmevE8OW5sI3562r0SFVGyEm5nqi9vnlGi');
```
2.1 Set Up the Backend Server
Install Node.js and Express:
```bash
npm install express mysql2 body-parser; \
npm install bcryptjs; \
npm install cors; \
node server.js
```
3.1 Setup Nginx to avoid cors
```bash
docker build -t nginx-image .; \
docker run -d --name nginx01 -p 80:80 nginx-image
```
https://www.stackhawk.com/blog/fixing-no-access-control-allow-origin-header-present/#there-are-two-approaches-to-getting-it-right
