var LocalStorageMixin = require('./LocalStorageMixin');

/**
 * [createClass description]
 * @param  {[type]} {                                             mixins: [LocalStorageMixin] [description]
 * @param  {[type]} getInitialState: function(     [description]
 * @return {[type]}                  [description]
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
    /*componentDidMount: function() {
        console.log(this.state);
    },*/
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
        var self = this;
        //{self.state.Person.Firstname + " " + self.state.Person.Lastname}
        console.log(self.state);
        return (
            <div>
                <aside>
                    <div id="sidebar" className="nav-collapse sidebar-hack" style={sidebarStyle}>
                        <ul className="sidebar-menu" id="nav-accordion" style={displayBlockStyle}>
                            <p className="centered">
                                <a href="#">
                                    <img src={"https://s.gravatar.com/avatar/" + md5(self.state.Email) + "?s=100" } className="img-circle" width="100" /></a></p>
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
                        <div className="container-fluid container-fluid-with-aside">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active" id="home">
                                    <div className="row text-center">
                                        <div className="col-md-3 col-sm-6">
                                            avancement
                                        </div>

                                        <div className="col-md-3 col-sm-6 hero-feature">
                                            moyenne
                                        </div>

                                        <div className="col-md-3 col-sm-6 hero-feature">
                                            ...
                                        </div>

                                        <div className="col-md-3 col-sm-6 hero-feature">
                                            ...
                                        </div>
                                    </div>
                                    <h2>Bienvenue sur le site des exercices à correction automatique.</h2>
                                    <p>
                                        Si vous venez pour la première fois,
                                        sachez que vous pouvez changer votre pseudo,
                                        votre courriel et votre mot de passeen clicquant sur le menu « Profil »
                                        puis sur « Modifier mon profil ».
                                        <br />
                                        De nouveaux exercices vous seront proposés au cours de l'année. Bon travail!
                                    </p>
                                </div>
                                <div role="tabpanel" className="tab-pane fade in " id="documentation">documentation</div>
                                <div role="tabpanel" className="tab-pane fade in " id="cours">cours</div>
                                <div role="tabpanel" className="tab-pane fade in " id="exercices">exercices</div>
                                <div role="tabpanel" className="tab-pane fade in " id="performances">performances</div>
                            </div>
                        </div>
                    </div>
                )
            }
        });
