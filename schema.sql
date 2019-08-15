DROP DATABASE donutsareawesome;

CREATE DATABASE donutsareawesome;

USE donutsareawesome;

CREATE TABLE donuts (
    id serial PRIMARY KEY,
    donut_name text NOT NULL,
    flavor text
);