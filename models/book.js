const mongoose = require("mongoose");
const path = require('path')
const coverImageBasePath = 'uploads/bookCovers'


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    publishDate: {
        type: Date,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    coverImageName: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Author",
    },
});

//we will use 'this' and therefore we need to use 'function' instead of arrow function
bookSchema.virtual('coverImagePath').get(function(){
    if( this.coverImageName != null){
        return path.join('/', coverImageBasePath, this.coverImageName)
    }
})




// note that 'books' will be the name of the collection inside the database. and will follow the schema that i defined above
module.exports = mongoose.model("Book", bookSchema);
module.exports.coverImageBasePath = coverImageBasePath;