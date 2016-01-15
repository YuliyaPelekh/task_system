var TaskEditForm = React.createClass({

  getInitialState: function() {
    return {name: '', deadline: '', 
      priority: ''};
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleDeadlineChange: function(e) {
    this.setState({deadline: e.target.value});
  },
  handlePriorityChange: function(e) {
    this.setState({priority: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var deadline = this.state.deadline.trim();
    var priority = this.state.priority.trim();
    this.props.onTaskSubmit({name: name, deadline: deadline, priority: priority});
    this.setState({name: '', deadline: '', priority: ''});
  },

  render: function() {
   return (
    <form onSubmit={this.handleSubmit}>

     <p>
       <label for='task_name'>Description</label><br/>
       <input id="task_name" 
       ref="name"
       defaultValue={this.props.data.name}
       onChange={this.handleNameChange}
       type="text"
       pattern='(\w|\s){5,}'
       placeholder={this.props.data.name}/>
     </p>

     <p>
      <label for='task_deadline'>Deadline</label><br/>
       <input id='task_deadline'
       ref="deadline"
       value={this.state.deadline}
       onChange={this.handleDeadlineChange}
       pattern='(\d{2})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2})'
       type="text"
       placeholder={this.props.data.deadline}/>
     </p>

     <p>
       <select id='task_priority'
       ref="priority"
       value={this.state.priority}
       onChange={this.handlePriorityChange}>
          <option disabled>Select priority</option>
          <option value='low'>low</option>
          <option value='middle'>middle</option>
          <option value='high'>high</option>
        </select>
      </p>
  
    <input type="submit" value="Submit" />
  </form>
  );
 }
});