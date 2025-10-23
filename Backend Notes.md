For backend you change directory cd to server folder
-->  run npm init -y
--> create app.js folder and configure the main the in the json to app.js
--> install express framework. npm install express
--> import it in the app.js by declaring it as a variable
NB: server is like a house that houses the information of your website
--> To check live server on backend, install nodenon with npm install -D nodemon
--> go to the scripts under dependencies "dev": "nodemon app.js" add "dev": "nodemon app.js" then run npm run dev in the terminal

DB
--> Open MongoDB and sign up
--> Go to terminal and install mongoose. npm install mongoose and import using a variable declaration in the app.js
--> go create a project in the DB, and create deployemnt
Then connect the DB using try and catch

NB: Everything that is going to the database is an object datatype(i.e keys and values)

IMPORTANT FOLDERS
1. Model folder or schema folder: A model represents the data structure and how it will be stored or retrived in the database. It can also be reffered to as schema

// created user.js for taking user signing info

2. Controller folder: A controller contains the logic of how your application responds when a request comes in
   Types of requests
1. GET request
1. POST request
1. Delete request
1. Patch request
1. Put request: deleting and inputting another

Response ()

3. Route folder: Routes defines the endpoints(API url) so that the frontend can fetch when we're trying to connect backend to with frontend. authRouter is wher we're doing all the authentication

Flow of operation
MODEL => CONTROLLER => ROUTE => MAIN FILE(app.js)

TO ENCRYPT PASSWORD
--> install bycryptjs package with npm i bcryptjs and then import it in the authController.js
--> Then
--> const salt = await bcrypt.genSalt(10) // level of hashing for the password
--> const hashedPassword = await bcrypt.hash(password, salt)
   and the password will be declared a key and changed to password: hashedPassword

const isPasswordMatch = await bcrypt.compare(password, user.password) // Is used to compare hashed password and return as error is password didn't match
if (!isPasswordMatch) {
res.status(401).json ({message: "Wrong Password"}) }

--> Json web token is used for tokenization. and it's used to generate token for a web user to sign in for some period of time install with npm i jsonwebtoken, then import it using const jwt = require.....

--> .env is needed to be installed to hide some keys and informations. and you install it with npm i dotenv
--> copy and cut the mongo_uri in it {the mongo db connection string}
--> Then import and configure it in the authController. require("dotenv").config(); and make sure it's at the topmost and then use it wherever you need it with process.env.MONGO_URI and do the same for the ports as well

--> JWT_SECRET is a key to unlock the token and must be personal to you (secret)

--> copy and paste token const token = jwt.sign({ userId: user. _id }, process.env.JWT_SECRET, {
   expiresIn: "3d", and paste it in the login as well. Then go reconfigure your authRouter.js to accept POST request for login

--> To test the login" make sure to copy the token generated after the registration on postman, then when you want to try login, input Authorization as the key, and "Bearer (..with your token)" as the value in the headers of your login

--> To create the project movies DB. Movies.js was created and also make sure to export it and also create amovies.json file. 
--> create a movies.Json file and then start creating your movies and other neccesary objects like images and types.
--> create a movieController.js file under controllers folder. Then import const Movies = require("../models/movies")  --> --> create the controller for allMovies, movies only and series only. Then make sure to export the module, then go to the routes and create a movieRouter.js and import express and router. Then go and import the movieRouter in the app.js.

--> To populate our database with movies.json i.e to upload your movies to the database
--> Open a populate.js inside server folder
--> import .env
--> import mongoose
--> import the movie model and moviejson
--> And make sure to invoke the function written

--> To view and make sure the movies/files has populated/uploaded to database, type node populate.js in the project server folder

--> There's no model for bookmark because it's just saving what a signed in user books
--> Create a bookamrkController.js
--> Then create a middleware folder under the server folder, create a auth.js under  it
--> Note that we're doing this so that all the users will have an ID

--> Make sure to create a allBookmark, addBookmark and removeBookmark in the bookmark controller

--> create a bookmarkRouter.js in the routes folder
--> import express and router
--> make sure to update your bookmark router
--> add tbr controller to logout user in the auth controller as well, make sure to export it and update thr authRouter
--> install cors npm i cors, then import it in the app.js and also make it a middleware as well with app.use...
--> Copy the client folder address i.e local host and paste it in the .env file

--> To hide our .env add a new file .gitignore and type /node_modules  and .env 
--> To host backend; sign up render.com, sign in with github and add new project, then type node app.js in the start command and input your .env values to the environment variable

CONNECTING FRONT END TO BACKEND
--> create a axiosConfig.js in the utils folder in the front end
--> Then install the axios package in the client folder
--> npm install axios, them import it in the axiosConfig folder
--> Then connect the end point from render to axios with axiosInstance
--> And make sure to export whatever you've done in the axiosConfig
--> Then in the src folder, create a hooks folder
--> Then create a useFetch.js file in it
--> Import axiosInstance
--> install toast as well, it's used for showing success messages


--> Make sure to install Toaster and import it in the app.jsx and also import in the usefetch.js
--> Function to add and remove bookmark in the useFetch
--> Function to update the UI in usefetch
--> Function to set timeout in the usefetch as well

--> Create a context folder in the src, and create a Authcontext.jsx file
--> Create a useAuth.js file under hooks
--> Make sure to add <AuthProvider> to the app.jsx too
--> Make sure {handleGetUser} = useAuth() in dashboard layout

