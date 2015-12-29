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
        <tbody>
          <tr key={user.id} >
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Link to="users_tasks" params={{userId: user.id}}>User has {user.tasks.length} tasks </Link></td>
          </tr>
        </tbody>     
      );
    });

    return (
      <div className='users-wrapper'>
        <h2> List of users </h2>
        <table> 
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th colSpan="4"></th>
            </tr>
          </thead>
          {users}
        </table>
      </div>
    )
  }
});