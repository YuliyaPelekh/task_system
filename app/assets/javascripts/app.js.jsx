// // main React component
var App = React.createClass({
  
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCurrentUserFromServer();
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadCurrentUserFromServer(nextProps);
  },

  loadCurrentUserFromServer: function(props) {
    props = props || this.props;
    $.ajax({
      url: 'current_user.json',
      type: 'GET',
      dataType: 'json',
      success: function(result) {
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('current_user.json', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
    <div>
      <Navbar data={this.state.data}/>
        <div className='col-20 left'>
 	        <LeftMenu/>
        </div>
 	      <div className='col-80 right'>
          <main>
            <ReactRouter.RouteHandler/>
          </main>
          <Footer/>
        </div>
    </div>
    );
  }
});

