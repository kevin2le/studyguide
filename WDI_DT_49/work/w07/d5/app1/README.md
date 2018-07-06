## Running This Application Locally 

To run this application locally you must install all npm packages with this command: 

```bash
$ npm i 
```

Once that is done start up your `mongod` instance: 

```bash 
$ mongod
```

In a separate Terminal window please start the server: 

```bash 
$ npm start
```

Users must be added programmatically using Node. To add a user make sure you are in the root directory of your project and execute the following commands. 

```bash
$ node
```

Once inside the Node REPL execute the following commands: 

```js
> require('..config/database')
> const User = require('./models/user');
> const you = new User({name: "Steve", age: 45});
> you.save();
```
You now have a single user with the name of "Steve" and the age of 45 in your database.

