const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe tests
describe('Updating records', function(){

    var char;

    beforeEach(function(done){
        char = MarioChar({
            name: 'Mario',
            weight: 60
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

})