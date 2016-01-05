var Users = React.createClass({
   
  getInitialState: function() {
    return {data: []};
  },

  loadUsersFromServer: function() {
    $.ajax({
      url: 'users.json',
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('users.json', status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadUsersFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
      this.loadUsersFromServer(nextProps);
    },

  render: function() {
    return (
      <div>
        <InstantBox data={this.state.data}/>
      </div>
    );
  }
});