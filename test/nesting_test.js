const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

// Describe our test
describe('Nesting records',function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done()
        })
    })

    //Create tests
    it('Creates an author with sub-documents', function(done){
        var amine = new Author({
            name:'Amine BENBAKHTA',
            age: 21,
            books:[{title:'Un an de bonheur', pages:514}]
        })

        amine.save().then(function(){
            Author.findOne({name:'Amine BENBAKHTA'}).then(function(result){
                assert(result.books.length === 1)
                done()
            })
        })
    })

    it('Adds a book to an author', function(done){
        var amine = new Author({
            name:'Amine BENBAKHTA',
            age: 21,
            books:[{title:'Un an de bonheur', pages:514}]
        })

        amine.save().then(function(){
            Author.findOne({name:'Amine BENBAKHTA'}).then(function(result){
                //add a book to the books array
                result.books.push({title: 'Name of the Wind', pages:500})
                result.save().then(function(){
                    Author.findOne({name:'Amine BENBAKHTA'}).then(function(result){
                        assert(result.books.length === 2)
                        done()
                    })
                })
            })
        })
    })

})