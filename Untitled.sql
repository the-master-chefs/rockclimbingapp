DROP DATABASE scrapedData;
CREATE DATABASE scrapedData; 
USE scrapedData;

CREATE TABLE scrape (
	id integer auto_increment not null primary key,
	type varchar(10) not null,
	site varchar(50) not null,
	title varchar(255),
	url varchar(255),
	picture varchar(255),
    description varchar(500),
    article varchar(1000), 
    createdAt datetime,
    updatedAt datetime
);

-- INSERT INTO scrape (type, site, title, url, picture, description, createdAt, updatedAt) VALUES (
-- "Article","Bootcamp Spot","https://bootcampspot.com/",""

-- );


-- (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),8.00,'Steak wrapped veggies with side salad','','Regular','','Keto friendly, low carb','Calories: 298.3','Protein- 35.8g','Carbs- 10.7g','Fats- 32g','','Steak','Bell pepper','Asparagus','','','','','','','' 



