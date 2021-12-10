USE `pizzadb`;

-- --------- Categories (users) -----------

INSERT INTO pizzadb.categories (category_name, category_active) VALUES('admin', 1); -- id 1

INSERT INTO pizzadb.categories (category_name, category_active) VALUES('user', 1); -- id 2

INSERT INTO pizzadb.categories (category_name, category_active) VALUES('guest', 1); -- id 3

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


/* {
  "id": 4,
  "name": "Roquefort",
  "description": "Salsa de tomates, queso azul, aceitunas verdes o negras a elección",
  "image": "products/fugazzeta-al-roquefort.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "700"
 },
 {
  "id": 5,
  "name": "Calabresa",
  "description": "Salsa de tomates, Muzarella, Queso Provolone, Salame en rodajas, Aceitunas verdes o negras a elección",
  "image": "products/longaniza.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "700"
 },
 {
  "id": 6,
  "name": "4 quesos",
  "description": "Salsa de tomates, Muzarella, Fontina, Roquefort, Provolone",
  "image": "products/cuatro-quesos.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "800"
 },
 {
  "id": 7,
  "name": "Jamón y Champignon",
  "description": "Salsa de tomates, Queso, Jamón en rodajas, Champignones Aceitunas verdes o negras a elección",
  "image": "products/jamon-y-champingnon.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "600"
 },
 {
  "id": 8,
  "name": "Ananá",
  "description": "Ananá, Mozarella y Jamón en tiras",
  "image": "products/anana.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "900"
 },
 {
  "id": 9,
  "name": "Camarones",
  "description": "Huevo, Jamón, Camarones, Morron en tiras (sal y pimienta)",
  "image": "products/camarones.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "900"
 },
 {
  "id": 10,
  "name": "Cuatro Estaciones",
  "description": "Salsa de tomates, Mozzarella, Jamón, Ananá, Tomates y Queso Parmesano rallado",
  "image": "products/cuatro-estaciones.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "900"
 },
 {
  "id": 11,
  "name": "Rúcula y Jamón Crudo",
  "description": "Jamón Crudo, Tomates Secos, Mozzarella, Aceite de Oliva y Salsa de tomate",
  "image": "products/ruculajamoncrudo.png",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "850"
 },
 {
  "id": 12,
  "name": "Margarita",
  "description": "Tomate, Albahaca y Muzzarella",
  "image": "products/tomates-albahaca.jpg",
  "size": "Grande",
  "dough": "Normal/Integral",
  "price": "700"
 },
 {
  "id": 13,
  "name": "De huevo",
  "description": "Tomate, Albahaca y Muzzarella",
  "image": "products/huevo.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "700"
 },
 {
  "id": 14,
  "name": "Pollo",
  "description": "Tomate, Pollo y Muzzarella",
  "image": "products/pollo.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "700"
 },
 {
  "id": 15,
  "name": "Fugazzeta al roquefort",
  "description": "Tomate, Cebolla, Muzzarella y Roquefort",
  "image": "products/fugazzeta-al-roquefort.jpg",
  "size": "Grande/Mediana",
  "dough": "Normal/Integral",
  "price": "700"
 }

 */
 