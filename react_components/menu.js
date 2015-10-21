var PageHome = require('./homepage.js');
var ConsultExercices = require('./consultexercicespage.js');
var ConsultCorrect = require('./consultcorrectpage.js');
var EditProfile = require('./editprofilepage.js');
var LogOut = require('./logout.js');
var PageHistorique = require('./historiquepage.js');

/**
 * [PageHomeConnected Page si connecté]
 * @param  {file} './connected.js' [fichier du composant]
 * @return {ReactClass}                  [Composant ReactJS]
 */
var PageHomeConnected = require('./connected.js');

var RenderComponent = require('./renderComponent.js');

var MenuDropDown = React.createClass({
    chooseClick : function(name){
        this.props.parent.clicked(name);
    },
    componentDidMount: function(prevProps, prevState) {
        $( "#nav-controlled" ).hide();
    },
    render : function(){
        var self = this;
        return (
            <li key={self.props.index} className="dropdown">
                <a className="dropdown-toggle"
                    data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">{this.props.title}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {
                        self.props.subItems.map(function(item, index){
                            return <li key={index} onClick={self.chooseClick.bind(self,item.name)} ><a>{item.label}</a></li>;
                        })
                    }
                </ul>
            </li>
        );
    }
});

var MenuClassic = React.createClass({
    chooseClick : function(name){
        this.props.clicked(name);
    },
    render : function(){
        var classActive = "";
        if(this.props.parent.state.focused == this.props.name){
            classActive = "active";
        }
        return <li key={this.props.index} className={classActive} onClick={this.chooseClick.bind(this,this.props.name)} ><a>{this.props.title}</a></li>;
    }
});

module.exports  = React.createClass({
    typeMenuRender : function(item){
        if(item.isDropDown){
            return <MenuDropDown index={item.index} title={item.label} subItems={item.subItems} clicked={this.clicked} parent={this} />
        }
        else {
            return <MenuClassic index={item.index} title={item.label} name={item.name} clicked={this.clicked} parent={this}/>
        }
    },
    loadContenu : function(focused){
        ReactDOM.render(<RenderComponent component = {eval(focused)} />, document.getElementById('body'));
    },
    getInitialState: function(){
        return { focused: "PageHome" };

    },
    dateToday : function(){
        var dt = new Date();
        var day = dt.getDay();
        var today = dt.getDate();
        var year = dt.getFullYear();
        var month = dt.getMonth();
        var hour   = dt.getHours();
        var minute  = dt.getMinutes();
        var seconde = dt.getSeconds();
        var tabDay = new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
        var tabMonth = new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet", "Août","Septembre","Octobre","Novembre","Décembre");
        return "Nous sommes le "+tabDay[day]+" "+today+" "+tabMonth[month]+" "+year;
    },
    render: function(){
        var self = this;
        return(
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Afficher le menu</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand paracamplus" href="./"> </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right" id="nav-controlled">
                            {
                                self.props.items.map(function(item,index){
                                    return self.typeMenuRender(item,index) ;
                                })
                            }
                            <li><a><span> {this.dateToday()}</span></a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    },
    clicked: function(name){
        this.setState({focused:name});
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        this.loadContenu(nextState.focused);
        return true;
    }

});
