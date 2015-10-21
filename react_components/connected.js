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
                                  <img src={"https://s.gravatar.com/avatar/" + md5('mcadevall@phonecontrol.fr') + "?s=80" } className="img-circle" width="100" /></a></p>
                      	  <h5 className="centered">John Smith</h5>

                          <li className="mt">
                              <a className="active" href="index.html">
                                  <i className="fa fa-dashboard"></i>
                                  <span>Dashboard</span>
                              </a>
                          </li>

                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-desktop"></i>
                                  <span>UI Elements</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="general.html">General</a></li>
                                  <li><a href="buttons.html">Buttons</a></li>
                                  <li><a href="panels.html">Panels</a></li>
                              </ul>
                          </li>

                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-cogs"></i>
                                  <span>Components</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="calendar.html">Calendar</a></li>
                                  <li><a href="gallery.html">Gallery</a></li>
                                  <li><a href="todo_list.html">Todo List</a></li>
                              </ul>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-book"></i>
                                  <span>Extra Pages</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="blank.html">Blank Page</a></li>
                                  <li><a href="login.html">Login</a></li>
                                  <li><a href="lock_screen.html">Lock Screen</a></li>
                              </ul>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-tasks"></i>
                                  <span>Forms</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="form_component.html">Form Components</a></li>
                              </ul>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className="fa fa-th"></i>
                                  <span>Data Tables</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="basic_table.html">Basic Table</a></li>
                                  <li><a href="responsive_table.html">Responsive Table</a></li>
                              </ul>
                          </li>
                          <li className="sub-menu dcjq-parent-li">
                              <a href="javascript:;" className="dcjq-parent">
                                  <i className=" fa fa-bar-chart-o"></i>
                                  <span>Charts</span>
                              <span className="dcjq-icon"></span></a>
                              <ul className="sub" style={displayNoneStyle} >
                                  <li><a href="morris.html">Morris</a></li>
                                  <li><a href="chartjs.html">Chartjs</a></li>
                              </ul>
                          </li>

                      </ul>
                  </div>
              </aside>
           </div>
       )
   }
});
