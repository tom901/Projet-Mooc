 /**
 * [HistoriqueDetail : Chargement de la page d'historique des exercices detaillés]
 * @type {ReactClass}
 */
var HistoriqueDetail = require('./historiquedetail.js');

 module.exports = React.createClass({
   	getInitialState: function(){
        return { data: [] };

    },
    clickDetailHistorique : function(){
    	ReactDOM.render(
		    <HistoriqueDetail />
		    ,document.getElementById('body')
		  );

    },
	render : function(){ 
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					<br/>
						<p>
							Voici vos interactions reliées à la série d’exercices (identifiée par insta2) avec l’infrastructure CodeGradX (classées par ordre antichronologique). Vous pouvez également contempler votre tableau de chasse récapitulatif.
						</p>
						<br/>			
						<p>
							Cliquer sur l’une des lignes pour voir le rapport de correction associé. Certains Rapports de correction semblant sans intérêt peuvent néanmoins être 
							<a href="#"> révélées</a>
							.
						</p>
					</div>
				</div>
				<br/>			
				<div className="row mt">
					<div className="col-md-12">
						<div className="content-panel " >
							<h4> <i className="fa fa-angle-right"> Historique des Exercices</i>
							</h4>
							<br/>
							<table className="table table-bordered table-advance table-hover">
								
								<thead>
									<tr>
										<th> <i className="fa fa-bookmark"></i>
											Identifiant
										</th>
										<th>
											<i className="fa fa-bullhorn"></i>
											Nom de l'exercice
										</th>
										<th className="hidden-phone">
											<i className="fa fa-question-circle"></i>
											Description
										</th>
										<th>
											<i className="fa fa-bookmark"></i>
											Date
										</th>
										<th>
											<i className=" fa fa-edit"></i>
											Note
										</th>
										<th>
											<i className=" fa fa-edit"></i>
											Status
										</th>
									</tr>
								</thead>
								<tbody>
									<tr onClick={this.clickDetailHistorique} >
										<td className="text-center">0</td>
										<td>
											<a href="basic_table.html#">Création d'une page HTML</a>
										</td>
										<td className="hidden-phone">Lorem Ipsum dolor</td>
										<td>21/10/2015</td>
										<td>0,02/1</td>
										<td>
											<span className="label label-info label-mini">Abandonné</span>
										</td>
									</tr>
									<tr>
										<td  className="text-center">1</td>
										<td>
											<a href="basic_table.html#">Correction d'un exercice javascript</a>
										</td>
										<td className="hidden-phone">Correction d'un exercice javascript</td>
										<td>21/10/2015</td>
										<td>0,95/1</td>
										<td>
											<span className="label label-warning label-mini">En cours</span>
										</td>
									</tr>
									<tr>
										<td  className="text-center">2</td>
										<td>
											<a href="basic_table.html#">Mise en place d'une IA</a>
										</td>
										<td className="hidden-phone">Mise en place d'une IA</td>
										<td>21/10/2015</td>
										<td>1/1</td>
										<td>
											<span className="label label-success label-mini">Terminé</span>
										</td>
									</tr>
									<tr>
										<td className="text-center">3</td>
										<td>
											<a href="basic_table.html#">Faire avancer un robot</a>
										</td>
										<td className="hidden-phone">Faire avancer un robot</td>
										<td>21/10/2015</td>
										<td>1/1</td>
										<td>
											<span className="label label-success label-mini">Terminé</span>
										</td>
									</tr>
									<tr>
										<td className="text-center">4</td>
										<td>
											<a href="basic_table.html#">Création d'un simulateur</a>
										</td>
										<td className="hidden-phone">Lorem Ipsum dolor</td>
										<td>21/10/2015</td>
										<td>0,95/1</td>
										<td>
											<span className="label label-warning label-mini">En cours</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
});