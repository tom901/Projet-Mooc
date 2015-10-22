 var StartExercice = require('./commencerExercices.js');
 module.exports = React.createClass({
    
    loadStartExerciceView : function () {
        ReactDOM.render(<StartExercice />, document.getElementById('body'));
    },

    render : function(){ 
        var self = this;
        return (
            
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <h3>Liste des exercices</h3>

                    </div>
                </div>

                <div className="row text-center">

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img style={{width:'50px'}} src="./images/Logo-JS.png" alt="" />
                            <div className="caption">
                                <h3>Exercice 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a onClick={self.loadStartExerciceView} className="btn btn-primary">{"Commencer l'exercice"}</a> <a href="#" className="btn btn-default">Voir la correction</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img style={{width:'50px'}} src="./images/Logo-JS.png" alt="" />
                            <div className="caption">
                                <h3>Exercice 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a href="#" className="btn btn-primary">{"Commencer l'exercice"}</a> <a href="#" className="btn btn-default">Voir la correction</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img style={{width:'50px'}} src="./images/Logo-JS.png" alt="" />
                            <div className="caption">
                                <h3>Exercice 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a href="#" className="btn btn-primary">{"Commencer l'exercice"}</a> <a href="#" className="btn btn-default">Voir la correction</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img style={{width:'50px'}} src="./images/Logo-JS.png" alt="" />
                            <div className="caption">
                                <h3>Exercice 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p>
                                    <a href="#" className="btn btn-primary">{"Commencer l'exercice"}</a> <a href="#" className="btn btn-default">Voir la correction</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr />

            </div>

        )
    }
});