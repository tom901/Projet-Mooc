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
    loadCourseView : function(){
        var self = this;
        self.setState({islogged :  false, isInLoginForm : false},function(argument) {
            ReactDOM.render(
                <div className="container with-padding-top">
                    <h1 className="with-padding-top">Cours INSTA programmation réticulaire</h1>
                    <a className="btn btn-primary btn-default pull-right" href="./"> Retour </a>
                    <hr />
                    <p>
                        Cours donné en octobre 2015 à l'<a href="http://insta.fr/">INSTA</a>
                        par Christian Queinnec. Les transparents sont en perpétuelle évolution.
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/intro.pdf">Introduction au cours</a></li>
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/js.pdf">Transparents du cours sur Javascript</a></li>
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/spec/tests-spec.js">Code pour Jasmine</a></li>
                        <li className="list-group-item"> <a href="./">Exercices Javascript</a></li>
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/sql.pdf">Transparents du cours sur Sql</a></li>
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/http.pdf">Transparents du cours sur HTTP</a></li>
                        <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/dom.pdf">Transparents du cours sur le côté client</a></li>
                    </ul>
                    <h2 className="with-padding-top"> Autres ressources </h2>
                    <hr />
                    <ul>
                        <li><a href="https://paracamplus.com/Courses/INSTA.js/DB/uvev-schema.sql">Schéma d'UVEV</a></li>
                        <li><a href="https://paracamplus.com/Courses/INSTA.js/DB/uvev-content.sql.gz">la base UVEV (pour Postgresql)</a></li>
                    </ul>
                    <h2 className="with-padding-top"> Interrogations écrites </h2>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="https://docs.google.com/forms/d/1pUanwSbXSYSzmnb04KjakD5HVxGCZ1b1ow9UMVNFZ10/viewform">interrogation 1</a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://docs.google.com/forms/d/105gfSO088peYt2mrxqkzV1ZG6MeVlJUUvgYDoHzyExw/viewform">interrogation 2</a>
                        </li>
                        <li className="list-group-item">
                            <a href="https://docs.google.com/forms/d/1fSIUJVTcRXvM1rAeA42gXOEzVqQvgBRpaLR86G0nmMk/viewform">interrogation 3</a>
                        </li>
                    </ul>
                </div>, document.getElementById('body'));
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
                                    <a className="animated fadeInUp animated btn btn-primary btn-lines btn-dark"
                                        onClick={self.triggerClick}>Connexion
                                    </a>
                                    <a className="animated fadeInUp btn btn-primary btn-lines btn-dark"
                                        href="https://programmation-recursive-2.appspot.com/register" target="_blank">Inscription
                                    </a>
                                    <p>
                                        <a className="btn-lines animated fadeInUp animated btn btn-success" onClick={self.loadCourseView}> Acceder aux Cours </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
