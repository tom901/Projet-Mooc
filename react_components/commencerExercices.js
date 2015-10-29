var brace  = require('brace');
var AceEditor  = require('react-ace');
require('brace/mode/javascript')
require('brace/theme/monokai')

 module.exports = React.createClass({
 	updateCode : function(newText){
 		console.log(newText);
 	},
    getInitialState : function () {
        var fake ="var Greeter = (function () {\n";
        fake += "    function Greeter(message) {\n";
        fake += "        this.greeting = message;\n";
        fake += "    }\n";
        fake += "    Greeter.prototype.greet = function () {\n";
        fake += "        return 'Hello, ' + this.greeting;\n";
        fake += "    };\n";
        fake += "    return Greeter;\n";
        fake += "})();\n\n";
        fake += "var greeter = new Greeter('world');\n\n";
        fake += "var button = document.createElement('button');\n\n";
        fake += "button.textContent = 'Say Hello';\n\n";
        fake += "button.onclick = function () {\n";
        fake += "    alert(greeter.greet());\n";
        fake += "};\n\n";
        fake += "document.body.appendChild(button);\n";
        return { aceContent : fake , aceSynTax : 'javascript', stems : []};
    },
	render : function(){
        var self = this;
		return (
			<div className='container'>
			<h2 className="with-padding-top"> Commencer votre exercice : </h2>
                <fieldset >
                    <legend id="stemTitle">Énoncé</legend>
                    <p>Écrire ...</p>
                </fieldset>
                <fieldset >
                    <legend id="stemTitle">Réponse</legend>
          			<AceEditor
                        mode={self.state.aceSynTax}
                        theme="monokai"
                        onChange={this.updateCode}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{$blockScrolling: true}}
                        width="100%"
                        fontSize={16}
                        showGutter={true}
                        value={self.state.aceContent}
      				/>
                </fieldset>
			</div>
		)
	}
});
