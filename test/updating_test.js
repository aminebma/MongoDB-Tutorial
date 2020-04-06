const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe tests
describe('Updating records', function(){

    var char;

    beforeEach(function(done){
        char = MarioChar({
            name: 'Mario',
            weight: 50
        })
    
        char.save().then(function(){
            done()
        })
    })

    //Create tests
    it('Updates one record from the database', function(done){
        MarioChar.findOneAndUpdate({name:'Mario'}, {name:'Luigi'}, {useFindAndModify: false}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luigi')
                done()
            })
        })
    })

    it('Increments the weight by 1', function(done){
        MarioChar.updateMany({},{ $inc: { weight:1 }}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result.weight === 51)
                done()
            })
        })
    })

})