var EditTask = React.createClass({
  mixins: [ReactRouter.Navigation],

    getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    var id = this.props.params.taskId;
    $.ajax({
      url: 'tasks/' + id + '/edit.json',
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  handleSubmit: function(task) {
    var id = this.props.params.taskId;
    $.ajax({
      url: 'tasks/' + id + '.json',
      type: 'PATCH',
      dataType: 'json',
      data: {task: task}, 
      success: function(data) {
        this.setState({data: data});
        this.transitionTo('users');
      }.bind(this),
      error: function(status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

   render: function() {
     return (
   <div className='form-wrapper'>
      <h1>Edit Task</h1>
      <TaskEditForm
        onTaskSubmit={this.handleSubmit} data={this.state.data}/>
        <Link to='users'>{'Back to users'}</Link>
    </div>
   );
  }
});