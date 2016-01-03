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
      var date= new Date(task.created_at);
      var day = date.getDate();
      if (day < 10) day = '0' + day;
      var month = date.getMonth() + 1;
      if (month < 10) month = '0' + month;
      var year = date.getFullYear() % 100;
      var x = day + '.' + month + '.' + year;

      return ( 
        <tbody>
          <tr key={task.id} >
            <td>{x}</td>
            <td>{task.name}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>
                <Link to='edit_task' className='button edit-button' params={{taskId: task.id}}>Edit</Link>
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