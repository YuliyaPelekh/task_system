var Login = React.createClass({
  mixins: [ReactRouter.Navigation],

  handleUserSubmit: function(session, user) {
   $.ajax({
      url: 'login.json',
      dataType: 'json',
      type: 'POST',
      data: {session: session, user: user},
      success: function(data) {
        this.setState({data: data});
        this.transitionTo("users");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('login.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='form-wrapper'>
        <h1>Please login</h1>
        <LoginForm onUserSubmit={this.handleUserSubmit} />
      </div>
    );
  }
});