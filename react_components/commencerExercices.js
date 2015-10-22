var brace  = require('brace');
var AceEditor  = require('react-ace');
require('brace/mode/javascript')
require('brace/theme/monokai')

 module.exports = React.createClass({
 	updateCode : function(newText){
 		console.log(newText);
 	},
	render : function(){ 
		return (
			<div className='container'>
			<h2> Commencer votre exercice : </h2>
			<AceEditor
				    mode="javascript"
				    theme="monokai"
				    onChange={this.updateCode}
				    name="UNIQUE_ID_OF_DIV"
				    editorProps={{$blockScrolling: true}}
				    width = "100%"
				    fontSize = {16}
				/>
			</div>
		)
	}
});