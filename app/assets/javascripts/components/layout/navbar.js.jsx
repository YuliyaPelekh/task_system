var Navbar = React.createClass({
  mixins: [ReactRouter.Navigation],

  handleLogoutSubmit: function() {
    $.ajax({
      url: 'logout.json',
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        this.setState({ data: null });
        this.transitionTo('/');
      }.bind(this),
      error: function(err) {
        console.error(err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var loginMenu;
    var current_user = this.props.data;
    if (current_user == null){ 
      loginMenu =
        <ul> 
          <li><Link to='/signup'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
          <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>     
      }
    else{
        loginMenu =
        <ul> 
          <li>{current_user.email}</li>
          <li><form onSubmit={ this.handleLogoutSubmit }>
                <input type='submit' value='Logout'/>
              </form>
          </li>
        </ul>
      }
    return (
    <header>
      <nav>
        <ul>
          <li><a href='/' id='title'>Task Management App</a></li>
          <li><Link to='/'>Home</Link></li>
          <li className='submenu-item toggle'><a>Tasks
            <span className="caret"></span></a>
              <ul className="submenu submenu-toggle">
                <li><Link to="users">All tasks</Link></li>
                <li><Link to='new_task'>New task</Link></li>
                <li><Link to="mytasks">My tasks</Link></li>
              </ul>
          </li>
          <li><Link to='gallery'>Gallery</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
          {loginMenu}
      </nav>
    </header>
    );
  }
});