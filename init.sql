-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert a sample user (hashed password example)
INSERT INTO users (username, password) VALUES ('user2', '$2a$10$D5VHJksIQ7lo1q9Au3bQmevE8OW5sI3562r0SFVGyEm5nqi9vnlGi');
