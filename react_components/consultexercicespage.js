var StartExercice = require('./commencerExercices.js');

/** Composant Exercice
Fonction : permet d'afficher la mise en page d'un exercice
*/

var Exercice = React.createClass({
    loadStartExerciceView : function () {
        ReactDOM.render(<StartExercice />, document.getElementById('body'));
    },
    render: function() {
        var self = this;
        return (
            <div className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img className="logoExercices" src="./images/Logo-Paracamplus_noir.png" alt="" />
                    <div className="caption">
                        <h3 className="titleExercices">{this.props.title}</h3>
                        <hr />
                        <p>
                            <a onClick={self.loadStartExerciceView} className="btn btn-primary">{"Voir les exercices"}</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

/** Composant ListExercices
Fonction :
- parcourir la liste des données contenus dans l'objet 'data'
- on ajouter ces données dans les propriétés du composant 'Exercice'
*/
var ListExercices = React.createClass({
    render: function() {
        var self = this;
        return (
            <div className="">
                {
                    this.props.value.map(function (comment, index) {
                        return <Exercice title={comment.title} key={index}/>;
                    })
                }
            </div>
        );
    }
});


/** Composant Consultexercicespage
Fonction :
- affiche le contenu de la page
- on ajoute le composant ListExercices
*/
module.exports = React.createClass({
    getInitialState:function (){
        return{exolist :  []}
    },
    componentDidMount: function() {
        var self = this;
        ExercicesList(function(res,err){
            if(self.isMounted()){
                self.setState({exolist : res.content });
            }
        });
    },
    render : function(){
        var self = this;
        var exercicesArray = [];
        for (var i = 0; i < this.state.exolist.length; i++) {
            exercicesArray.push(this.state.exolist[i]);
        }
        return (
            <div className="container">
                <div className="row with-padding-top">
                    <div className="col-lg-12">
                        <h1>Liste des exercices</h1>
                        <hr />
                    </div>
                </div>
                <div className="row text-center">
                    <ListExercices value={exercicesArray}  />
                </div>
                <hr />
            </div>
        )
    }
});
