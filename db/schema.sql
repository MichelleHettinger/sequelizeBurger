DROP DATABASE `burgers_db`;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers_db`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  `date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));