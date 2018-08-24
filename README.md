# lets-j-j-j-jam
with Jessy, Mon, Art and Joe

## WE DID IT

Find our site on Heroku [here](http://fac-article-sharing.herokuapp.com/)

*HEADS UP!!!! WE HAVE NO ERROR HANDLING ON OUR LOG IN FORM SO IF YOU ENTER AN INCORRECT PASSWORD OR USERNAME YOU WILL CRASH THE HEROKU SERVER!!! YOU HAVE BEEN WARNED!!!

### How to install locally:

1) Clone the project and run `npm install`

2) Create a `config.env` file in the root of the directory

3) Set up a local database on your machine and add the `DB_URL` to the `config.env` file in the format:
```
DB_URL = postgres://username:password@localhost:5432/databaseName
```
4) Alter the database to make your user role the owner

5) Be sure to grant all permissions on the database/tables to the user role you are using

6) Run this code from the command line to build the database:
```
node db/db_build.js
```
7) Enter a secret in the config file in the following format:
```
SECRET = 'your-super-secret-secret'
```
8) To get things crack-a-lack-in run:
```
npm run dev
```
9) Profit ???

### Wireframe: 

![first wireframe](https://www.dropbox.com/s/y7ti3fgxdlyxoou/IMG_1514.JPG?raw=1)

![wireframe pic](https://github.com/fac-14/lets-j-j-j-jam/blob/master/IMG-2984.JPG?raw=true)


