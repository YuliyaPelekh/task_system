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
        <TaskForm onTaskSubmit={this.handleTaskSubmit}/>
      </div>
    );
  }
});

