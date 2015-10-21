module.exports = React.createClass({
    triggerClick : function(name){
      this.props.parent.handleClicked();
    },
    render : function(){
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
                                    <a className="btn-lines dark light animated  fadeInUp animated btn btn-default"
                                        onClick={this.triggerClick}>Connexion
                                    </a>
                                    <a className="btn-lines dark light animated  fadeInUp animated btn btn-primary"
                                        href="https://programmation-recursive-2.appspot.com/register" target="_blank">Inscription
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});
