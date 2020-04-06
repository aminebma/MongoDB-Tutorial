const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema and Model

const MarioCharSchema = new Schema({
    name: {type:String, required: true},
    weight: Number
})

const MarioChar = mongoose.model('mariochar', MarioCharSchema)

module.exports = MarioChar