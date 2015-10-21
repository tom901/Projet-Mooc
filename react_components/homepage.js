var HeroArea = require('./heropage.js');
module.exports = React.createClass({
    render : function(){
        return (
            <HeroArea parent={this} />
        )
    }
});
