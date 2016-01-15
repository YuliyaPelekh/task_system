var SearchBox = React.createClass({
    doSearch:function(){
      var query=this.refs.searchInput.value;
      this.props.doSearch(query);
    },

    render:function(){
      return <input type="text" ref="searchInput" placeholder="Search user's name" 
              value={this.props.query} onChange={this.doSearch}/>
    }
});
