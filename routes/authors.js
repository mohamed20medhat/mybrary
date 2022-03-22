const express = require("express");
const router = express.Router();
const Author = require('../models/author.js')

// All authors route
router.get("/", async (req, res) => {
    // the reason it sends all the data if you didn't specify the search. is becuse the searchOptions object is initialzed to be empty. whay i'm doing in the search. is to take the value that the user will send with the search submit button. and adding it as a value for the name proberty in the search object. and passing it to mongodb. mongodb can accept a regexp type 
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }

    try {
        const authors = await Author.find(searchOptions)
        res.render("authors/index", { authors: authors, 
            searchOptions: req.query
        });
    } catch {
        res.redirect('/')
    }
});

// new author
// send the data that you will get from the new author to the front end ?
router.get("/new", (req, res) => {
    //* try removing the new author. and path the varyable empty. like a undefiend placeholder
    res.render("authors/new", {author : new Author()});
});

// create author route => sends the data to the serve || doesn't render anything
router.post("/", async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save();
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage:'Error Creating Author'
        })

    }

});

module.exports = router;
