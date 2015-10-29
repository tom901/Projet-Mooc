/**
 * [LocalStorageMixin description]
 * @param  {LocalStorageMixin} './LocalStorageMixin' [description]
 * @return {ReactMixin} Mixine u extension de methodes
 */
var LocalStorageMixin = require('./LocalStorageMixin');

/**
 * [ReactClass Export de notre Mixin]
 * @return {ReactClass} [Instance d la Mixin]
 */
module.exports = React.createClass({
    mixins: [LocalStorageMixin],
    getInitialState: function(){
        var self = this;

        var UserProfile = ('userData' in this.props )? {
            Email : this.props.userData.Email,
            Firstname : this.props.userData.Firstname,
            Id : this.props.userData.Id,
            Lastname : this.props.userData.Lastname,
            Pseudo : this.props.userData.Pseudo
        } : self.getMyItem('UserProfile');

        self.storeMyItem('UserProfile', UserProfile);

        return UserProfile;
    },
    render : function(){
        var sidebarStyle = {
            overflow: 'hidden',
            outline: 'none',
            marginLeft: '0px'
        };
        var displayBlockStyle = {
            display: 'block'
        };
        var displayNoneStyle = {
            display: 'none'
        };
        var progressBarFake = {
            width: '60%'
        };
        var progressBarFake2 = {
            width: '25%'
        };
        var progressBarFake3 = {
            width: '90%'
        };
        var self = this;
        return (
            <div>
                <aside>
                    <div id="sidebar" className="nav-collapse sidebar-hack animated bounceInLeft" style={sidebarStyle}>
                        <ul className="sidebar-menu" id="nav-accordion" style={displayBlockStyle}>
                            <p className="centered">
                                <a href="#">
                                    <img src={"https://s.gravatar.com/avatar/" + md5(self.state.Email) + "?s=150&d=mm" } className="img-circle" width="100px" />
                                </a>
                            </p>
                            <h5 className="centered">Bonjour, {self.state.Firstname + " " + self.state.Lastname} </h5>
                            <li className="mt">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="sub-menu dcjq-parent-li">
                                <a href="#documentation" aria-controls="documentation" role="tab" data-toggle="tab" className="dcjq-parent">
                                    <i className="fa fa-book"></i>
                                    <span>Documentation</span>
                                </a>
                            </li>
                            <li className="sub-menu dcjq-parent-li">
                                <a href="#cours" aria-controls="cours" role="tab" data-toggle="tab" className="dcjq-parent">
                                    <i className="fa fa-cogs"></i>
                                    <span>Cours</span>
                                </a>
                            </li>
                            <li className="sub-menu dcjq-parent-li">
                                <a href="#exercices" aria-controls="exercices" role="tab" data-toggle="tab" className="dcjq-parent">
                                    <i className="fa fa-tasks"></i>
                                    <span>Exercices</span>
                                </a>
                            </li>
                            <li className="sub-menu dcjq-parent-li">
                                <a href="#performances" aria-controls="performances" role="tab" data-toggle="tab" className="dcjq-parent">
                                    <i className=" fa fa-bar-chart-o"></i>
                                    <span>Performances</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="container-fluid container-fluid-with-aside animated fadeIn">
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="home">
                            <div className="row text-center with-padding-top">
                                <div className="col-md-offset-2 col-md-2 col-sm-4 h2">
                                    <p className="with-padding-top">Progression</p>
                                    <div className="with-padding-top">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-warning progress-bar-striped"
                                                role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={progressBarFake}>
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                        </div>
                                        <p className="h4">60 %</p>
                                    </div>
                                </div>
                                <div className="col-md-offset-1 col-md-2 col-sm-4 hero-feature h2">
                                    <p className="with-padding-top">Erreur</p>
                                    <div className="with-padding-top">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-danger progress-bar-striped"
                                                role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={progressBarFake2}>
                                                <span className="sr-only">25 %</span>
                                            </div>
                                        </div>
                                        <p className="h4">25 %</p>
                                    </div>
                                </div>
                                <div className="col-md-offset-1 col-md-2 col-sm-4 hero-feature h2">
                                    <p className="with-padding-top">Reussite</p>
                                    <div className="with-padding-top">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success progress-bar-striped"
                                                role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={progressBarFake3}>
                                                <span className="sr-only">90 %</span>
                                            </div>
                                        </div>
                                        <p className="h4">90 %</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="with-padding-top">Bienvenue sur le site des exercices à correction automatique.</h2>
                            <hr />
                            <p className="with-padding-top h4">
                                Si vous venez pour la première fois,
                                sachez que vous pouvez changer votre pseudo,
                                votre courriel et votre mot de passe
                                <br />
                                en clicquant sur le menu « Profil »
                                puis sur « Modifier mon profil ».
                                <br />
                                <br />
                                De nouveaux exercices vous seront proposés au cours de l'année. Bon travail!
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade in " id="documentation">
                            <div data-example-id="togglable-tabs" className="bs-example bs-example-tabs">
                                <ul role="tablist" className="nav nav-tabs" id="myTabs">
                                    <li className="active" role="presentation">
                                        <a aria-expanded="true" aria-controls="home" data-toggle="tab" role="tab" id="home-tab" href="#authentication">Authentification</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#legals" aria-expanded="false">Côté légal</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#exos" aria-expanded="false">Exercices proposés</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#howto" aria-expanded="false">Correction automatisée mode d'emploi</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#perfs" aria-expanded="false">Performance</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div aria-labelledby="home-tab" id="authentication" className="tab-pane fade active in" role="tabpanel">
                                        <p className="with-padding-top h1 text-center">Authentification</p>
                                        <hr />
                                        <p>
                                            Un « cookie » est une information que stocke un serveur sur votre
                                            ordinateur lorsque vous visitez des pages de ce serveur. Un cookie
                                            permet de vous suivre pendant votre visite. L'infrastructure de
                                            correction automatisée CodeGradX (anciennement FW4EX) n'utilise que
                                            deux cookies de session nommés <code>u</code> et <code>t</code>.
                                        </p>
                                        <p>
                                            Dès que vous vous identifiez auprès d'un serveur de la constellation
                                            CodeGradX, un cookie vous est octroyé qui vous identifie auprès de
                                            tous les serveurs de la constellation. Si vous voyez cette page, c'est
                                            que vous avez ce fameux cookie! Ce cookie permet aux serveurs de vous
                                            associer aux <a href="./legal">informations détenues sur vous</a>.
                                        </p>
                                        <p>
                                            Vous pouvez bloquer ou supprimer ce cookie dans votre navigateur
                                            toutefois, vous ne pourrez alors plus accéder aux services de
                                            l'infrastructure de correction automatisée.
                                        </p>
                                        <p>
                                            CodeGradX utilise <a href="http://www.google.com/analytics/">
                                            Google Analytics</a> qui vient avec ses propres cookies.
                                        </p>
                                        <p>
                                            Pensez, quand vous pouvez le faire, à changer votre mot de passe
                                            afin de pouvoir, plus tard, vous reconnecter directement au site.
                                            Pensez également à indiquer un courriel correct afin de pouvoir vous
                                            faire envoyer un lien d'accès temporaire au cas où vous oublieriez
                                            votre mot de passe!
                                        </p>
                                        <p>
                                            Attention, si vous vous êtes identifié via <em>Google sign-in</em>,
                                            vous ne devez pas changer de courriel car il sert de nom de connexion!
                                        </p>

                                    </div>
                                    <div aria-labelledby="profile-tab" id="legals" className="tab-pane fade" role="tabpanel">
                                        <p className="with-padding-top h1 text-center">Côté légal</p>
                                        <hr />
                                        <p>
                                            Vous devez être autorisé pour utiliser ce site (cf. <a href="http://insta2.paracamplus.com//doc/authentication">identification</a> pour plus de détails). Une
                                            fois connecté vous pouvez utiliser ce site et les exercices qu'il
                                            propose autant de fois que vous pouvez raisonnablement le souhaiter.
                                            Tout abus pourra conduire à une perte d'autorisation.
                                        </p>
                                        <p>
                                            Les données vous concernant sont vos nom, prénom, courriel
                                            et pseudo. Vous
                                            pouvez modifier votre courriel (pour vous faire envoyer un mot de
                                            passe temporaire si d'aventure vous le perdez) ainsi que votre pseudo.
                                            Le système utilise les <a href="http://www.gravatar.com/">
                                            gravatars</a> pour vous représenter graphiquement. Votre gravatar est
                                            une image carrée associée à votre courriel.
                                        </p>
                                        <p>
                                            Votre activité avec le système est enregistrée: la liste des exercices
                                            auxquels vous avez soumis une réponse, vos réponses ainsi que les
                                            rapports de correction du système sont mémorisés. Le rapport de
                                            correction est totalement anonyme: la machine de correction est une
                                            machine indépendante du serveur Web et n'a pas accès à votre identité
                                            (ne mentionnez toutefois pas votre nom dans votre réponse!)
                                        </p>
                                        <p>
                                            Un rapport de correction (toujours anonyme) est disponible pour
                                            l'étudiant l'ayant créé (accessible dans son historique), pour les
                                            enseignants de l'UE, pour les auteurs de l'exercice en question et
                                            pour les administrateurs du site.
                                        </p>
                                        <p>
                                            En utilisant ce site, vous vous devez de respecter un certain nombre
                                            d'engagements:
                                        </p>
                                        <ul>
                                            <li>Vous n'utiliserez qu'une seule identité pour vous connecter</li>
                                            <li>Vos réponses ne seront le fruit que de votre propre travail (sauf exercices pouvant être effectués en groupe)</li>
                                            <li>Vous ne divulguerez pas les solutions des exercices</li>
                                            <li>Vous ne chercherez pas à entraver le fonctionnement du système</li>
                                            <li>Vous ne tenterez pas de nuire aux autres utilisateurs</li>
                                        </ul>
                                        <p>
                                            En utilisant ce site, vous concédez aux administrateurs le droit de
                                            mémoriser vos réponses aux exercices, vos rapports de correction
                                            (toujours anonymes), de les afficher (tout ou partie), d'opérer toute
                                            sorte de traitement en vue d'améliorer les exercices, leur
                                            formulation, leur correction, leur enchaînement.
                                        </p>
                                        <p>
                                            Le lien entre l'étudiant et les rapports de correction est rompu au
                                            bout de deux ans d'inactivité de la part de l'étudiant. L'étudiant n'a
                                            donc plus moyen alors de retrouver ces rapports dans son historique.
                                            Les rapports sont cependant toujours accessibles pour les auteurs des
                                            exercices et les administrateurs du site.
                                        </p>
                                        <p>
                                            Le responsable de cette plate-forme est Christian Queinnec. Pour en
                                            savoir plus sur cette plate-forme, nommée CodeGradX, vous pouvez consulter
                                            le <a href="http://codegradx.org/">site associé</a> et les articles
                                            qu'il contient.
                                        </p>
                                    </div>
                                    <div aria-labelledby="profile-tab" id="exos" className="tab-pane fade" role="tabpanel">
                                        <p className="with-padding-top h1 text-center">Exercices proposés</p>
                                        <hr />
                                        <p>
                                            Exercices proposés
                                        </p>
                                    </div>
                                    <div aria-labelledby="profile-tab" id="howto" className="tab-pane fade" role="tabpanel">
                                        <p className="with-padding-top h1">Correction automatisée mode d'emploi</p>
                                        <hr />
                                        <p>
                                            Cette page décrit succinctement ce site d'<a href="http://insta2.paracamplus.com//doc/exercises">exercices à correction automatique</a>.
                                        </p>
                                        <p>
                                            Vous pouvez utiliser ce site de n'importe quel navigateur récent sur
                                            Internet. Vous devez permettre l'utilisation de Javascript et aussi
                                            disposer d'un cookie que vous obtenez après authentification que ce
                                            soit auprès de ce site ou de sites partenaires. Faites attention à ne
                                            pas vous faire voler ce cookie si vous êtes sur une machine non sûre
                                            ou partagée (cyber-café, bibliothèque, etc.).
                                        </p>
                                        <p>
                                            Lorsque vous êtes identifié, votre pseudo apparaît en haut de la
                                            fenêtre. consultez l'onglet <a href="http://insta2.paracamplus.com//doc/exercises">Exercices</a>
                                            qui vous indique les exercices
                                            disponibles triés par thématique. Choisissez un exercice, lisez
                                            soigneusement l'énoncé et les exemples de mise en œuvre, étudiez
                                            la documentation appropriée, testez votre réponse sur votre machine,
                                            enfin, indiquez votre réponse dans la case du formulaire sous l'énoncé
                                            et cliquez sur le bouton d'envoi.
                                        </p>
                                        <p>
                                            Vous pouvez retrouver les précédents rapports de correction grâce à
                                            l'<a href="/history">historique</a> de vos interactions avec ce site.
                                        </p>
                                        <h1>CodeGradX</h1>
                                        <p>
                                            Le système <a href="http://codegradx.org/">CodeGradX</a> (anciennement
                                            nommé FW4EX (ce qui était imprononçable)) est une technologie
                                            asynchrone, côté serveur. Toutes les quelques secondes, le système va
                                            chercher vos nouveaux envois, les note puis stocke les rapports de
                                            correction sur un serveur que votre navigateur interroge toutes les
                                            quelques secondes. Il faut une vingtaine de secondes pour obtenir (en
                                            général) la correction ce qui est une incitation à réfléchir plutôt
                                            qu'à multiplier les essais.
                                        </p>
                                        <p>
                                            Le système <a href="http://codegradx.org/">CodeGradX</a> et son client
                                            web sont des logiciels en pleine évolution. Si tous les moteurs à
                                            noter sont en dérangement, les copies à noter attendent le
                                            rétablissement d'au moins l'un d'entre eux (ce qui peut durer quelques
                                            heures). Le client web semble fonctionner avec Firefox 26.0 (MacOSX,
                                            Ubuntu64), Safari 7.0.1 (MacOSX), Chrome 32.0.1700.102 (Ubuntu64) et
                                            probablement quelques autres.
                                        </p>
                                        <p>
                                            Si vous n'obtenez pas de rapport de correction au bout d'une trentaine
                                            de secondes, un message apparaît pour le signifier. Le (petit) serveur
                                            qui héberge temporairement ce site peut avoir des problèmes de charge,
                                            d'alimentation ou de connectivité! Il peut aussi tomber en panne sans
                                            que je m'en aperçoive. De toute façon, vous pourrez, plus tard,
                                            retrouver votre rapport de correction grâce à l'historique.
                                        </p>
                                        <p>
                                            Après avoir lu et examiné le rapport de correction (c'est un exercice
                                            de mise au point), vous pouvez modifier votre réponse et l'envoyer à
                                            corriger à nouveau. Parfois, les tests éprouvent votre réponse sur des
                                            cas qui peuvent vous paraître étranges ce n'est, la plupart du temps,
                                            qu'une conséquence d'une spécification floue. Tout l'art de la
                                            programmation est de déterminer les frontières que l'on se fixe.
                                        </p>
                                        <p>
                                            Les rapports de correction sont en eux-mêmes anonymes (sauf si vous
                                            incorporez explicitement des indices vous identifiant ce qui n'a aucun
                                            intérêt). Ces rapports sont consultables par les auteurs des exercices
                                            (afin d'améliorer ces exercices) et par les <a href="mailto:master@codegradx.org"> auteurs de CodeGradX</a> à qui vous
                                            pouvez également faire part de vos remarques concernant ce site.
                                        </p>
                                    </div>
                                    <div aria-labelledby="profile-tab" id="perfs" className="tab-pane fade" role="tabpanel">
                                        <p className="with-padding-top h1 text-center">Performance</p>
                                        <hr />
                                        <h2>Généralités</h2>
                                        <p>
                                            La <strong>performance</strong> est calculée, un peu comme aux échecs
                                            (avec le système Elo ou maintenant Glicko), en prenant en
                                            considération l'ensemble des joueurs et des parties. Ici une partie
                                            est jouée lorsqu'un étudiant soumet une réponse à un exercice. Son
                                            <strong>score</strong> sur cette partie est fonction de la note
                                            maximale obtenue et du nombre de coups qui lui ont été nécessaire pour
                                            obtenir cette note maximale. Le meilleur score possible est donc (1.0,
                                            1) où 1.0 est la note maximale (ici normalisée entre 0.0 et 1.0) et 1
                                            est le nombre de coups.
                                        </p>
                                        <p>
                                            Les scores peuvent être ordonnés d'abord selon la note maximale
                                            obtenue puis par le nombre de coups associés. Ainsi,
                                        </p>
                                        <ul>
                                        <li> (x, n) est meilleur que (y, n) si x &gt; y </li>
                                        <li> (x, n) est meilleur que (x, n+1) </li>
                                        </ul>
                                        <p>
                                            Pour chaque exercice, on peut ordonner les scores et calculer combien
                                            de joueurs ont mieux réussi sur cet exercice. On peut alors considérer
                                            que le joueur a perdu ces parties vis-à-vis de tous les joueurs ayant
                                            obtenu de meilleurs scores mais qu'il a gagné vis-à-vis de tous les
                                            joueurs ayant obtenu de moins bons scores. Bien sûr, il fait match
                                            nul avec tous les joueurs ayant obtenu le même score.
                                        </p>
                                        <p>
                                            La <strong><a href="http://insta2.paracamplus.com//skill">performance</a></strong>
                                            est alors calculée comme le
                                            pourcentage entre le nombre de parties gagnées sur le nombre entier et
                                            total de parties jouées dans le système.
                                        </p>
                                        <h1>Foire aux questions</h1>
                                        <div className="faq">
                                            <div className="q"> Je n'ai pas joué et mon score change? </div>
                                            <div className="r">
                                                Si un nouveau joueur arrive et qu'il obtient
                                                un meilleur score sur un exercice, il vous a battu! Votre score
                                                descend donc. Inversement, vous battez tout nouveau joueur obtenant un
                                                moins bon score.
                                            </div>
                                        </div>
                                        <div className="faq">
                                            <div className="q"> Je viens de réussir plein
                                                d'exercices et mon score n'a pas changé ?
                                            </div>
                                            <div className="r"> Le
                                                calcul des performances est assez coûteux et n'est recalculé que
                                                toutes les heures.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade in " id="cours">
                            <h1 className="with-padding-top text-center">Cours INSTA programmation réticulaire</h1>
                            <hr />
                            <p>
                                Cours donné en octobre 2015 à l'<a href="http://insta.fr/">INSTA</a>
                                par Christian Queinnec. Les transparents sont en perpétuelle évolution.
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/intro.pdf">Introduction au cours</a></li>
                                <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/js.pdf">Transparents du cours sur Javascript</a></li>
                                <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/spec/tests-spec.js">Code pour Jasmine</a></li>
                                <li className="list-group-item"> <a href="./">Exercices Javascript</a></li>
                                <li className="list-group-item"> <a href="sql.pdf">Transparents du cours sur Sql</a></li>
                                <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/http.pdf">Transparents du cours sur HTTP</a></li>
                                <li className="list-group-item"> <a href="https://paracamplus.com/Courses/INSTA.js/dom.pdf">Transparents du cours sur le côté client</a></li>
                            </ul>
                            <h2 className="with-padding-top"> Autres ressources </h2>
                            <hr />
                            <ul>
                                <li><a href="https://paracamplus.com/Courses/INSTA.js/DB/uvev-schema.sql">Schéma d'UVEV</a></li>
                                <li><a href="https://paracamplus.com/Courses/INSTA.js/DB/uvev-content.sql.gz">la base UVEV (pour Postgresql)</a></li>
                            </ul>
                            <h2 className="with-padding-top"> Interrogations écrites </h2>
                            <hr />
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <a href="https://docs.google.com/forms/d/1pUanwSbXSYSzmnb04KjakD5HVxGCZ1b1ow9UMVNFZ10/viewform">interrogation 1</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://docs.google.com/forms/d/105gfSO088peYt2mrxqkzV1ZG6MeVlJUUvgYDoHzyExw/viewform">interrogation 2</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="https://docs.google.com/forms/d/1fSIUJVTcRXvM1rAeA42gXOEzVqQvgBRpaLR86G0nmMk/viewform">interrogation 3</a>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade in " id="exercices">exercices</div>
                        <div role="tabpanel" className="tab-pane fade in " id="performances">performances</div>
                    </div>
                </div>
            </div>
        )
    }
});
