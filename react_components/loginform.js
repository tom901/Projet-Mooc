/**
 * [PageHomeConnected Page si connecté]
 * @param  {file} './connected.js' [fichier du composant]
 * @return {ReactClass}                  [Composant ReactJS]
 */
var PageHomeConnected = require('./connected.js');

module.exports = React.createClass({
    login : function (event) {
        event.stopPropagation();
        event.preventDefault()
        ReactDOM.render(<PageHomeConnected />, document.getElementById('body'));
        this.props.parent.setLogged();
    },
    render : function(){
        return (
            <div id="login-page">
                <section id="hero-area-login">
                    <div className="container animated  fadeInUp">
                        <form className="form-login" action="index.html">
                            <h2 className="form-login-heading">Se connecter</h2>
                            <div className="login-wrap">
                                <input type="text" className="form-control" placeholder="Adresse mail ou Identifiant" autofocus="" />
                                <br />
                                <input type="password" className="form-control" placeholder="Mot de passe" />
                                <label className="checkbox">
                                    <span className="pull-right">
                                        <a className="btn btn-theme btn-link" href="http://insta2.paracamplus.com//authenticate/sendlink" target="_blank"> Mot de passe oublier ?</a>
                                    </span>
                                </label>
                                <button className="btn btn-theme btn-block" onClick={this.login} type="submit"><i className="fa fa-lock"></i> CONNEXION </button>
                                <hr />
                                <div className="centered">
                                    <p>Ou connectez vous avec un compte Google</p>
                                    <span className="pull-right">
                                        <div className="btn-group">
                                            <a href="http://insta2.paracamplus.com//openid/" className="btn btn-danger" >
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                            <a className="btn btn-danger" href="http://insta2.paracamplus.com//openid/">Google +</a>
                                        </div>
                                    </span>
                                    <a className="btn btn-theme btn-link" href="./"> Retour </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
});
