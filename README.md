##The WindLog

An empty project implemented using a MEAN stack:

- nodeJs
- express
- mongodb
- mongoose
- angular
- angular-CLI

Other used:

- gulp
- gulp-jshint
- nodemon   
- passportjs
- underscore    
- vash       

___


**Database**: Mongo.

**Authorizing**: Passport with local authorization (Username/Password).

**View engine**: vash.

___

#Install process:

-1 Clone repository:

    git clone https://github.com/ugeHidalgo/myapp.git myapp 
    (This will clone the repository to a myapp folder)

-2 Install:

    - Install mongodb downloading from http://www.mongodb.org
        Set path for databases with mongod --dbpath path

    - Install dependecies needed:

        cd myapp
        npm install
        bower install

-3 Run:
    Launch mongoDB in a console:

        mongod
    
    Launch app with 

        - npm start 
        - gulp
        - gulp default
        - gulp develop

    Access site to http://localhost:3000


-4 Debug server side with node inspector:
    node --inspect --debug .
    Copiar url y pegar en un browser.

-5 Remote Data base can also be used hosted in mLab (Need to change local db config to remote. See dbConfig.js to change it)