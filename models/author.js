const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// note that authors will be the name of the collection inside the database. and will follow the schema that i defined above  
module.exports = mongoose.model('Author', authorSchema)









