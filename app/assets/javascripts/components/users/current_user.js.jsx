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
      var date= new Date(task.created_at);
      var day = date.getDate();
      if (day < 10) day = '0' + day;
      var month = date.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var year = date.getFullYear() % 100;
      var x = day + '.' + month + '.' + year;

      return (
        <tbody>
          <tr key={task.id} className={task.percent===100?'completed':undefined}>
            <td>{x}</td>
            <td>{task.name}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>{task.percent}% <Link to='edit_percent' params={{taskId: task.id}}><span className='glyphicon glyphicon-pencil'>
              </span></Link> </td>
            <td><Link to='edit_task' params={{taskId: task.id}}>
               <span className='glyphicon glyphicon-edit'></span></Link>
            </td>
            <td><DeleteTask id={task.id}/></td>
          </tr>
        </tbody>  
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