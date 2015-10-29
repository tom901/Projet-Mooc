/**
 * [PageHomeConnected Page si connecté]
 * @param  {file} './connected.js' [fichier du composant]
 * @return {ReactClass}                  [Composant ReactJS]
 */
var PageHomeConnected = require('./connected.js');

/**
 * [require description]
 * @param  {[type]} './LocalStorageMixin' [description]
 * @return {ReactClass}                  [Composant ReactJS]
 */
var LocalStorageMixin = require('./LocalStorageMixin');

module.exports = React.createClass({
    mixins: [LocalStorageMixin],
    login : function (event) {
        var self = this;
        event.stopPropagation();
        event.preventDefault();

        $("#login-wrap").toggle();
        $(".sk-folding-cube").show();

        var password = $("#password").val();
        var email = $("#email").val();

        /**For Test Only**/
        // var email = "bilel.bekkouche@gmail.com";
        // var password = "bekkouche99";
        /**             **/
        if (this.state.passwordFullfiled
        && this.state.passwordFullfiled
        && password != ""
        && email != "") {
    		Authentification(email, password,  function(res,err) {
                if (err !== undefined) {
                    swal({
                        title: 'Attention',
                        text: 'Mauvais nom de connexion ou mauvais mot de passe! ',
                        type : 'error',
                        timer: 5000
                    });
                    $("#login-wrap").toggle();
                    $(".sk-folding-cube").hide();
                } else if (res !== undefined){
                    self.props.parent.setLogged();
                    if ($('#rememberMe')[0].checked ){
                        self.storeMyItem('focusState', { focused : "PageHomeConnected" });
                    }
                    ReactDOM.render(<PageHomeConnected userData={res} />, document.getElementById('body'));
                }
    		});
        } else {
            swal({
                title: 'Hum...',
                text: 'Vérifiez vos identifiants de connexion !',
                type : 'error',
                timer: 5000
            });
            $("#login-wrap").toggle();
            $(".sk-folding-cube").hide();
        }

    },
     getInitialState: function(){
        return {
            isCharged :  false,
            passwordFullfiled : true,
            emailFullfiled : true
        };
    },
    componentDidMount: function() {
        var self = this;
        var password, email;
        $(".sk-folding-cube").hide();
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
            $(balise).closest(classe1).removeClass('has-error has-feedback').removeClass('has-warning has-feedback').addClass('has-success has-feedback');
            $(balise2).closest(classe2).removeClass('glyphicon-remove form-control-feedback').removeClass('glyphicon-warning-sign form-control-feedback').addClass('glyphicon-ok form-control-feedback');
        }

    },
    render : function(){
        return (
            <div id="dynamicHero">
                <section id="hero-area-login">
                    <div className="container">
                        <form className="form-login animated  fadeInUp">
                            <h2 className="form-login-heading">Se connecter</h2>
                            <div className="login-wrap" id="login-wrap">
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
                                        <a className="btn btn-primary btn-link" href="http://insta2.paracamplus.com//authenticate/sendlink" target="_blank"> Mot de passe oublier ?</a>
                                    </span>
                                </label>
                                <div className="checkbox">
                                    <label className="checkbox-txt">
                                        <input type="checkbox" name="remember" id="rememberMe" value="true"/> Se souvenir de moi
                                    </label>
                                </div>
                                <div className="clearfix"></div>
                                <hr />
                                <button className="btn btn-primary btn-block" onClick={this.login} type="submit" id="connect-btn"><i className="fa fa-lock"></i> CONNEXION </button>
                                <hr />
                                <div className="centered">
                                    <p className="black-color"><small>Ou connectez vous avec un compte Google</small></p>
                                    <span className="pull-right">
                                        <div className="btn-group">
                                            <a href="http://insta2.paracamplus.com//openid/" className="btn btn-danger" >
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                            <a className="btn btn-danger" href="http://insta2.paracamplus.com//openid/">Google +</a>
                                        </div>
                                    </span>
                                    <a className="btn btn-primary btn-link" href="./"> Retour </a>
                                </div>
                            </div>
                            <div className="sk-folding-cube">
                                <div className="sk-cube1 sk-cube"></div>
                                <div className="sk-cube2 sk-cube"></div>
                                <div className="sk-cube4 sk-cube"></div>
                                <div className="sk-cube3 sk-cube"></div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
});
