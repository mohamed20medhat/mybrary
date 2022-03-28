const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

authorSchema.pre('remove', function(next){
    Book.find({ author: this.id}, (err, books) => {
        if(err){
            next(err)
        } else if (books.length > 0){
            next(new Error('This author has books still'))
        }else {
            next()
        }
    })

})

// note that authors will be the name of the collection inside the database. and will follow the schema that i defined above  
module.exports = mongoose.model('Author', authorSchema)









