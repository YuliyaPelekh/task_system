var DeleteTask = React.createClass({
  mixins: [ReactRouter.Navigation],

 handleTaskRemoveSubmit: function() {
    id = this.props.id
    $.ajax({
      url: 'tasks/' + id +'.json',
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        this.setState({ data: null });
        this.transitionTo('new_task')
      }.bind(this),
      error: function(err) {
        console.error(err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return(
      <form onSubmit={this.handleTaskRemoveSubmit}>
        <input type='submit' value='Delete'/>
      </form>
    )
  }
});