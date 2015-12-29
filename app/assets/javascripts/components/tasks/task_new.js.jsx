var NewTask = React.createClass({
  mixins: [ReactRouter.Navigation],

  handleTaskSubmit: function(task) {
   $.ajax({
      url: 'tasks.json',
      dataType: 'json',
      type: 'POST',
      data: {task: task},
      success: function(data) {
        this.setState({data: data});
        this.transitionTo("/");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('tasks.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <h1>Please create a new task</h1>
        <UserForm onTaskSubmit={this.handleTaskSubmit} />
      </div>
    );
  }
});