var LeftMenu = React.createClass({
  render: function() {
    return (
    <div className='left-menu'>
      <input type="text" id='searchinput' placeholder="Search for.."/>
        <button id='searchfor'>
          <span className="glyphicon glyphicon-search"></span>
        </button>    
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="users">All tasks</Link></li>
          <li><Link to="new_task">Create task</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
        <h3>Your Tasks</h3>
        <ul>
          <li className='submenu-item'><a href="#">Task 1
            <span className="caret"></span></a>
              <ul className="submenu">
                <li><a href="#">Task 1-1</a></li>
                <li><a href="#">Task 1-2</a></li>
                <li><a href="#">Task 1-3</a></li>
              </ul>
          </li>
          <li className='submenu-item'><a href="#">Task 2
            <span className="caret"></span></a>
              <ul className="submenu">
                <li><a href="#">Task 2-1</a></li>
                <li><a href="#">Task 2-2</a></li>
                <li><a href="#">Task 2-3</a></li>
              </ul>
            </li>
            <li className='submenu-item'><a href="#">Task 3
            <span className="caret"></span></a>
              <ul className="submenu">
                <li><a href="#">Task 3-1</a></li>
                <li><a href="#">Task 3-2</a></li>
                <li><a href="#">Task 3-3</a></li>
              </ul>
            </li>
          </ul>
      </nav>
    </div>
   );
  }
});