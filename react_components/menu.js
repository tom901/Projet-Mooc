module.exports  = React.createClass({
  render : function(){
    return(
         <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Cours</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exercices <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Consulter les exercices</a></li>
                    <li><a href="#">Consulter les corrections</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Historique</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profil <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Modifier mon profil</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Déconnexion</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
        )
    }
});