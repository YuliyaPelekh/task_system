var Contacts = React.createClass({
  render: function() {
    return (
    <div id='contacts'>
      <div className='col-60' id='maps'>
        <img src="http://maps.google.com/maps/api/staticmap?&size=600x600&zoom=14&maptype=roadmap&sensor=true&markers=Kyiv,Ukraine,Dragomanova,1" alt="Map of our location"/>
      </div>
      <div className='col-40' id='address'>
        <h3>Contact us and we will get back to you within 24 hours.</h3>
        <p><span className='glyphicon glyphicon-map-marker'></span> Dragomanova Street,1 Kyiv</p>
        <p><span className='glyphicon glyphicon-envelope'></span> <a href='mailto:task_management@gmail.com'>task_management@gmail.com</a></p>
        <p><span className='glyphicon glyphicon-phone'></span>+38 097 888 444 55</p>
        <h3>Leave your comment</h3>
        <form>
          <p><input type='text' name='name' placeholder='Name'/></p>
          <p><input type='email' name='email' placeholder='Email'/></p>
          <p><textarea rows="5" cols="25" name="text" placeholder='Your comment'></textarea></p>
          <p><input type='submit' value='Send'/></p>
        </form>
      </div>
    </div>
    );
   }
});