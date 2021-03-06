/**
 * [LocalStorageMixin description]
 * @param  {LocalStorageMixin} './LocalStorageMixin' [description]
 * @return {ReactMixin} Mixine u extension de methodes
 */
var LocalStorageMixin = require('./LocalStorageMixin');
module.exports  = React.createClass({
    mixins: [LocalStorageMixin],
    // getInitialState: function(){
    //   return {
    //     mail: "pianiste.evo@gmail.com",
    //     nom: "Jane",
    //     prenom: "Bishop",
    //     pseudo: "janeuser"
    //   };
    // },
    getInitialState: function(){
        var self = this;

        var UserProfile = self.getMyItem('UserProfile');

        return UserProfile;
    },
    componentDidMount: function() {

        var nom, prenom, pseudo, password, passwordConfirm, email;

        $("#nom").each(function(){
            $(this).on("change", function(){
                  nom = traitementVariable($(this).val(), "nom", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]+$");
              });
          });

        $("#prenom").each(function(){
              $(this).on("change", function(){
                  prenom = traitementVariable($(this).val(), "prenom", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]+$");
              });
          });

        $("#pseudo").each(function(){
              $(this).on("change", function(){
                  pseudo = traitementVariable($(this).val(), "pseudo", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ0-9]+$");
              });
          });

        $("#password").each(function(){
            $(this).on("change", function(){
                password = traitementVariable($(this).val(), "password", "^[a-zA-Z 0-9@_-]{4,}$");
            });
        });

        $("#passwordConfirm").each(function(){
            $(this).on("change", function(){
                if($(this).val() != $("#password").val()){
                    error("la Confirmation du mot de passe", "#passwordConfirm", "#passwordConfirmValid" ,".form-group", ".glyphicon");
                }
                else{
                    passwordConfirm = traitementVariable($(this).val(), "passwordConfirm", "^[a-zA-Z 0-9@_-]{4,}$");
                }

            });
        });

        $("#email").each(function(){
            $(this).on("change", function(){
                email = traitementVariable($(this).val(), "email", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
            });
        });



        $("#valider").on("click",function(e){ //action de la validation du formulaire
            e.preventDefault();
            //ce traitement sera pour la modification du profil
            // var nomModif = traitementVariable($("#nom").val(), "nom", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]+$");
            // var prenomModif = traitementVariable($("#prenom").val(), "prenom", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]+$");
            // var emailModif = traitementVariable($("#email").val(), "email", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");
            // var pseudoModif = traitementVariable($("#pseudo").val(), "pseudo", "^[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ0-9]+$");
            // var passwordModif = traitementVariable($("#password").val(), "password", "^[a-zA-Z 0-9@_-]{4,}$");

            // $.ajax({ // on fait la requete ajax
            //     url: "info.php", //voir l'url pour l'envoie des données avec react
            //     type: "POST",
            //     data: {"nom": nom, "prenom": prenom, "email" : email, "action" : "inscription"},
            //     success: function(content) {
            //         if(content == "success"){
            //             $("#valider").attr('disabled', 'disabled');
            //             $("#info").html("<b>L'ajout a bien été effectué ! </b>");
            //             setTimeout(function() {
            //                window.location.href = "#";
            //             }, 2000);
            //         }
            //     }
            // });

        });

        //prévoir les fonctions de traitement à part;
        function traitementVariable(variable, champs, regex){
          //var regex = /^[a-zA-Z ]+$/;
            if(champs == "email" || champs == "password" || champs == "passwordConfirm"){
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
                        return variable;
                    }
                }
            }
            else{
                if(champs != "email" || champs != "password" || champs != "passwordConfirm"  ){
                    var pattern = new RegExp(regex);

                    if(!pattern.test(variable)){
                        warning("format du "+champs, "#"+champs, "#"+champs+"Valid" ,".form-group", ".glyphicon");
                    }
                    else{
                        success(""+champs, "#"+champs, "#"+champs+"Valid", ".form-group", ".glyphicon");
                        return variable;
                    }
                }
                else{
                    if(variable != ""){
                        if(!pattern.test(variable)){
                            warning("format du "+champs, "#"+champs, "#"+champs+"Valid" ,".form-group", ".glyphicon");
                        }
                        else{
                            success(""+champs, "#"+champs, "#"+champs+"Valid", ".form-group", ".glyphicon");
                              return variable;
                        }
                    }
                    else{
                        resetClass(""+champs, "#"+champs, "#"+champs+"Valid", ".form-group", ".glyphicon");
                    }
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
        //fonction générique de succès tiré de boostrap
        function resetClass(name, balise, balise2, classe1,classe2){
            // $("#errorForm").html("<em>"+name+" envoy&eacute; avec succ&egrave;s ! </em>");
            $(balise).closest(classe1).removeClass('has-error has-feedback').removeClass('has-warning has-feedback').removeClass('has-success has-feedback');
            $(balise2).closest(classe2).removeClass('glyphicon-remove form-control-feedback').removeClass('glyphicon-warning-sign form-control-feedback').removeClass('glyphicon-ok form-control-feedback');
        }

    },
    render : function(){

      var sidebarStyle = {
        overflow: 'hidden',
        outline: 'none',
        marginLeft: '0px'
      };
      var displayBlockStyle = {
        display: 'block',
        overflow: 'hidden',
        marginTop: '-5px!important'
      };

      var displayNoneStyle = {
        display: 'none'
      };

      var dcjqParentCustom = {
        color: '#2e4453'
      };

      return(

            <div className="container">
              <div className="row">
                <br/>
                <div className="col-md-3 profile">
                    <div className="text-center">
                      <img src={"https://s.gravatar.com/avatar/" + md5(this.state.Email) + "?s=100&d=mm" } className="avatar img-circle" alt="avatar"/>
                      <h2 className="user-name">{this.state.Lastname +" "+ this.state.Firstname}</h2>
                      <a href="http://fr.gravatar.com/" className="form-control btn" id="btnModify" target="_blank">Modifier</a>
                    </div>
                      <h2 className="sidebar-heading">Profile</h2>
                        <ul className="sidebar-menu" id="nav-accordion" style={displayBlockStyle}>
                          <li className="mt">
                              <a className="active" href="javascript:;">
                                  <i className="fa fa-dashboard"></i>
                                  <span>Mon profil</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent dcjq-custom" style={dcjqParentCustom}>
                                  <i className="fa fa-tasks"></i>
                                  <span>Exercices</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent dcjq-custom" style={dcjqParentCustom}>
                                  <i className=" fa fa-bar-chart-o"></i>
                                  <span>Performances</span>
                              </a>
                          </li>
                        </ul>

                </div>



                <div className="col-md-9 personal-info">
                  <div className="blanc">
                    <h4>Mes informations personnelles</h4>
                    <br/>
                    <form className="form-horizontal" role="form" onSubmit={this.handleSubmit} autoComplete="off">
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Pseudo</label>
                          <input className="form-control input-lg" type="text" defaultValue={this.state.Pseudo} id="pseudo" />
                          <span id="pseudoValid" className="glyphicon pull-right">
                            <i className="fa fa-user fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Nom</label>
                          <input className="form-control input-lg" type="text" defaultValue={this.state.Lastname} id="nom" />
                          <span id="nomValid" className="glyphicon pull-right">
                            <i className="fa fa-user fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Prénom</label>
                          <input className="form-control input-lg" type="text" defaultValue={this.state.Firstname} id="prenom"/>
                          <span id="prenomValid" className="glyphicon pull-right">
                            <i className="fa fa-user fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Email</label>
                          <input className="form-control input-lg" type="text" defaultValue={this.state.Email} id="email"/>
                          <span id="emailValid" className="glyphicon pull-right">
                            <i className="fa fa-envelope fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Mot de passe</label>
                          <input className="form-control input-lg" type="password" id="password" required="required" autoComplete="off"/>
                          <span id="passwordValid" className="glyphicon pull-right">
                            <i className="fa fa-key fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <label className="control-label">Confirmation du mot de passe</label>
                          <input className="form-control input-lg" type="password" id="passwordConfirm" required="required" />
                          <span id="passwordConfirmValid" className="glyphicon pull-right">
                            <i className="fa fa-key fa-lg text-white fa-custom"></i>
                          </span>
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <div className="col-md-12">
                          <label className="control-label"></label>
                          <button type="button" className="btn btn-default" id="valider" >Sauvegarder</button> &nbsp;
                          <span>
                          </span>
                          <input type="reset" className="btn btn-default" id="annuler" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        )
    }
});
