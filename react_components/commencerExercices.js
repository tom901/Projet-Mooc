var brace  = require('brace');
var AceEditor  = require('react-ace');
require('brace/mode/javascript')
require('brace/theme/monokai')

 module.exports = React.createClass({
 	updateCode : function(newText){
 		//console.log(newText);
 	},
    getInitialState : function () {
        var fake ="// Chargement.... \n\nvar Greeter = (function () {\n";
        return {
            aceContent : fake ,
            aceSynTax : 'javascript',
            enonce : "Pas de consigne",
            spinner : true
        };
    },
    componentDidMount: function() {
        $("#spinnArea").hide();
        $("#answerForm").hide();
        var self = this;
        exerciceId(self.props.data.url, function(res,err){
            if (err !== undefined) {
                swal({
                    title: 'Attention',
                    text: 'Impossible de charger l\'exercie ! ',
                    type : 'error',
                }, function () {
                    return window.location.reload();
                });
            } else if (res !== undefined){
                if(self.isMounted()){
                    self.setState({
                        aceContent : res.stem,
                        enonce : res.codee,
                        spinner : false
                    });
                }
            }
        });
    },
    submitExercices : function (event) {
        event.preventDefault();
        $("#answerForm").fadeOut();
        $("#spinnArea").fadeIn();
        return false;
    },
    spinner : function () {
        if (this.state.spinner) {
            return (
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            )
        }else {
            $("#answerForm").fadeIn();
        }
    },
	render : function(){
        var self = this;
		return (
			<div className='container'>
                <fieldset >
                    <h3 className="with-top-padding">Enoncé</h3>
                    <hr />
                    {self.spinner(self.props.data.url)}
                    <div dangerouslySetInnerHTML={{__html: self.state.enonce}} />
                </fieldset>

                <fieldset className="with-top-padding">
                    <h3>Votre Réponse</h3>
                    <hr />
                    <form action=''
                        encType="multipart/form-data" acceptCharset="UTF-8"
                        className="answerForm" name="answerForm" id="answerForm">
                        <AceEditor
                            mode={self.state.aceSynTax}
                            theme="monokai"
                            onChange={this.updateCode}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{$blockScrolling: true}}
                            width="100%"
                            height="300px"
                            fontSize={16}
                            showGutter={true}
                            value={self.state.aceContent}
                        />
                    <hr />
                    <button type="submit" className="btn btn-primary pull-right btn-dark"
                    onClick={self.submitExercices}>Envoyer </button>
                    </form>
                    <div id="spinnArea">
                        <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                        </div>
                    </div>
                </fieldset>
			</div>
		)
	}
});
