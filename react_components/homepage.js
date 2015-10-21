/**
 * [HeroArea Vu de la page de connexion]
 * @param  {file} './heropage.js' [Javascript file]
 * @return {React}                 [description]
 */
var HeroArea = require('./heropage.js');

module.exports = React.createClass({
    render : function(){
        var self = this;
        return (
            <HeroArea parent={self} />
        )
    }
});
