const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe tests
describe('Deleting records', function(){

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
    it('Deletes one record from the database', function(done){
        MarioChar.findOneAndRemove({name:'Mario'}, {useFindAndModify: false}).then(function(){
            MarioChar.findOne({name:'Mario'}).then(function(result){
                assert(result === null)
                done()
            })
        })
    })

})