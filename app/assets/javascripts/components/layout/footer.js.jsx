var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className ="col-50">
          <h3>Join our mailing list</h3>
          <p>Subscribe to get our weekly newsletter delivered directly to your inbox</p>
          <input placeholder="Enter your email" type="text"></input>
          <input type="submit" value="subscribe"></input>
        </div>
        <div className ="col-50">
          <h3>Contact Us</h3>
          <p>Dragomanova Street,1</p>
          <p>Kyiv, Ukraine</p>
          <p><a href='mailto:task_management@gmail.com'>task_management@gmail.com</a></p>
        </div>
      </footer>
    );
  }
});