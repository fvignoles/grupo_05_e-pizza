CREATE DATABASE `pizzadb`;

USE `pizzadb`;

CREATE TABLE `users` (
   `user_id` INT NOT NULL AUTO_INCREMENT,
   `user_category_id` INT NOT NULL,
   `user_firstname` CHAR(50) NOT NULL,
   `user_lastname` CHAR(50) NOT NULL,
   `user_email` CHAR(50) NOT NULL,
   `user_password` CHAR(100) NOT NULL,
   `user_image` CHAR(50) NOT NULL,
   `user_active` TINYINT NOT NULL,
   PRIMARY KEY (`user_id`)
);

CREATE TABLE `categories` (
   `category_id` INT NOT NULL AUTO_INCREMENT,
   `category_name` CHAR(30) NOT NULL,
   `category_active` TINYINT NOT NULL,
   PRIMARY KEY (`category_id`)
);

CREATE TABLE `products` (
   `product_id` INT NOT NULL AUTO_INCREMENT,
   `product_size_id` INT NOT NULL,
   `product_dough_id` INT NOT NULL,
   `product_name` CHAR(50) NOT NULL,
   `product_description` CHAR(50) NOT NULL,
   `product_image` CHAR(50) NOT NULL,
   `product_price` DECIMAL(10,2) NOT NULL,
   `product_active` TINYINT NOT NULL,
   PRIMARY KEY (`product_id`)
);

CREATE TABLE `sizes` (
   `size_id` INT NOT NULL AUTO_INCREMENT,
   `size_name` CHAR(30) NOT NULL,
   `size_active` TINYINT NOT NULL,
   PRIMARY KEY (`size_id`)
);

CREATE TABLE `doughs` (
   `dough_id` INT NOT NULL AUTO_INCREMENT,
   `dough_name` CHAR(30) NOT NULL,
   `dough_active` TINYINT NOT NULL,
   PRIMARY KEY (`dough_id`)
);

CREATE TABLE `ingredients` (
   `ingredient_id` INT NOT NULL AUTO_INCREMENT,
   `ingredient_name` CHAR(30) NOT NULL,
   `ingredient_active` TINYINT NOT NULL,
   PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE `carts` (
   `cart_id` INT NOT NULL AUTO_INCREMENT,
   `cart_user_id` INT NOT NULL,
   `cart_quantity` SMALLINT NOT NULL,
   `cart_amount` DECIMAL(10,2) NOT NULL,
   `cart_active` TINYINT,
   PRIMARY KEY (`cart_id`)
);

CREATE TABLE `products_Carts` (
   `product_cart_id` INT NOT NULL AUTO_INCREMENT,
   `product_cart_cartid` INT NOT NULL,
   `product_cart_productid` INT NOT NULL,
   `product_cart_quantity` SMALLINT NOT NULL,
   PRIMARY KEY (`product_cart_id`)
);

CREATE TABLE `ingredients_products` (
   `ingredients_products_id` INT NOT NULL AUTO_INCREMENT,
   `ingredients_products_ingredientsid` INT NOT NULL,
   `ingredients_products_productid` INT NOT NULL,
   PRIMARY KEY (`ingredients_products_id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_bc7190a9-3c3d-4d28-84ae-663bbe474d0f` FOREIGN KEY (`user_category_id`) REFERENCES `categories`(`category_id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_1817d770-a15e-4239-8621-c5d3224a10f4` FOREIGN KEY (`product_size_id`) REFERENCES `sizes`(`size_id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_acc1caa4-cdf1-40ee-b73d-dd64d5663f98` FOREIGN KEY (`product_dough_id`) REFERENCES `doughs`(`dough_id`)  ;

ALTER TABLE `carts` ADD CONSTRAINT `FK_b47603af-d427-4e5a-aaeb-06ad77116cb8` FOREIGN KEY (`cart_user_id`) REFERENCES `users`(`user_id`)  ;

ALTER TABLE `products_carts` ADD CONSTRAINT `FK_7891cb92-742d-4b6a-9229-ea3d6490b685` FOREIGN KEY (`product_cart_cartid`) REFERENCES `carts`(`cart_id`)  ;

ALTER TABLE `products_carts` ADD CONSTRAINT `FK_dd7e24d8-0cb5-466c-a60d-3e36740e12da` FOREIGN KEY (`product_cart_productid`) REFERENCES `products`(`product_id`)  ;

ALTER TABLE `ingredients_products` ADD CONSTRAINT `FK_00f30552-023b-4ef7-98f9-8dcf46b66460` FOREIGN KEY (`ingredients_products_ingredientsid`) REFERENCES `ingredients`(`ingredient_id`)  ;

ALTER TABLE `ingredients_products` ADD CONSTRAINT `FK_032c84e2-16a8-4181-befe-a6a4edcd95e5` FOREIGN KEY (`ingredients_products_productid`) REFERENCES `products`(`product_id`)  ;

