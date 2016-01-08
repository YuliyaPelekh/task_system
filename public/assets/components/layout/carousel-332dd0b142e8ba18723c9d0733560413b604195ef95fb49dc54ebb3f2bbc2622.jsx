var Carousel = React.createClass({
  render: function() {
    return (
      <div className="carousel slide" data-ride="carousel" id="myCarousel">
        <ol className="carousel-indicators" data-target="#myCarousel">
          <li className="active" data-slide-to="0" ></li>
          <li data-slide-to="1" ></li>
          <li data-slide-to="2" ></li>
          <li data-slide-to="3" ></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img alt="Planning tasks" src="/assets/image1.jpeg" height='200px' width='1200px'/>
          </div>
          <div className="item">
            <img alt="Planning tasks" src="/assets/image2.jpg" height='200px' width='1200px'/>
          </div>
          <div className="item">
            <img alt="Planning tasks" src="/assets/image3.jpg" height='200px' width='1200px'/>
          </div>
          <div className="item">
            <img alt="Planning tasks" src="/assets/image4.jpg" height='200px' width='1200px'/>
          </div>
        </div>
        <a className="left carousel-control" data-slide="prev" href="#myCarousel" role="button">
          <span aria-hidden="true" className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" data-slide="next" href="#myCarousel" role="button">
          <span aria-hidden="true" className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
});