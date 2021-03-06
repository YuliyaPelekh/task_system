var LoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    this.props.onUserSubmit({email: email, password: password});
    this.setState({email: '', password: ''});
  },
  render: function() {
   return (
    <form onSubmit={this.handleSubmit}>

     <p>
       <input ref="email"
       value={this.state.email}
       onChange={this.handleEmailChange}
       type="email"
       autoComplete="off"
       required
       placeholder="Enter your email"/>
     </p>

     <p>
       <input ref="password"
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