/**
 * [MenuRendererFactory : Factory test
 * @type {ReactClass}
 */

var LoginPage = require('./loginform.js');
module.exports = React.createClass({
    getInitialState: function(){
        return { islogged :  false, isInLoginForm : false};
    },
    loadLoginView : function(){
        var self = this;
        self.setState({islogged :  true, isInLoginForm : false},function(argument) {
            ReactDOM.render(<LoginPage parent={self} master={self.props.parent}/>, document.getElementById('body'));
        });
    },
    setLogged: function () {
        $( "#nav-controlled" ).show();
    },
    triggerClick: function(){
        var self = this;
        self.setState({islogged :  false, isInLoginForm : true},function() {
            self.loadLoginView();
        });
    },
    statics : {
        getCurrentState :function () {
            var self = this;
            return self;
        }
    },
    render : function(){
        var self = this;
        return (
            <div id="dynamicHero">
                <section id="hero-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="block animated fadeInUp">
                                    <section className="cd-intro">
                                        <h1 className="animated  fadeInUp animated cd-headline slide">
                                            <span>Bienvenue sur CodeGradX</span>
                                        </h1>
                                    </section>
                                    <h2 className="animated  fadeInUp animated" >
                                        <b>
                                        Le site des exercices à correction automatisée associé au cours
                                        Programmation réticulaire dispensé aux CFA INSTA en octobre 2015.<br />
                                        Ce site nécessite une authentification pour aller plus loin
                                        </b>
                                    </h2>
                                    <a className="btn-lines dark light animated  fadeInUp animated btn btn-default"
                                        onClick={self.triggerClick}>Connexion
                                    </a>
                                    <a className="btn-lines dark light animated  fadeInUp animated btn btn-primary"
                                        href="https://programmation-recursive-2.appspot.com/register" target="_blank">Inscription
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
