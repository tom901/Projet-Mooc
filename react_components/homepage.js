var LoginPage = require('./loginform.js');
var RenderComponent = require('./renderComponent.js');
var HeroArea = require('./heropage.js');
module.exports = React.createClass({
    loadLoginView : function(){
        return ReactDOM.render(<LoginPage parent={this} />, document.getElementById('body'));
    },
    loadFakeView : function(){
        return ReactDOM.render(<div>Vous êtes connecté</div>, document.getElementById('body'));
    },
    getInitialState: function(){
        return { islogged :  false, isInLoginForm : false};
    },
    handleClicked: function(){
        this.setState({islogged :  false, isInLoginForm : true},function(argument) {
            this.loadLoginView();
        });
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true;
    },
    changeState : function (state) {
        this.setState(state);
    },
    render : function(){
        return (
            <HeroArea parent={this} />
        )
    }
});
