var brace  = require('brace');
var AceEditor  = require('react-ace');
require('brace/mode/javascript')
require('brace/theme/monokai')

 module.exports = React.createClass({
    updateCode : function (newValue) {
  		console.log('change',newValue)
	},	
	render : function(){ 
		var options = {
            lineNumbers: true
        };
		return (
			<div className="container">
			<br/>
			<p> Voici votre note normalisée : <span>100</span> sur 100</p>
			<br/>
			<p>Voici donc votre résultat : </p>
			<br/>
			<AceEditor
			    mode="javascript"
			    theme="monokai"
			    onChange={this.updateCode}
			    name="UNIQUE_ID_OF_DIV"
			    editorProps={{$blockScrolling: true}}
			  />
			</div>

		)
	}
});