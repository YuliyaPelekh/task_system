var TaskCreateForm = React.createClass({

  getInitialState: function() {
    return {user_id: '', name: '', deadline: '', priority: '', percent: '0'};
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

  validateDeadline: function() {
    var message, x, re;
    message = document.getElementById("errorMessage");
    message.innerHTML = "";
    x = document.getElementById("task_deadline").value;
    re = /(\d{2})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2})/;
    try { 
      if(re.test(x) == false)  throw "Deadline format is incorrect";
    }
    catch(err) {
      message.innerHTML = err;
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var user_id = this.state.user_id.trim();
    var name = this.state.name.trim();
    var deadline = this.state.deadline.trim();
    var priority = this.state.priority.trim();
    var percent = this.state.percent.trim();
    this.props.onTaskSubmit({user_id: user_id, name: name, deadline: deadline, priority: priority, percent: percent});
    this.setState({user_id: '', name: '', deadline: '', priority: '', percent: '0'});
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
      <p id='errorMessage'></p> 
     <select id='task_user'
       ref="user_id"
       required
       value={this.state.user_id}
       onChange={this.handleUserIdChange}>
          <option disabled>Select user</option>
          {options}
     </select>

     <p>
      <label for='task_name'>Description</label><br/>
       <input id="task_name" 
       ref="name"
       value={this.state.name}
       onChange={this.handleNameChange}
       type="text"
       required
       pattern='(\w|\s){5,}'
       placeholder="Minimum 5 characters"/>
     </p>

     <p>
      <label for='task_deadline'>Deadline</label><br/>
       <input id='task_deadline'
       ref="deadline"
       value={this.state.deadline}
       pattern='(\d{2})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2})'
       onChange={this.handleDeadlineChange}
       type="text"
       required
       placeholder='Format 01.01.00 00:00'/>
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
  
    <input type="submit" value="Submit" id='submitButton' onClick={this.validateDeadline} />
  </form>
  );
 }
});