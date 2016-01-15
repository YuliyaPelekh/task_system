//renders tasks of current user
var CurrentUserShow = React.createClass({
   
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadTasksFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
      this.loadTasksFromServer(nextProps);
    },

  loadTasksFromServer: function(props) {
    var props = props || this.props || this.nextProps;
    $.ajax({
      url: 'current_tasks.json',
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

  render: function() {
    var tasks = this.state.data.map(function(task) {
      return (
        <Task data={task}/>
      );     
    });

    return ( 
      <div className='instant-box'>
        <h1>My tasks</h1>
        <table> 
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Ready</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {tasks}
        </table>
      </div>
    );
   }
});