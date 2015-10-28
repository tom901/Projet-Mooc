 var StartExercice = require('./commencerExercices.js');

//  listFromBB1 : function (event) {

//     ExercicesList(function(content,null)){
//         console.log("titi");
//     }
// }


/** Objet data 
Fonction : permet d'obtenir une liste d'exercice fictive
*/
 /*var data = [
      {name: "Exo 1"},
      {name: "Exo 2"}
    ];*/



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
                <img style={{width:'50px'}} src="./images/Logo-JS.png" alt="" />
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>
                        <a onClick={self.loadStartExerciceView} className="btn btn-primary">{"Commencer l'exercice"}</a> 
                        <a href="#" className="btn btn-default">Voir la correction</a>
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
    listExercices : function(data){
        // console.log(data);
        // data.map(function (comment, index) {
            // return (
            //     <Exercice title={'comment.title'}>
            //     </Exercice>
            // );
        //});

    },
    render: function() {
    
    var self = this;
    var valid = new self.props.data;
    return (
      <div className="">
      hellow =)
        {self.listExercices(self.props.data)}
        {console.log(self.props.data)}
        // {console.log(valid.content)}
      </div>
    );
  }
});
// 

/** Composant Consultexercicespage 
Fonction : 
- affiche le contenu de la page
- on ajoute le composant ListExercices
*/
 module.exports = React.createClass({
    getInitialState:function (){
        
        return{
            exolist :  null

        }
    },
    componentDidMount: function() {
    
        var self = this;
        ExercicesList(function(res,err){
            if(self.isMounted()){
                self.setState({exolist:res.content});
            }
        });
        
    },
    render : function(){ 
        // console.log(this.state.exolist);
        var self = this;
        return ( 
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <h3>Liste des exercices</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <ListExercices data={self.state.exolist} />
                </div>

                <hr />
            </div>
        )
    }
});