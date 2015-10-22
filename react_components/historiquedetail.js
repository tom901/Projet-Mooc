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
				    width = "100%"
				    fontSize = {16}
				/>
				<br/>
				<p>Je vérifie votre code avec mes tests.</p>
				<br/>
				<p>J'obtiens : </p>
				<p> Voici ce qu'a vérifié la correction automatisée:</p>
				<ul> 
					<li> Je vais évaluer votre code. </li>
					<li> Votre code s'évalue correctement. </li>
					<li> Je vais tourner votre code avec mes tests </li>
					<li> Je vais tester la fonction Classe Point </li>
					<li> Point est bien une classe instanciable </li>
					<li> Test #1 J'évalue Point </li>
					<li> Test #2 J'évalue (new Point(1, 2)).x </li>
					<li> Test #3 J'évalue (new Point(3, 4)).y </li>
					<li> Test #4 J'évalue (new Point(3, 4)) instanceof Point </li>
					<li> Test #5 J'évalue (new Point(3, 4)).toString() </li>
					<li> Vous avez réussi 5 de mes 5 tests. </li>
					<li> ColoredPoint est bien une classe instanciable </li>
					<li> Test #1 J'évalue ColoredPoint </li>
					<li> Test #2 J'évalue (new ColoredPoint(5, 6, \'green\')).x </li>
					<li> Test #3 J'évalue (new ColoredPoint(7, 8, \'green\')).y </li>
					<li> Test #4 J'évalue (new ColoredPoint(9, 10, \'green\')).color </li>
					<li> Test #5 J'évalue (new ColoredPoint(9, 10, \'green\')) instanceof Point </li>
					<li> Test #6 J'évalue (new ColoredPoint(9, 10, \'green\')) instanceof ColoredPoint </li>
					<li> Test #7 J'évalue (new ColoredPoint(9, 10, \'green\')).toString() </li>
					<li> Vous avez réussi 7 de mes 7 tests. </li>
					<li> coloration </li>
					<li> Test #1 J'évalue var p1 = new Point(11, 12); p1 </li>
					<li> Test #2 J'évalue p1.colorize(\'blue\').color </li>
					<li> Test #3 J'évalue p1.color </li>
					<li> Test #4 J'évalue p1.constructor === ColoredPoint </li>
					<li> Test #5 J'évalue p1 instanceof Point </li>
					<li> Test #6 J'évalue p1 instanceof ColoredPoint </li>
					<li> Test #7 J'évalue p1 </li>
					<li> Test #8 J'évalue p1.toString() </li>
					<li> Vous avez réussi 8 de mes 8 tests. </li>
				</ul>
				<p> Bravo, votre code réussit tous mes tests.
				Vous gagnez <span>100</span> points.</p>
			</div>

		)
	}
});