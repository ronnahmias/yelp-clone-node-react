CREATE DATABASE yelp-app

create table restaurants (
	id BIGSERIAL PRIMARY KEY NOT NULL,
	name varchar(50) NOT NULL,
    location varchar(50) NOT NULL,
    price_range int not null check (price_range >=1 and price_range <=5)
);