DROP DATABASE light_bites_db;
CREATE DATABASE light_bites_db; 
USE light_bites_db;

CREATE TABLE stock ( -- Stock – inventory of items that can be ordered
	meal_id integer auto_increment not null primary key, -- id of the meal
    fulfillment_date datetime not null, -- fulfillment date
	price decimal(13,2) not null, -- money
	title1 varchar(100) not null, -- name of the meal
    title2 varchar(50),
    title3 varchar(50),
    line04 varchar(50),
    line05 varchar(50),
    line06 varchar(50),
    line07 varchar(50),
    line08 varchar(50),
    line09 varchar(50),
    line10 varchar(50),
    line11 varchar(50),
    line12 varchar(50),
    line13 varchar(50),
    line14 varchar(50),
    line15 varchar(50),
    line16 varchar(50),
    line17 varchar(50),
    line18 varchar(50),
    line19 varchar(50),
    line20 varchar(50)
);
INSERT INTO stock (fulfillment_date, price, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20) VALUES ((SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),8.00,'Steak wrapped veggies with side salad','','Regular','','Keto friendly, low carb','Calories: 298.3','Protein- 35.8g','Carbs- 10.7g','Fats- 32g','','Steak','Bell pepper','Asparagus','','','','','','','');
INSERT INTO stock (fulfillment_date, price, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20) VALUES ((SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),8.00,'Keto/ Low Carb Pizza Casserole & Side salad','','Regular','','Calories 147 Calories from Fat 90','% Daily Value*','Total Fat 10g 15%','Saturated Fat 4g 20%' ,'Polyunsaturated Fat 1g','Monounsaturated Fat 2g','Cholesterol 69mg','Sodium 194mg','','-Uncured pepperoni','-Cauliflower','-Mozzarella cheese','-Tomatoes','','can offer Vegetarian option, just ask','');     
INSERT INTO stock (fulfillment_date, price, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20) VALUES ((SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),8.00,'Garlic Chicken stir fry','','Regular','','Calories: 316.2','Carbs: 23.6','Fats: 6.5','Protein: 43.9','','-Chicken','-Broccoli','-Bell pepper','-Mushrooms','','','','','','','');
INSERT INTO stock (fulfillment_date, price, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20) VALUES ((SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),8.00,'Basil Pesto Chicken, Brn Rice & Mixed Veggies','','Regular','','Calories: 560','Carbs: 36.5','Fats: 31.2','Protein:47.2','','-Basil Pesto','-Chicken','-Mixed Veggies(may change weekly)','-Brown rice','','','','','','','');
INSERT INTO stock (fulfillment_date, price, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20) VALUES ((SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4.00,'In Season Fruit Cups','','Regular','','Will change weekly','','','','','','','','','','','','','','','');


CREATE TABLE customer ( -- Login information table – for authentication
    unique_id integer not null auto_increment primary key, -- unique id for customer
    firstname varchar(50) not null, -- customer first name
    lastname varchar(50) not null, -- customer last name
    phonenumber varchar(12) not null, -- customer phone number
    email varchar(100) not null, -- customer email 
    password varchar(50) not null, -- user password
    address1 varchar(100) not null, -- customer address line 1
    address2 varchar(100), -- customer address line 2
    address3 varchar(100), -- customer address line 3
    city varchar(50) not null, -- customer address city
    state varchar(50) not null, -- customer address state
    zip varchar(10) -- customer address zip code
);
INSERT INTO customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Anthony','Duncan','281-555-1234','test@gmail.com','password123','1234 test rd','Apt 001', '', 'Austin','TX','78750');
INSERT INTO customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Justin','Mozley','281-500-1234','test1@gmail.com','password123','1120 test ln','Apt 002', '', 'Buda','TX','78610');
INSERT INTO customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Owais','Jamil','281-550-1234','test2@gmail.com','password123','1234 test ave','', '', 'Kyle','TX','78610');
INSERT INTO customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Kevin','Henderson','281-000-1234','test3@gmail.com','password123','1235 test rd','Apt 004', '', 'Buda','TX','78610');

CREATE TABLE orders ( -- Orders – Deliveries or pickups, will create a unique id to attach to shopping cart and carry forward.
	unique_id integer not null, -- unique_id for the customer (customer.unique_id)
    order_id integer not null auto_increment primary key, -- unique id for the specific order
    fulfillment_date datetime, -- fulfillment date
    order_date datetime not null, -- now() when the order is placed
    order_type varchar(10) not null, -- delivery or pick-up
    delivery_date datetime, -- date when the order should be completed (following monday) 
    order_status varchar(20) not null -- status of the order (must be updated when the order is completed)
);
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');


CREATE TABLE shopping_cart ( -- Shopping Cart – items being ordered during the ordering process
	unique_id integer not null, -- orders.unique_id (customer.unique_id)
	order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stock)
    quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null -- cost of the item in the order
);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16);


CREATE TABLE what_ordered ( -- What Ordered – once paid for, what was ordered from shopping cart
	unique_id integer not null, -- orders.unique_id (customer.unique_id)
    order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stock)
	quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null, -- cost of the item in the order
    order_date datetime not null, -- date the item was order
    delivery_date datetime-- date the delivery will be made (shopping_cart.order_date)  
);
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));


CREATE TABLE order_history ( -- History – once order completed, history of all orders from what ordered
	unique_id integer not null, -- orders.unique_id (customer.unique_id)
    order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stock)
    quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null, -- cost of the item in the order
	order_date datetime not null, -- date the item was order
    delivery_date datetime-- date the delivery will be made (shopping_cart.order_date)  
);
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));


-- CREATE TABLE ingredients ( -- ingredients that are in the meals (future)
-- 	meal_id integer not null, -- item ordered (from stock)
--     item_id integer not null auto_increment primary key, -- unique id for the ingredient in the order
--     ingredient_name varchar(100) not null, -- name of the ingredient
--     unit_number integer not null, -- number of units in the meal
--     unit_id varchar(20) not null -- unit type in the meal
-- );



