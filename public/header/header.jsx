var React = require("react");

module.exports = React.createClass({
  render : function(){
    return(
        <div className="headerComponent">
            <div className="blog-masthead">
              <div className="container">
                <nav className="blog-nav">
                  <a className="blog-nav-item active" target="_blank" href="https://twitter.com/ThomAiso">PROJET MOOC</a>
                </nav>
              </div>
            </div>
            <div className="container">
                <div className="blog-header">
                    <h1 className="blog-title">Liste de tutoriels</h1>
                    <p className="lead blog-description">Tutoriels sur différents sujets concernant Salesforce, Javascript et les nouveaux utilitaires existants.</p>
                </div>
            </div>
        </div>  
        )
    }
});
