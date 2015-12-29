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

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCurrentUserFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadCurrentUserFromServer(nextProps);
  },

  loadCurrentUserFromServer: function(props) {
    props = props || this.props;
    $.ajax({
      url: 'current_user.json',
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('current_user.json', status, err.toString());
      }.bind(this)
    });
  },


  render: function() {
    var loginMenu;
    var current_user = this.state.data;
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
          <li className='submenu-item'><Link to='/users'>Your Tasks
            <span className="caret"></span></Link>
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