# learn-html-css-javascript
## how to create a login page
1.1 Set Up MySQL Database using Docker
```bash
docker pull mysql:latest
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=mydatabase -p 3306:3306 -d mysql:latest
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

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
1.3 Insert a test user:
```bash
INSERT INTO users (username, password) VALUES ('user2', '123');
```
2.1 Set Up the Backend Server
Install Node.js and Express:
```bash
npm install express mysql2 body-parser
npm install bcryptjs
npm install cors
node server.js
```
