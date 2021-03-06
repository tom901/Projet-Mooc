module.exports  = React.createClass({
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
	            password = traitementVariable($(this).val(), "password", "^[a-zA-Z 0-9@_-]+$");
	        });
	    });

	    $("#passwordConfirm").each(function(){
	        $(this).on("change", function(){
	            if($(this).val() != $("#password").val()){
                    error("la Confirmation du mot de passe", "#passwordConfirm", "#passwordConfirmValid" ,".form-group", ".glyphicon");
                }
                else{
                    passwordConfirm = traitementVariable($(this).val(), "passwordConfirm", "^[a-zA-Z 0-9@_-]+$");
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
            // var passwordModif = traitementVariable($("#password").val(), "password", "^[a-zA-Z 0-9@_-]+$");

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
		            if(champs == "email" || champs == "password" || champs == "passwordConfirm"){
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
	    return( 
	    	<div className="container">
	    		<h1>Inscription</h1>
	    		<hr/>
					<form className="form-horizontal" method="POST" encType="multipart/form-data">
						<div className="col-md-3">
		    				<div className="text-center">
		    					<img src='//placehold.it/100' className="avatar img-circle" alt="avatar" />
		    					<h6>Upload a photo</h6>
		    				</div>
		    				<input type="hidden" name="MAX_FILE_SIZE" id='maxsize' value="1048576" />
		    				<input type="file" id="photo" className="form-control" />
		    				<span id="fileValid" className="pull-right"></span>
		    				<div id="message"></div>
				    	</div>
				    	<div className="col-md-9">
				    		<h3>Veuillez remplir le formulaire ci-dessous : </h3>
				    		<br/>
					    	<div className="form-group">
								<label className="col-sm-3 control-label">Pseudo:</label>
								<div className="col-sm-8">
									<input type="text" className="form-control" id="pseudo" />
									<span id="pseudoValid" className="glyphicon pull-right"></span>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Nom:</label>
								<div className="col-sm-8">
									<input type="text" className="form-control" id="nom" />
									<span id="nomValid" className="glyphicon pull-right"></span>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Prénom:</label>
								<div className="col-sm-8">
									<input type="text" className="form-control" id="prenom" />
									<span id="prenomValid" className="glyphicon pull-right"></span>
								</div>
							</div>
							<div className="form-group">
							    <label className="col-sm-3 control-label">Email:</label>
							    <div className="col-sm-8">
							      <input type="email" className="form-control" id="email" required="required"/>
							      <span id="emailValid" className="glyphicon pull-right"></span>
							    </div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Mot de passe:</label>
								<div className="col-sm-8">
									<input type="password" className="form-control" id="password" required="required"/>
									<span id="passwordValid" className="glyphicon pull-right"></span>
								</div>
							</div>
							<div className="form-group">
		                        <label className="col-md-3 control-label">Confirmation du mot de passe:</label>
		                        <div className="col-md-8">
		                          	<input className="form-control" type="password" id="passwordConfirm" required="required" />
		                          	<span id="passwordConfirmValid" className="glyphicon pull-right"></span>
		                        </div>
		                    </div>
							<div className="form-group">
							    <div className="col-sm-12 text-center">
							      <button className="btn btn-primary btn-lg" id="valider">Valider</button> &nbsp;
							      <button className="btn btn-primary btn-lg" id="annuler">Annuler</button>
							    </div>
							</div>
						</div>
					</form>
				<div id="info"></div>
			</div>
	    	)
    }
});