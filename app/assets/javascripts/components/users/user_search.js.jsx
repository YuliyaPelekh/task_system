var InstantBox = React.createClass({
  doSearch:function(queryText){
    console.log(queryText)
    var queryResult=[];
    this.props.data.forEach(function(person){
      if(person.name.toLowerCase().indexOf(queryText)!=-1)
        queryResult.push(person);
      });
 
      this.setState({
        query:queryText,
        filteredData: queryResult
      })
    },

    getInitialState:function(){
      return{
        query:'',
        filteredData: this.props.data
      }
    },

    render:function(){
      var finalTable;
      if (this.state.query == ''){
        finalTable = <DisplayTable data={this.props.data}/>
       }
      else {
        finalTable = <DisplayTable data={this.state.filteredData}/>
      }

      return (
         <div className="instant-box">
           <div>
              <h1 className='col-20'>All users tasks</h1>
              <div className='col-60'>
                <SearchBox query={this.state.query} doSearch={this.doSearch}/>
              </div>
              <Link to='new_task' className='create-button col-20'>
               Create new task </Link>
            </div>
                {finalTable}
           </div>
        );
    }
});



