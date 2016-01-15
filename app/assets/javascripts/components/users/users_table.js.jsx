//displays all users depending on data received from InstantBox
var DisplayTable = React.createClass({

  render: function() {
    var users = this.props.data.map(function(user) {
      return ( 
      <div id='users'>
        <h2><span className='userName'>{user.name}</span>
          <span className='glyphicon glyphicon-envelope'></span>
           <a href='mailto: {user.email}'>{user.email}</a>
        </h2>   
       <UserShow id={user.id}/>
      </div>  
      );
    });

    return (
      <div className='users-wrapper'>
          {users}
      </div>
    )
  }
});