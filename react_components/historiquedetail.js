 module.exports = React.createClass({
   	getInitialState: function () {
    return {
      src: 'function add(a, b) {\n' +
           '  return a + b;\n' +
           '}'
    };
  },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
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
			</div>
			
		)
	}
});