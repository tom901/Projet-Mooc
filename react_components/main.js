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
 * [Header : Chargement du composant Header]
 * @type {ReactClass}
 */
var Header = require('./header.js');

/**
 * [TutorialForm : Chargement Du formulaire]
 * @type {ReactClass}
 */
var TutorialForm = require('./tutorialForm.js');

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
    return (
      <div className="tutorialBox">
        <Header />
        <div className="tutorial">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">
                <TutorialList data={this.state.data} />
                <TutorialForm onTutorialSubmit={this.handleTutorialSubmit} />
              </div>
              <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
                <TutorialAside />
              </div>
            </div>
          </div>
        </div>
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

// var TutorialForm = React.createClass({
//     dateToday : function(){
//         var now = new Date();
//         var year   = now.getFullYear();
//         var month    = now.getMonth() + 1;
//         var day    = now.getDate();
//         var hour   = now.getHours();
//         var minute  = now.getMinutes();
//         var seconde = now.getSeconds();

//         return 'Le '+day+'-'+month+'-'+year+' à '+hour+':'+minute+':'+seconde ;
//     },

//     handleSubmit: function(e) {
//         e.preventDefault();
//         var author = this.refs.author.value.trim();
//         var text = this.refs.text.value.trim();
//         var titleTuto = this.refs.titleTuto.value.trim();
//         var dateToday = this.dateToday();
//         if (!text || !author || !titleTuto) {
//           return;
//       }
//       this.props.onTutorialSubmit({author: author, text: text, titleTuto : titleTuto, dateTuto : dateToday});
//       this.refs.author.value = '';
//       this.refs.text.value = '';
//     },
//     render: function() {
//         return (
//             <div className="container">
//                 <form className="tutorialForm" onSubmit={this.handleSubmit}>
//                     <input className="form-control" type="text" placeholder="Auteur tuto" ref="author" />
//                     <input className="form-control" type="text" placeholder="Titre tuto" ref="titleTuto" />
//                     <input className="form-control" type="text" placeholder="Text tuto..." ref="text" />
//                     <input className="form-control" type="submit" value="Post" />
//                 </form>
//             </div>
//     );
//     }
// });

//Rendu
ReactDOM.render(
    <TutorialBox url="/api/tutorials" pollInterval={2000} />
    ,document.getElementById('content')
  );