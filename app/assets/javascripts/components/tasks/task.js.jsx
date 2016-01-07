var Task = React.createClass({
  mixins: [ReactRouter.Navigation],

 handleTaskRemoveSubmit: function() {
    var id = this.props.data.id;
    $.ajax({
      url: 'tasks/' + id +'.json',
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        this.transitionTo('new_task');
      }.bind(this),
      error: function(err) {
        console.error(err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var task=this.props.data;
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
            <td><form onSubmit={this.handleTaskRemoveSubmit}>
                 <input className='delete-button' type='submit' value='Delete'/>
               </form> 
            </td>
          </tr>
        </tbody>
    );
  }
});