module.exports  = React.createClass({
  render : function(){
    return(
              <div className="container">
                <h1>Mon Profil</h1>
                <div className="row">

                  <div className="col-md-3">
                    <div className="text-center">
                      <img src="//placehold.it/100" className="avatar img-circle" alt="avatar"/>
                      <h6>Upload a different photo...</h6>
                      <input type="file" className="form-control"/>
                    </div>
                  </div>

                  <div className="col-md-9 personal-info">
                    <div className="alert alert-info alert-dismissable">
                      <a className="panel-close close" data-dismiss="alert">×</a> 
                      <i className="fa fa-coffee"></i>
                      This is an <strong>.alert</strong>
                      Use this to show important messages to the user.
                    </div>
                    <h3>Mes informations personnelles</h3>
                    <br/>
                    <form className="form-horizontal tutorialForm" role="form" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Pseudo:</label>
                        <div className="col-md-8">
                          <input className="form-control" type="text" value="janeuser"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-3 control-label">Nom:</label>
                        <div className="col-lg-8">
                          <input className="form-control" type="text" value="Jane"/>
                          </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-3 control-label">Prénom:</label>
                        <div className="col-lg-8">
                          <input className="form-control" type="text" value="Bishop"/>
                          </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-3 control-label">Email:</label>
                        <div className="col-lg-8">
                          <input className="form-control" type="text" />
                          </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Mot de passe:</label>
                        <div className="col-md-8">
                          <input className="form-control" type="password" />
                          </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">Confirmation du mot de passe:</label>
                        <div className="col-md-8">
                          <input className="form-control" type="password" />
                          </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-3 control-label">
                        </label>
                        <div className="col-md-8">
                          <input type="button" className="btn btn-primary" value="Sauvegarder"/> &nbsp;
                          <span>
                          </span>
                          <input type="reset" className="btn btn-default" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
        )
    }
});