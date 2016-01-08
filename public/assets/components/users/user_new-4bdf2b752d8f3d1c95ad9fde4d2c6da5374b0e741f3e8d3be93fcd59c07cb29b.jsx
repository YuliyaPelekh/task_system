var NewUser = React.createClass({
  mixins: [ReactRouter.Navigation],

  handleUserSubmit: function(user) {
   $.ajax({
      url: 'users.json',
      dataType: 'json',
      type: 'POST',
      data: {user: user},
      success: function(data) {
        this.setState({data: data});
        this.transitionTo("/");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('users.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className='form-wrapper'>
        <h1>Please register</h1>
        <UserForm onUserSubmit={this.handleUserSubmit} />
      </div>
    );
  }
});