//form for registration of new users
var UserForm = React.createClass({
  getInitialState: function() {
    return {name: '', email: '', password: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    this.props.onUserSubmit({name: name, email: email, password: password});
    this.setState({name: '', email: '', password: ''});
  },
  render: function() {
   return (
    <form onSubmit={this.handleSubmit}>

      <p>
       <input id='name'
       ref="name"
       value={this.state.name}
       onChange={this.handleNameChange}
       type="text"
       required
       placeholder="Enter your name"/>
     </p>

     <p>
       <input id="email" 
       ref="email"
       value={this.state.email}
       onChange={this.handleEmailChange}
       type="email"
       required
       placeholder="Enter your email"/>
     </p>

     <p>
       <input id='password'
       ref="password"
       value={this.state.password}
       onChange={this.handlePasswordChange}
       type="password"
       required
       autoComplete="off"
       placeholder="Password"/>
     </p>

    <input type="submit" value="Submit" />

  </form>
  );
 }
});