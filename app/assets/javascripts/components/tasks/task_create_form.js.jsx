var TaskCreateForm = React.createClass({

  getInitialState: function() {
    return {user_id: '', name: '', deadline: '', priority: ''};
  },

  handleUserIdChange: function(e) {
    this.setState({user_id: e.target.value});
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
    var user_id = this.state.user_id.trim();
    var name = this.state.name.trim();
    var deadline = this.state.deadline.trim();
    var priority = this.state.priority.trim();
    this.props.onTaskSubmit({user_id: user_id, name: name, deadline: deadline, priority: priority});
    this.setState({user_id: '', name: '', deadline: '', priority: ''});
  },

  render: function() {
    var users = this.props.data;
    var myArr = Array.prototype.slice.call(users, 0);

    var options = myArr.map(function(user) {
      return ( 
        <option key={user.id} value={user.id}>{user.name}</option>
      );
    });

   return (
    <form onSubmit={this.handleSubmit}>

     <select id='task_user'
       ref="user_id"
       value={this.state.user_id}
       onChange={this.handleUserIdChange}>
          <option disabled>Select user</option>
          {options}
     </select>

     <p>
       <input id="task_name" 
       ref="name"
       value={this.state.name}
       onChange={this.handleNameChange}
       type="text"
       required
       placeholder="Enter task desription"/>
     </p>

     <p>
       <input id='task_deadline'
       ref="deadline"
       value={this.state.deadline}
       onChange={this.handleDeadlineChange}
       type="text"
       required
       placeholder='Enter task deadline'/>
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