/**
 * [PageHomeConnected Page si connecté]
 * @param  {file} './connected.js' [fichier du composant]
 * @return {ReactClass}                  [Composant ReactJS]
 */
var PageHomeConnected = require('./connected.js');

module.exports = React.createClass({
    login : function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.parent.setLogged();
        var password = $("#password").val();
        var email = $("#email").val();
        console.log(this.state);
        if (this.state.passwordFullfiled
        && this.state.passwordFullfiled
        && password != ""
        && email != "") {
    		Authentification(email, password,  function(res,err) {
                console.log(res);
                console.log(err);
                alert('lol');
                ReactDOM.render(<PageHomeConnected />, document.getElementById('body'));
    		});
        } else {
            swal({
                title: 'Hum...',
                text: 'Vérifiez vos identifiants de connexion !',
                type : 'error',
                timer: 2000
            });
        }

    },
     getInitialState: function(){
        return {
            isCharged :  false,
            passwordFullfiled : false,
            emailFullfiled : false
        };
    },

    componentDidMount: function() {
        var self = this;

        var password, email;
        $("#password").each(function(){
            $(this).on("change", function(){
                password = traitementVariable($(this).val(), "password", "^[a-zA-Z 0-9@_-]{4,}$");
            });
        });
        $("#email").each(function(){
            $(this).on("change", function(){
                email = traitementVariable($(this).val(), "email", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
            });
        });

        function traitementVariable(variable, champs, regex){
          //var regex = /^[a-zA-Z ]+$/;
            if(variable == ""){
                error("le "+champs, "#"+champs, "#"+champs+"Valid" ,".form-group", ".glyphicon");
            }
            else{
              var pattern = new RegExp(regex);
              if(!pattern.test(variable)){
                    warning("format du "+champs, "#"+champs, "#"+champs+"Valid" ,".form-group", ".glyphicon");
                }
                else{
                    success(""+champs, "#"+champs, "#"+champs+"Valid", ".form-group", ".glyphicon");
                    switch (champs) {
                        case "email":
                            self.setState({emailFullfiled : true});
                            break;
                        case "password":
                            self.setState({passwordFullfiled : true});
                            break;
                        default:

                    }
                    return variable;
                }
            }


        }


         //fonction générique d'avertissement tiré de boostrap
        function warning(name, balise, balise2, classe1, classe2){
            $("#errorForm").html("<em>Attention le "+name+" n'est pas valide!</em>");
            $(balise).closest(classe1).removeClass('has-error has-feedback').addClass('has-warning has-feedback');
            $(balise2).closest(classe2).removeClass('glyphicon-remove form-control-feedback').addClass('glyphicon-warning-sign form-control-feedback');
        }

        //fonction générique d'erreur tiré de boostrap
        function error(name, balise, balise2, classe1, classe2){
            $("#errorForm").html("<em>Veuillez remplir "+name+" !</em>");
            $(balise).closest(classe1).addClass('has-error has-feedback');
            $(balise2).closest(classe2).removeClass('glyphicon-warning-sign form-control-feedback').addClass('glyphicon-remove form-control-feedback');
        }

        //fonction générique de succès tiré de boostrap
        function success(name, balise, balise2, classe1,classe2){
            // $("#errorForm").html("<em>"+name+" envoy&eacute; avec succ&egrave;s ! </em>");
            $(balise).closest(classe1).removeClass('has-error has-feedback').removeClass('has-warning has-feedback').addClass('has-success has-feedback');
            $(balise2).closest(classe2).removeClass('glyphicon-remove form-control-feedback').removeClass('glyphicon-warning-sign form-control-feedback').addClass('glyphicon-ok form-control-feedback');
        }

    },
    render : function(){
        return (
            <div id="login-page">
                <section id="hero-area-login">
                    <div className="container animated  fadeInUp">
                        <form className="form-login" action="index.html">
                            <h2 className="form-login-heading">Se connecter</h2>
                            <div className="login-wrap">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Adresse mail ou Identifiant" id="email" autofocus="" />
                                    <span id="emailValid" className="glyphicon pull-right"></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Mot de passe" id="password" />
                                    <span id="passwordValid" className="glyphicon pull-right"></span>
                                </div>
                                <label className="checkbox">
                                    <span className="pull-right">
                                        <a className="btn btn-theme btn-link" href="http://insta2.paracamplus.com//authenticate/sendlink" target="_blank"> Mot de passe oublier ?</a>
                                    </span>
                                </label>
                                <button className="btn btn-theme btn-block" onClick={this.login} type="submit" id="connect-btn"><i className="fa fa-lock"></i> CONNEXION </button>
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
