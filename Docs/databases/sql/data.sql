USE `pizzadb`;

-- --------- Categories (users) -----------

INSERT INTO pizzadb.categories (category_name, category_active) VALUES('admin', 1); -- id 1

INSERT INTO pizzadb.categories (category_name, category_active) VALUES('user', 1); -- id 2


-- --------- Users -----------

INSERT INTO pizzadb.users
(user_category_id, user_firstname, user_lastname, user_email, user_password, user_image, user_active)
VALUES(1, 'Facundo', 'Vignoles', 'fvignoles@gmail.com', '$2a$10$EGyDAvj3Dh12qWSGjl886uq2uzmC4gcEPfLBA1Xoisyq3hZDPJ6d.', 'user1637545267021.jpg', 1);

INSERT INTO pizzadb.users
(user_category_id, user_firstname, user_lastname, user_email, user_password, user_image, user_active)
VALUES(2, 'Juan', 'P�rez', 'juanperez@gmail.com', '$2a$10$p.BdGLInFuL2RILC2U7m9.fgkm54Q7DgybeWEs2cSefPngX6VPeT.', 'user1637545327683.jpg', 1);

INSERT INTO pizzadb.users
(user_category_id, user_firstname, user_lastname, user_email, user_password, user_image, user_active)
VALUES(2, 'Jimmy', 'Connors', 'jconnors@gmail.com', '$2a$10$bDL6wsx4C/5yQTxVEAJHb.EQs.qFQ.mW8SU5B7Bxyna2om37t7xnG', '../../public/img/avatardefault.png', 1);

INSERT INTO pizzadb.users
(user_category_id, user_firstname, user_lastname, user_email, user_password, user_image, user_active)
VALUES(2, 'Pedro', 'Lista', 'plista@gmail.com', '$2a$10$PM.UvqblMvSAC42YxhPHTeIqyN76Kmc9VFAsc1aekGzs/iSct1Sbm', '../../public/img/avatardefault.png', 1);

INSERT INTO pizzadb.users
(user_category_id, user_firstname, user_lastname, user_email, user_password, user_image, user_active)
VALUES(1, 'as', 'as', 'agustincolman0310@gmail.com', '$2a$10$X8rSdtzOh1zC822QzYtPnOtVI9xiZEiPRfRIQRHZIrbIj.tq1I5vi', 'user1637591965086.png', 1);

-- --------- Ingredients (pizzas) -----------

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Salsa de Tomate', 1); -- id 1

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Muzzarella', 1); -- id 2

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Aceitunas verdes', 1); -- id 3

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Aceitunas negras', 1); -- id 4

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Queso', 1); -- id 5

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Tomates en rodajas', 1); -- id 6

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Oregano', 1); -- id 7

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Cebolla', 1); -- id 8

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Queso Parmesano', 1); -- id 9

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Queso Roquefort', 1); -- id 10

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Queso Provolone', 1); -- id 11

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Salame en rodajas', 1); -- id 12

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Queso Fontina', 1); -- id 13

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Champignones', 1); -- id 14

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Jamon cocido', 1); -- id 15

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Jamon crudo', 1); -- id 16

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Anana en rodajas', 1); -- id 17

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Huevo', 1); -- id 18

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Morrones', 1); -- id 19

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Camarones', 1); -- id 20

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Tomates Secos', 1); -- id 21

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Aceite de Oliva', 1); -- id 22

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Albahaca', 1); -- id 23

INSERT INTO pizzadb.ingredients (ingredient_name, ingredient_active) VALUES('Pollo picado', 1); -- id 24

-- --------- sizes (tamanos pizzas) -----------

INSERT INTO pizzadb.sizes (size_name, size_active) VALUES('Pizzeta', 1); -- id 1

INSERT INTO pizzadb.sizes (size_name, size_active) VALUES('Mediana', 1); -- id 2

INSERT INTO pizzadb.sizes (size_name, size_active) VALUES('Grande', 1); -- id 3

