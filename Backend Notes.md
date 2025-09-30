for backend you change directory cd to server folder
then run npm init -y
create app.js folder and configure the main the in the json to app.js
Then install express framework. npm install express
Then import it in the app.js by declaring it as a variable
NB: server is like a house that houses the information of your website
To check live server on backend, install nodenon with npm install -D nodemon
Then go to the scripts under dependencies "dev": "nodemon app.js" add "dev": "nodemon app.js" then run npm run dev in the terminal

DB
Open MongoDB and sign up
Go to terminal and install mongoose. npm install mongoose and import using a variable declaration
Then go create a project in the DB, and creat deployemnt
Then connect the DB using try and catch

NB: Everything that is going to the database is an object datatype(i.e keys and values)
Important folders
1. Model folder: A model represents the data structure and how how it will be stored or retrived in the database. It can also be reffered to as schema

// created user.js for taking user signing info

2. Controller folder: A controller contains the logic of how your application responds when a request comes in
Types of requests
1. GET request
2. POST request
3. Delete request
4. Patch request
5. Put request: deleting and inputting another 

Response ()

3.Route folder: Routes defines the endpoints(API url) so that the frontend can fetch when we're trying to connect backend to with frontend. authRouter is wher we're doing all the authentication

MODE => CONTROLLER => ROUTE => MAIN FILE(app.js)