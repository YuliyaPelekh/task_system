var FrontPage = React.createClass({
  render: function() {
    return (
    <div>
      <Carousel />
      <div className = 'jumbotron'>
        <Link to='contacts'><h2>Task App</h2></Link>
        <Link to="contacts">Contacts</Link>
      </div>
    </div>
    );
   }
});