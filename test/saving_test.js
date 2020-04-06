const assert = require('assert')
const MarioChar = require('../models/mariochar')

//To make tests, we should add "mocha" as a test script in the package.json file
//Then to execute the tests, use the npm run test command

//Describe tests
describe('Saving records', function(){

    //Create tests
    it('Saves a record to the database', function(done){
        var char = new MarioChar({
            name: 'Mario',
            weight: 60
        })

        char.save().then(function(){
            //When isNew is true, it means the object is new
            //to the database and isn't recorded yet
            assert(char.isNew === false)

            //Since save() is an asynchronous function, we need
            //the done callback function to specify when the
            //test is done, to be sure that mocha won't pass
            //to the next test until it finishes this one
            done()
        })

    })

})