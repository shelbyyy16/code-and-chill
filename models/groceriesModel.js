const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groceriesSchema = new Schema(
    {
        dairy: {type: String, required: true},
        produce: {type: String, required: true},
        snacks: { type: String, required: true},
        
    },
    {
        timestamps: true,
      }
);

module.exports = mongoose.model('Grocery', groceriesSchema)