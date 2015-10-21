/**
 * Application logic
 * =================
 * Ce fichier contiendra toute la logique
 * metier que l'on souhaite appliquer
 */

/**
 * [React : Chargement de la librairie React pour utilisation]
 * @type {React}
 */
var React = require('react');

/**
 * [Menu : Chargement du composant Menu]
 * @type {ReactClass}
 */
var Menu = require('./menu.js');


/**
 * [TutorialForm : Chargement Du formulaire]
 * @type {ReactClass}
 */
var TutorialForm = require('./tutorialForm.js');

/**
 * [ProfilView : Chargement Du formulaire pour la visualisation du profil]
 * @type {ReactClass}
 */
var ProfilView = require('./profil-view.js');

 /* [ProfilEdit : Chargement Du formulaire pour l'edition du profil]
 * @type {ReactClass}
 */
var ProfilEdit = require('./editprofilepage.js');

/**
 * [ProfilEdit : Chargement Du formulaire pour l'edition du profil]
 * @type {ReactClass}
 */
var ProfilInscription = require('./profil-inscription.js');

/**
 * [HistoriqueDetail : Chargement de la page d'historique des exercices detaillés]
 * @type {ReactClass}
 */
var HistoriqueDetail = require('./historiquedetail.js');

/**
 * [MainContent : Box tutoriel]
 * @return {ReactClass}
 */
var MainContent = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleTutorialSubmit: function(tutorial) {
    var tutorials = this.state.data;
    var newTutorials = tutorials.concat([tutorial]);
    this.setState({data: newTutorials});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: tutorial,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {


    var itemsMenu = [
                        { name: "PageHomeConnected",label : "Accueil", isDropDown:false },
                        { name:"Exercices",label : "Exercices", isDropDown : true, subItems:[{ name: "ConsultExercices",label:"Consulter les exercices"},{ name: "ConsultCorrect",label:"Consulter les corrections"}]},
                        { name:"PageHistorique",label : "Historique", isDropDown:false },
                        { name:"PageProfil", label:"Profil",isDropDown:true,subItems:[{ name: "EditProfile",label:"Modifier mon profil"},{ name: "LogOut",label:"Déconnexion"}]}
                    ];

    return (
      <div className="tutorialBox">
        <Menu items={itemsMenu} title="Cours"/>
        <div id="body" ></div>
      </div>
    );
  }
});

ReactDOM.render(
    <MainContent url="/api/tutorials" pollInterval={1000000} />
    ,document.getElementById('content')
  );
