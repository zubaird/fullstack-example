# PART 2: Setting up React, making an API Call


## 1 - Serve a static page

  - Tell express which folder holds static assets
  - Create index.html in that folder

## 2 - Install React

    - Research strategy
      - install with npm
      - install webpack & babel!!!!
      - install react and react-dom

## 3 - Add React to our static page

  - Create a component
  - Render it to the DOM


## 4 - Create a main component and use Axios/Anything





































# PART 1: Setting up an express app to serve data from a database

## 1. Setup directory

 - Create serverfile
 - initialize current directory(cd) as a git repository
 - initialize cd with npm
 - create a `.gitignore` file, add node_modules
 - install dependencies: express, mysql (, body-parser, etc)

## 2. Setup Basic Express Server

 - In server.js
   - require express
   - create instance of express, save as app
   - *setup PORT
   - create a basic server route (get request for '/')
   - setup app to listen on port

## 3. Create Database and Tables & Seed Database

  - create your schema.sql file
    - commands:
      - Create a database (donutsareawesome)
      - Use the database
      - Create a simple table: 'donuts' -> id, donut_name
    - create a seed.sql
      - insert into donuts...

## 4. Connect Express App to Database

 - 

## 5. Deliver data from a database through a server route