-- DROP DATABASE IF EXISTS hella_social_db;
-- CREATE database hella_social_db;

USE hella_social_db;

-- INSERT INTO Interests (name, category)
-- VALUES ('Van Halen', 'music'),('Warriors','sports');

-- -- USERS TABLE
-- CREATE TABLE users
-- (
--     id INT AUTO INCREMENT NOT NULL,
--     name VARCHAR(255) NULL,
--     email VARCHAR(255) NULL,
--     interest1 VARCHAR(255) NULL,
--     interest2 VARCHAR(255) NULL,
--     interest3 VARCHAR(255) NULL,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO users (name, email, interest1, interest2, interest3)
-- VALUES ('Grace', 'grace@gmail.com', '1', '2', '3');
-- VALUES ('Elena', 'elena@gmail.com', '3', '5', '1');
-- VALUES ('Crystal', 'crystal@gmail.com', '1', '4', '2' );
-- VALUES ('Peter', 'peter@gmail.com', '3', '8', '4' );
-- VALUES ('Alex', 'alex@gmail.com', '9', '7', '11' );

-- --INTERESTS table
-- CREATE TABLE interests
-- (
--     id INT NOT NULL,
--     name VARCHAR (255) NULL,
-- );

-- INSERT INTO interests (name, category)
-- VALUES ('Van Halen', 'music');
-- VALUES ('Warriors','sports');
-- VALUES ('Sous Vide','food');
-- VALUES ('movies');
-- VALUES ('netflix & chill');
-- VALUES ('religion/spirituality');
-- VALUES ('THICC lifestyle');
-- VALUES ('technology');
-- VALUES ('academic');
-- VALUES ('family');
-- VALUES ('arts and literature');
-- VALUES ('dating');


-- -- SUBINTERESTS table
-- CREATE TABLE subinterests
-- (
--     id INT NOT NULL,
--     name VARCHAR (255) NULL,
--     interest_id INT NOT NULL,
-- );

-- INSERT INTO subinterests (name, interest_id)
-- VALUES ('Stranger Things', '5');

-- --MESSAGEBOARD table
-- CREATE TABLE messageboard
-- (
--     id INT NOT NULL,
--     name VARCHAR (255) NULL,
-- );

-- --MESSAGES table
-- CREATE TABLE messages
-- (
--     id INT NOT NULL,
--     name VARCHAR (255) NULL,
-- );