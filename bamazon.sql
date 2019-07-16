DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(30),
price DECIMAL(10,2),
stock_quantity INTEGER,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Airpods", "Electronics", "125.00", "36"),
("Plaid Burberry Shirt", "Clothing", "250.00", "41"),
("Personal Handheld Fan", "Home", "15.00", "106"),
("NutriBullet Smoothie Blender", "Home", "50.00", "87"),
("Brown Leather Reclining Loveseat", "Home", "500.00", "16"),
("Canon EOS Camera","Electronics", "400.00", "62"),
("Hanes Boxer Briefs 6pk","Clothing", "18.00", "348"),
("Levi Pants","Clothing", "49.99", "259"),
("PS Plus 12 Month Subscription","Gaming", "59.99", "874"),
("Smino Blkswn Vinyl","Music", "30.00", "77");