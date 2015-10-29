var StartExercice = require('./commencerExercices.js');

/** Composant Exercice
Fonction : permet d'afficher la mise en page d'un exercice
*/
var Exercice = React.createClass({
    loadSubExerciceView : function () {
        var self = this;
        this.props.parent.setState({exolist : this.props.data.exercices });
        //ReactDOM.render(<ListExercices value={this.props.data}  />, document.getElementById('exerciceArea'));
    },
    loadStartExerciceView : function () {
        var self = this;
        ReactDOM.render(<StartExercice data={self.props.data}/>, document.getElementById('body'));
    },
    diplayTitle : function () {
        var self = this;
        var title = 'Aucun titre';
        if ('title' in self.props && self.props.title !== undefined) {
            title = self.props.title;
        }else if ('summary' in self.props.data) {
            title = self.props.data.summary;
        }
        return title;
    },
    getPrologue : function () {
        var self = this;
        var prologue = 'Pas de descriptif ... Soyez curieux :)';
        if ('prologue' in self.props.data && self.props.data.prologue != "") {
            prologue = self.props.data.prologue;
        }
        return prologue;
    },
    render: function() {
        var self = this;
        return (
            <div className="col-md-3 col-sm-6 hero-feature animated fadeIn">
                <div className="thumbnail">
                    <img className="logoExercices" src="./images/Logo-Paracamplus_noir.png" alt="" />
                    <div className="caption">
                        <h4 className="titleExercices">
                            <div dangerouslySetInnerHTML={{__html: this.diplayTitle()}} />
                        </h4>
                        <hr />
                        <div className="prologueexos"><small>{this.getPrologue()}</small></div>
                        <hr />
                        <p>
                            <a onClick={('exercices' in this.props.data) ? self.loadSubExerciceView : self.loadStartExerciceView }
                                className="btn btn-primary">
                                {('exercices' in this.props.data) ? "Voir le thème" : "Voir l'exercice"}
                            </a>
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
                    this.props.value.map(function (item, index) {
                        return <Exercice title={item.title} key={index} data={item} parent={self.props.parentDate}/>;
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
    spinner : function (exercicesArray) {
        if (exercicesArray.length < 1) {
            return (
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            )
        }
    },
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
        // console.log(exercicesArray);
        return (
            <div className="container">
                <div className="row with-padding-top">
                    <div className="col-lg-12">
                        <h1>Liste des exercices</h1>
                        <hr />
                    </div>
                </div>
                <div className="row text-center" id='exerciceArea'>
                    {self.spinner(exercicesArray)}
                    <ListExercices value={exercicesArray}  parentDate={self}/>
                </div>
                <hr />
            </div>
        )
    }
});
