# Resources
- [mybrary app](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM) 6=> 00:00
- [Heroku application](https://dashboard.heroku.com/apps/dev-mybrary)
- [mongo atlas](https://cloud.mongodb.com/v2/62384cf663c6f94b70dde4bb#clusters)
- you can watch the vedio on the normal speed while writing along so you don't miss a thing specially if it was the first time i do this type of projects 
- [filepond](https://pqina.nl/filepond/) => to upload photos to mongodb


# dependencies
- `npm i express ejs express-ejs-layouts body-parser method-override` => runtime
- `npm i nodemon dotenv -D` => dev
- we will handel converting images into strings using `filepond` in the #4 vedio
- 
- people refere to controllers as routes. so routes can be designed to contain the controller logic instead of calling it from another controller files 

# considering the project
- the admin dashboard could be done using the concept of layout and headers. and *add a side bar* after the headers. and make this side bar link to the singuler pages of the routes. and each time a request is sent to those pages. it combins the smaller components with the layout to create the page
- 

# deployment
- go to the deployment section in heruko and you will find the heroku repository online. if you did something related to git before. and heroku asks you to do it again. then it's not needed
- `git push heroku` to push to the remote repo
- don't forget to add the config var. for the environment varyables in heruku cause we add it to the gitignore file 
- don't forget to white list all the ip address from acceccing the database through adding to the connection ip address `0.0.0.0/0`
- 

# thoughts 
- the route is 'authors' and the model is 'author'.. and this route sends files from a folder called authors inside the views and the route that it is '/author' when requiring it in the server.js... and there for inside the authors route. i write them like '/' with no need to write '/authors'
- be extra careful of the routes you are going to use. cause a typo may hurt. notice the names and thier meaning
- the things that are used for submiting a form is a button. while anything that may lead to redirect to another place maybe better to use an 'a' tag
- i learnet how to take files from the user in the books route. it's in the #3 vid
- 

# time line 
- ##1 => installed pakages || file structure
- ##2 => author route || *view authors* || *search implementation* || intro to form and submit to db
- ##3 => books route || *view books* || deeper form data || taking file || *dynamic select box* || handling routes to send bigger data to db || more complex search 

## 4 
- *uploading pics to mongodb* 
- using file pond for user to control and preview images and to also resize it for us before adding it to the database 
- modifing the schema to take buffer to store the images=> even if a database is already created. if i modified the schema the original documents with the previous schema won't be destroyed
- 

## 5
- never use a get route for deleting. cause the search engine when it tries to index the pages. it goes to all the get routes in it. so it ends up deleting all the data. 
- something lika a dashboard. with *edit* and *delete* and *view* a certain author 
- using *schema constraints* to prevent deleting users who have books
- the get auther/id must be after get author/new. down in the page. or it will think new == id
- using `catch(err){console.log(err)}` to debug the code


## 6
- using `Book.findById({author: req.params.id}).populate().exec()` to get the date coresponding to another document from another schema
- *edit*, *delete* and *view* for the author page
- 