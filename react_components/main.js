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
 * [TutorialAside : Aside Zone]
 * @return {ReactClass}
 */
var TutorialAside = React.createClass({
  render : function(){
    return(
      <div>
        <div className="sidebar-module sidebar-module-inset">
          <h4>About</h4>
          <p>
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
            mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum
            nulla sed consectetur.
          </p>
        </div>
        <div className="sidebar-module">
          <h4>Archives</h4>
          <ol className="list-unstyled">
            <li><a href="#">March 2014</a></li>
            <li><a href="#">February 2014</a></li>
            <li><a href="#">January 2014</a></li>
            <li><a href="#">December 2013</a></li>
            <li><a href="#">November 2013</a></li>
            <li><a href="#">October 2013</a></li>
            <li><a href="#">September 2013</a></li>
            <li><a href="#">August 2013</a></li>
            <li><a href="#">July 2013</a></li>
            <li><a href="#">June 2013</a></li>
            <li><a href="#">May 2013</a></li>
            <li><a href="#">April 2013</a></li>
          </ol>
        </div>
        <div className="sidebar-module">
          <h4>Elsewhere</h4>
          <ol className="list-unstyled">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ol>
        </div>
      </div>
    )
  }
});


/**
 * [TutorialBox : Box tutoriel]
 * @return {ReactClass}
 */
var TutorialBox = React.createClass({
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
                        { name: "PageHome",label : "Accueil", isDropDown:false },
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


/**
 * [TutorialList : List tutoriel]
 * @return {ReactClass}
 */
var TutorialList = React.createClass({
  render: function() {
    var tutorialNodes = this.props.data.map(function(tutorial, index) {
      return (
        <Tutorial
          author={tutorial.author} titleTuto={tutorial.titleTuto}
          dateTuto={tutorial.dateTuto} key={index}>
          {tutorial.text}
        </Tutorial>
      );
    });
    return (
      <div className="tutorialList">{tutorialNodes}</div>
    );
  }
});


/**
 * [Tutorial : Tutoriel render]
 * @return {ReactClass}
 */
var Tutorial = React.createClass({
    rawMarkup: function() {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
      return { __html: rawMarkup };
    },
    render: function() {
      return (
        <div className="blog-post">
          <h2 className="blog-post-title tutorialAuthor">
            {this.props.titleTuto}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <p className="blog-post-meta">
            {this.props.dateTuto} par <a href="#">{this.props.author}</a>
          </p>
        </div>
      );
    }
});

ReactDOM.render(
    <TutorialBox url="/api/tutorials" pollInterval={1000000} />
    ,document.getElementById('content')
  );
