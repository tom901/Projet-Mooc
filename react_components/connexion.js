module.exports  = React.createClass({
componentDidMount: function() {
        $('#myModal').modal({
	        show: true
	    });
	    $("#cancelPopup").on("click",function(){
	    	$("#myModal").css('z-index', '0');
	    });
	     $("#validatePopup").on("click",function(){
	    	$("#myModal").css('z-index', '0');
	    });
    },
	render : function(){
	    return( 
	    	<div className="modal fade" id="myModal">
				<div className="modal-dialog">
				    <div className="modal-content">
				     	<div className="modal-header">
					        <h4 className="modal-title">Connexion</h4>
					    </div>
					    <div className="modal-body">
					        <form className="form-horizontal">
								<div className="form-group">
								    <label className="col-sm-3 control-label">Email</label>
								    <div className="col-sm-8">
								      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
								    </div>
								</div>
								<div className="form-group">
								    <label className="col-sm-3 control-label">Mode de passe</label>
								    <div className="col-sm-8">
								      <input type="password" className="form-control" id="inputPassword3" placeholder="Mot de passe" />
								</div>
								</div>
							</form>
					    </div>
					    <div className="modal-footer">
					        <button type="button" className="btn btn-default" data-dismiss="modal" id="cancelPopup">Annuler</button>
					        <button type="button" className="btn btn-primary" id="validatePopup">Connexion</button>
					    </div>
					</div>
				</div>
			</div>
	    )
	}
});
