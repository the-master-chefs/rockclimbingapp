DROP DATABASE scrapedData;
CREATE DATABASE scrapedData; 
USE scrapedData;

CREATE TABLE scrape (
	unique_id integer auto_increment not null primary key,
	type varchar(10) not null,
	site varchar(50) not null,
    url varchar(255),
	title varchar(255),
	picture varchar(255),
    description varchar(500),
    article varchar(1000), 
    createdAt datetime,
    updatedAt datetime
);

INSERT INTO scrape (type, site, url, title, picture, description, article, createdAt, updatedAt) VALUES ("Article","Rock & Ice","https://bootcampspot.com/","Test Title","https://static.wixstatic.com/media/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg/v1/fill/w_492,h_492,al_c,q_80,usm_0.66_1.00_0.01/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg","Test Article Description","",current_timestamp(),current_timestamp());
INSERT INTO scrape (type, site, url, title, picture, description, article, createdAt, updatedAt) VALUES ("Picture","Climbing.com","https://bootcampspot.com/","Test Title","https://static.wixstatic.com/media/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg/v1/fill/w_492,h_492,al_c,q_80,usm_0.66_1.00_0.01/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg","Test Picture Description","",current_timestamp(),current_timestamp());
INSERT INTO scrape (type, site, url, title, picture, description, article, createdAt, updatedAt) VALUES ("NewDeal","REI.com","https://bootcampspot.com/","Test Title","https://static.wixstatic.com/media/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg/v1/fill/w_492,h_492,al_c,q_80,usm_0.66_1.00_0.01/38b4e0_606fe29993d34b3789f6c52c60949b3e~mv2.jpg","Test Deal Description","",current_timestamp(),current_timestamp());


-- DELETE FROM scrapedData.scrape
-- WHERE createdAt < 
-- order by unique_id DESC
-- ;

SELECT * 
FROM scrapedData.scrape
order by unique_id desc;

-- DELETE FROM scrapedData.scrape 



