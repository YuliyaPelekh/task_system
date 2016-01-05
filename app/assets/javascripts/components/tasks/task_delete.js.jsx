var DeleteTask = React.createClass({
  mixins: [ReactRouter.Navigation],


 handleTaskRemoveSubmit: function() {
    var id = this.props.data.id;
    $.ajax({
      url: 'tasks/' + id +'.json',
      type: "DELETE",
      dataType: "json",
      success: function() {
        this.setState({ data: null });
        this.transitionTo('new_task');
      }.bind(this),
      error: function(err) {
        console.error(err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return(
      <form onSubmit={this.handleTaskRemoveSubmit}>
        <input className='delete-button' type='submit' value='Delete'/>
      </form>
    )
  }
});