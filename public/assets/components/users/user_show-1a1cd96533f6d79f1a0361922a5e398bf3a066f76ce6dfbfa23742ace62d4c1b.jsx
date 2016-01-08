var UserShow = React.createClass({
   
  getInitialState: function() {
    return {data: []};
  },

  loadTasksFromServer: function(props) {
    var props = props || this.props || this.nextProps;
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

  componentDidMount: function() {
    this.loadTasksFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
      this.loadTasksFromServer(nextProps);
    },

  render: function() {
    var tasks = this.state.data.map(function(task) {
      return(
        <Task data={task}/>  
      );     
    });

    return ( 
      <div>
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