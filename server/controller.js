const madlib = require('./madlib.json');

module.exports = {

    randomizer: function(req, res){
        
        var randomNumber = Math.floor(Math.random()*madlib.name.length)
        var randomNumber2 = Math.floor(Math.random()*madlib.type.length)
        var randomNumber3 = Math.floor(Math.random()*madlib.durability.length)
        var randomNumber4 = Math.floor(Math.random()*madlib.container.length)
        
        var randomString1 = madlib.name[randomNumber];
          if (randomString1[randomString1 -1] === 's'){
          randomString1 = randomString1 + "'"
      }
          else randomString1 = randomString1 + "'s"
        
        var randomString2 = madlib.type[randomNumber2];
        var randomString3 = madlib.durability[randomNumber3];
        var randomString4 = madlib.container[randomNumber4];
        res.status(200).send(  randomString1 + ' ' +randomString3 + ' ' +randomString2+' found '+ randomString4+ '.')

      }
}