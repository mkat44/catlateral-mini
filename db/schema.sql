##SCHEMA

DROP DATABASE IF EXISTS catlateral_dmg_db;
CREATE DATABASE catlateral_dmg_db;
USE catlateral_dmg_db;

CREATE TABLE things_to_destroy
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    destroyed BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);