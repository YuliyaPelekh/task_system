var TaskPercentForm = React.createClass({

  getInitialState: function() {
    return {percent: '0'};
  },

  handlePercentChange: function(e) {
    this.setState({percent: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var percent = this.state.percent.trim();
    this.props.onTaskSubmit({percent: percent});
    this.setState({percent: '0'});
  },

  render: function() {

   return (
    <form onSubmit={this.handleSubmit}>

     <p>
       <select id='task_percent'
        ref="percent" value={this.state.percent}
          onChange={this.handlePercentChange}>
          <option disabled>Select percent </option>
          <option value='10'>10%</option>
          <option value='20'>20%</option>
          <option value='30'>30%</option>
          <option value='40'>40%</option>
          <option value='50'>50%</option>
          <option value='60'>80%</option>
          <option value='70'>70%</option>
          <option value='80'>80%</option>
          <option value='90'>90%</option>
          <option value='100'>100%</option>
        </select>
     </p>
  
    <input type="submit" value="Submit" />
  </form>
  );
 }
});