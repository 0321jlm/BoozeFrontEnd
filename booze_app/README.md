    # Project 3 - Favorite Breweries

Called "Favorite Breweries", is an application that tracks your favorite breweries. The app allows a user to search for local breweries, save them as a favorite and add ratings and comments

Functionality includes full CRUD with a show, create new favorites, update and delete.

### Developers

JoAnn Briggs
Fred Kaesmann
Jess Madeux

## URL to site

https://booz-app.surge.sh/

## Screen Shot

![](https://user-images.githubusercontent.com/35512164/69642881-7247bc80-1030-11ea-8560-c239c6ea2433.png)

## Features

```
1. Home page encourages users to search for a brewery
2. Create a favorite
3. Rate the brewery and provide comments
4. Delete those not liked

```

## Deployment

### Heroku

```
1. git add -A
2. git commit -m 'comments'
3. git push origin devBranch
4. git push heroku master
5. heroku restart

```

### Surge

```
1. Go into serge folder
2. npm run build
3. cd build
4. surge

```

## Key Technologies

```
- JavaScript
- HTML
- CSS
- Bootstrap
- Mongo
- Mongoose
- Node JS
- React
- Express


```

## import

```
Node

Axios
CORS
React
React-dom
React-Scripots
React Strap

Mongo

npm install mongoose
echo DBQuery.prototype.\_prettyShell = true >> ~/.mongorc.js

```

## Key Code Functions

```
* Reading reading third-part API (https://api.openbrewerydb.org/breweries?by_state=connecticut) to pull in breweries by state
* Storing rating, comments and object returned from API into Mongo DB
* CRUD funtionality

```

## Main problems

```
1. Difficulties in keeping the ports in sync, as Express defaults to 3000
2. Passing state up to the top .js file
3. Difficulties in styling React tags
4. git was tough keeping in sync
5. Changing the model after we seeded
6. Fred!
```

## Credits

```
- w3schools.com https://www.w3schools.com/
- stack overflow https://stackoverflow.com/
- Bootstrap https://getbootstrap.com/
- Mongo database https://www.mongodb.com/
```

## Authors and acknowledgment

The General Assembly instructors were key resouces in developing this site
