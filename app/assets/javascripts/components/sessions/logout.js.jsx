// var Logout = React.createClass({
//   mixins: [ReactRouter.Navigation],

//   handleSubmit: function(e) {
//     e.preventDefault();
//     $.ajax({
//     method: 'DELETE',
//     url: '/logout',
//     dataType: 'JSON',
//     success: function(){
//       this.transitionTo('/');
//       }.bind(this),
//     error: function(response) {
//       console.error(response);
//     }.bind(this),
//    });
//   },

//    render: function() {
//      return (
//       <li><Link to="/" ref="destroy" onSubmit={this.handleSubmit}>
//         <span className="glyphicon glyphicon-log-in"></span> Logout</Link>
//       </li>
//     );
//    }
//   });
// var LogoutForm = React.createClass({
//   render: function() {
//     return (
//       <form ref="form"
//         className='form'
//         action={ this.props.action }
//         method='post'
//         onSubmit={this.handleSubmit}>
//         <input
//           type="hidden"
//           name={ this.props.csrf_param }
//           value={ this.props.csrf_token } />
//         <input type='submit'/>Log out
//       </form>
//     );
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var formData = $( this.refs.getDOMNode() ).serialize();
//     this.props.onLogoutSubmit( formData, this.props.action );
//   }
// });