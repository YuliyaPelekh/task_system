var Navbar = React.createClass({

  loadUsersFromServer: function() {
    $.ajax({
      url: 'current_user.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('current_user.json', status, err.toString());
      }.bind(this)
    });
  },

  handleLogoutSubmit: function() {
    $.ajax({
      url: 'logout.json',
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        this.setState({ data: null });
      }.bind(this),
      error: function(err) {
        console.error(err.toString());
      }.bind(this)
    });
  },

    getInitialState: function() {
      return {data: []};
    },

   componentDidMount: function() {
    this.loadUsersFromServer();
   },

  render: function() {
    var loginMenu;
    var current_user = this.state.data;
    if (current_user.email){ 
        loginMenu =     
        <ul> 
          <li>{current_user.email}</li>
          <li><form onSubmit={ this.handleLogoutSubmit }>
                <button ref="destroy">Logout</button>
              </form>
          </li>
        </ul>
      }
    else{
        loginMenu =
        <ul> 
          <li><Link to='/signup'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
          <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
      }
    return (
    <header>
      <nav>
        <ul>
          <li><Link to='/' id='title'>Task Management App</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li className='submenu-item'><a href="#">Your Tasks
            <span className="caret"></span></a>
              <ul className="submenu">
                <li><a href="#">Task 1-1</a></li>
                <li><a href="#">Task 1-2</a></li>
                <li><a href="#">Task 1-3</a></li>
              </ul>
          </li>
          <li><a href="#">Gallery</a></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
          {loginMenu}
      </nav>
    </header>
    );
  }
});