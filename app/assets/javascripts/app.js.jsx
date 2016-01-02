// // main React component
var App = React.createClass({
  render: function () {
    return (
    <div>
      <Navbar/>
        <div className='col-20'>
 	        <LeftMenu/>
        </div>
 	      <div className='col-80'>
          <main>
            <ReactRouter.RouteHandler/>
          </main>
          <Footer/>
        </div>
    </div>
    );
  }
});

