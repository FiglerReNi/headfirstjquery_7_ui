CREATE DATABASE user_interface;

CREATE USER 'user_db_user'@'localhost' IDENTIFIED BY 'user_db_password';

GRANT SELECT,INSERT,UPDATE,DELETE ON user_interface.* TO 'user_db_user'@'localhost';

USE user_interface;

CREATE TABLE `user_interface`.`form`(  
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `type` VARCHAR(32) NOT NULL,
  `distance` INT(8) UNSIGNED DEFAULT 0,
  `weight` INT(8) UNSIGNED DEFAULT 0,
  `height` INT(8) UNSIGNED DEFAULT 0,
  `color` VARCHAR(16),
  `latitude` INT(8) DEFAULT 0,
  `longitude` INT(8) DEFAULT 0,
  PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_hungarian_ci;





