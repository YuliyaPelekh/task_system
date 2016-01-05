var NewTask = React.createClass({
  mixins: [ReactRouter.Navigation],

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadUsersFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadUsersFromServer(nextProps);
  },

  loadUsersFromServer: function() {
    $.ajax({
      url: 'users.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('users.json', status, err.toString());
      }.bind(this)
    });
  },

  handleTaskSubmit: function(task) {
   $.ajax({
      url: 'tasks.json',
      dataType: 'json',
      type: 'POST',
      data: {task: task}, 
      success: function(data) {
        this.setState({data: data});
        this.transitionTo("users");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('tasks.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='form-wrapper'>
        <h1>Please create a new task</h1>
        <TaskCreateForm onTaskSubmit={this.handleTaskSubmit} data={this.state.data}/>
        <Link to='users'>{'Back to users'}</Link>
      </div>
    );
  }
});

