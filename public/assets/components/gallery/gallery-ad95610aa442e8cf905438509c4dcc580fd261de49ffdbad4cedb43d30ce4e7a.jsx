var Gallery = React.createClass({
  render: function() {
    return (
    <div id="gallery">
      <h1>Our team at work</h1>
      <div className="box">
        <div className="innerContent">
          <img src="/assets/image5.jpeg"  alt="Task"/>
          <div className="titleBox">20/10/2015</div>
        </div>
      </div>
      <div className="box">
        <div className="innerContent">
          <span className='center'></span><img src="/assets/image6.jpg"  alt="Task"/>
          <div className="titleBox">25/10/2015</div>
        </div>
      </div>
      <div className="box">
        <div className="innerContent">
          <img src="/assets/image7.jpg"  alt="Task"/>
          <div className="titleBox">01/11/2015</div>
        </div>
      </div>
      <div className="box">
        <div className="innerContent">
          <img src="/assets/image8.jpg"  alt="Task"/>
          <div className="titleBox">05/11/2015</div>
        </div>
      </div>
      <div className="box">
        <div className="innerContent">
          <img src="/assets/image9.jpg"  alt="Task"/>
          <div className="titleBox">10/11/2015</div>
        </div>
      </div>
      <div className="box">
        <div className="innerContent">
          <img src="/assets/image10.jpg"  alt="Task"/>
          <div className="titleBox">20/112015</div>
        </div>
      </div>
    </div>
    );
   }
});