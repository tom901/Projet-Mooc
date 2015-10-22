module.exports = React.createClass({
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
       return (
           <div>
               <aside>
                  <div id="sidebar" className="nav-collapse " style={sidebarStyle}>
                      <ul className="sidebar-menu" id="nav-accordion" style={displayBlockStyle}>

                      	  <p className="centered">
                              <a href="profile.html">
                                  <img src={"https://s.gravatar.com/avatar/" + md5('adresse@email.fr') + "?s=100" } className="img-circle" width="100" /></a></p>
                      	  <h5 className="centered">Bonjour, John Smith</h5>

                          <li className="mt">
                              <a className="active" href="javascript:;">
                                  <i className="fa fa-dashboard"></i>
                                  <span>Mon profil</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-book"></i>
                                  <span>Documentation</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-cogs"></i>
                                  <span>Cours</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-tasks"></i>
                                  <span>Exercices</span>
                              </a>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className=" fa fa-bar-chart-o"></i>
                                  <span>Performances</span>
                              </a>
                          </li>

                      </ul>
                  </div>
              </aside>
           </div>
       )
   }
});
