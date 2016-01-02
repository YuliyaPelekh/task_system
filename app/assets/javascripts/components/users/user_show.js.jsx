var UserShow = React.createClass({
   
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
    props = props || this.props || this.nextProps;
    id = this.props.id;
    $.ajax({
      url: 'users/' + id + '.json',
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
        <tbody>
          <tr key={task.id} >
            <td>{task.created_at}</td>
            <td>{task.name}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>
                <Link to='edit_task' className='button' params={{taskId: task.id}}>Edit task</Link>
             </td>
            <td><DeleteTask id={task.id}/></td>
          </tr>
        </tbody>  
      );
    });

    return (
      <div className='tasks-wrapper'>
        <table> 
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Priority</th>
            </tr>
          </thead>
          {tasks}
        </table>
      </div>
    )
  }
});