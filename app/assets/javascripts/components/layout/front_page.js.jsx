var FrontPage = React.createClass({
  render: function() {
    return (
    <div>
      <Carousel />
      <div className = 'main-page-container'>
        <h1>Welcome to Task Management App!</h1>
          <p>Taks Management App is the best tool for planning your time. 
             Hundreds of teams choose our app to capture and organize issues, 
             assign work, and follow team activity. 
             At your desk or on the go with the new mobile interface, 
             the app helps your team get the job done.
          </p>
      </div>
    </div>
    );
   }
});