<h1 align="center">
    <b>Wine App for everybody<br> did with Node.js using MongoDB </b> 
<br>
</h1>


## What is this for?
This is a wine app done with Node.js Framework using MongoDB(Atlas) as the data store. In this app you can comment and look for new wines. Also we recommend you good wines quality & price relations.


### Deployment
This Project is **[Live](https://reg-login-using-nodejs-mongodb.herokuapp.com/)** on: 🌍 **https://reg-login-using-nodejs-mongodb.herokuapp.com/**

## Running the tests

### •Registration Form:
Allows the user to register their account by filling their Email, Username, Password and Nickname.


### •Login Form:
If the user has been registered on the app, can login by passing the credentials.

### •User's Profile:
After the user logged in, a simple profile with the user's username, nickname, password and country<br>displayed with a user delete button and image profile

### •Wines:
On the main page we have two different views, one for the user and one for the administrator. From this page we can access the wine list, see the recommendations, access our profile as well as edit and update the database of our wine catalog in administration profile. Also wue can view wine details from wine details view just clicking on the wine.

### •Comments:
On tha view wine details we can comment all of our wines. Also we we can delete our comments and create new ones.

### DataBase:
Here we use **[MongoDB Atlas(Cloud)](https://www.mongodb.com/cloud/atlas)** as the database. Here we have two collection created, named as:
- users.
- sessions.
- wines.
- Comments

A Collection(**Comments**) is populated with the user's credentials and wine profile.

A Collection(**session**) is created which stores the users Logged session.

<br>
<br>
<br>

## Prerequisites
Tools that we need to run this app:

- ***[Node.js]***
- ***[bcrypt]***
- ***[connect-mongo]***
- ***[cookie-parser]***
- ***[dotenv]***
- ***[express]***
- ***[express-session]***
- ***[hbs]***
- ***[mongoose]***
- ***[morgan]***
- ***[serve-favicon]***
- ***[nodemon]***
- ***[MongoDB (Atlas)]***

## Installing
```
npm install
```

## To Run the App
```
npm run dev
```

The server will start Running on
+ http://localhost:3000/


## Authors

Carlos Martínez
Eduard Cabrero