INSERT INTO pizzadb.sizes (size_name, size_active) VALUES('Gigante', 1); -- id 4

-- --------- doughs (masas pizzas) -----------

INSERT INTO pizzadb.doughs (dough_name, dough_active) VALUES('Tradicional', 1); -- id 1

INSERT INTO pizzadb.doughs (dough_name, dough_active) VALUES('Integral', 1); -- id 2

-- --------- products (pizzas) -----------

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Muzzarella', 'Descripcion Muzzarella', 'products/mozzarella.jpg', 750, 1); -- id 1
-- Muzzarella, aceitunas verdes

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(1, 1);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Napolitana', 'Descripcion Napolitana', 'products/napolitana.jpg', 650, 1); -- id 2
-- Queso, tomates en rodajas, ajo, orégano, aceitunas verdes

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(6, 2);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Fugazzeta', 'Descripcion Fugazzeta', 'products/fugazzeta.jpg', 650, 1); -- id 3
-- Queso, Cebolla y Parmesano

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(8, 3);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Roquefort', 'Descripcion Roquefort', 'products/fugazzeta-al-roquefort.jpg', 700, 1); -- id 4
-- Queso azul, aceitunas verdes

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(10, 4);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Calabresa', 'Descripcion Calabresa', 'products/longaniza.jpg', 700, 1); -- id 5
-- Muzarella, Queso Provolone, Salame en rodajas, Aceitunas

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(11, 5);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, '4 quesos', 'Descripcion 4 quesos', 'products/cuatro-quesos.jpg', 800, 1); -- id 6
-- Muzarella, Fontina, Roquefort, Provolone

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(13, 6);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Jamón y Champignon', 'Descripcion Jamón y Champignon', 'products/jamon-y-champingnon.jpg', 600, 1); -- id 7
-- Queso, Jamón en rodajas, Champignones Aceitunas verdes

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(14, 7);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Ananá', 'Descripcion Ananá', 'products/anana.jpg', 900, 1); -- id 8
-- Ananá, Mozarella y Jamón en tiras

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(17, 8);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Camarones', 'Descripcion Camarones', 'products/camarones.jpg', 900, 1); -- id 9
-- Huevo, Jamón, Camarones, Morron en tiras (sal y pimienta)

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(20, 9);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Cuatro Estaciones', 'Descripcion Cuatro Estaciones', 'products/cuatro-estaciones.jpg', 900, 1); -- id 10
-- Mozzarella, Jamón, Ananá, Tomates y Queso Parmesano rallado

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(9, 10);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Rúcula y Jamón Crudo', 'Descripcion Rúcula y Jamón Crudo', 'products/ruculajamoncrudo.png', 850, 1); -- id 11
-- Jamón Crudo, Tomates Secos, Mozzarella, Aceite de Oliva y Salsa de tomate

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(16, 11);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Margarita', 'Descripcion Margarita', 'products/tomates-albahaca.jpg', 700, 1); -- id 12
-- Tomate, Albahaca y Muzzarella

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(23, 12);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'De huevo', 'Descripcion De huevo', 'products/huevo.jpg', 700, 1); -- id 13
-- Tomate, Huevo rallado y Muzzarella

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(18, 13);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Pollo', 'Descripcion Pollo', 'products/pollo.jpg', 700, 1); -- id 14
-- Tomate, Pollo y Muzzarella

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(24, 14);

INSERT INTO pizzadb.products
(product_size_id, product_dough_id, product_name, product_description, product_image, product_price, product_active)
VALUES(3, 1, 'Fugazzeta al roquefort', 'Descripcion Fugazzeta al roquefort', 'products/fugazzeta-al-roquefort.jpg', 700, 1); -- id 15
-- Tomate, Cebolla, Muzzarella y Roquefort

INSERT INTO pizzadb.ingredients_products
(ingredients_products_ingredientsid, ingredients_products_productid)
VALUES(10, 15);