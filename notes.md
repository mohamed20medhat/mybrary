# Resources
- [mybrary app](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM) 2=> 31:51
- [Heroku application](https://dashboard.heroku.com/apps/dev-mybrary)
- [mongo atlas]()
- you can watch the vedio on the normal speed while writing along so you don't miss a thing specially if it was the first time i do this type of projects 
- 

# dependencies
- `npm i express ejs express-ejs-layouts body-parser` => runtime
- `npm i nodemon dotenv -D` => dev
- people refere to controllers as routes. so routes can be designed to contain the controller logic instead of calling it from another controller files 

# considering the project
- the admin dashboard could be done using the concept of layout and headers. and *add a side bar* after the headers. and make this side bar link to the singuler pages of the routes. and each time a request is sent to those pages. it combins the smaller components with the layout to create the page
- 

# deployment
- go to the deployment section in heruko and you will find the heroku repository online. if you did something related to git before. and heroku asks you to do it again. then it's not needed
- `git push heroku` to push to the remote repo
- don't forget to add the config var. for the environment varyables in heruku cause we add it to the gitignore file 

# thoughts 
- the route is 'authors' and the model is 'author'.. and this route sends files from a folder called authors inside the views and the route that it is '/author' when requiring it in the server.js... and there for inside the authors route. i write them like '/' with no need to write '/authors'
- be extra careful of the routes you are going to use. cause a typo may hurt. notice the names and thier meaning
- the things that are used for submiting a form is a button. while anything that may lead to redirect to another place maybe better to use an 'a' tag
- 

