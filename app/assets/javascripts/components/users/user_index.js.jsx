var Users = React.createClass({
   
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadUsersFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
      this.loadUsersFromServer(nextProps);
    },

  loadUsersFromServer: function(props) {
    props = props || this.props;
    $.ajax({
      url: 'users.json',
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('users.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var users = this.state.data.map(function(user) {
      return ( 
      <div>
       <h2>{user.name} {user.email}</h2>   
       <UserShow id={user.id}/>
      </div>  
      );
    });

    return (
      <div className='users-wrapper'>
        <h1>All users tasks</h1>
          {users}
     <Link to='new_task' className='button create-button'>
          Create new task </Link>
      </div>
    )
  }
});