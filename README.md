# learn-html-css-javascript
how to create login page
1. Set Up the Database
   
Create a table for users in MySQL:
```bash
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
Insert a test user:
```bash
INSERT INTO users (username, password) VALUES ('user2', '123');
```
2. Set Up the Backend Server
Install Node.js and Express:
```bash
npm install express mysql2 body-parser
```
3. Run MySql Docker
```bash
docker pull mysql:latest
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=mydatabase -p 3306:3306 -d mysql:latest
```
3.1 Using Docker Exec to connect from within the Docker container:
```bash
docker exec -it mysql-container mysql -u root -p
```
