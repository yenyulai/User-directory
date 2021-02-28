class FilteredList extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        data:[],
        search:''
      }
    }
    componentDidMount(){
      this.setState({
         data:[
           "Apples",
           "Broccoli",
           "Chicken",
           "Duck",
           "Eggs",
           "Fish",
           "Granola",
           "Hash Browns"
         ],
        search:''
      }
      )
    }
    updateSearch(){
      this.setState({
        data:this.state.data,
        search:event.target.value
      })
    }
    filterList(){
      let updatedList = this.state.data.filter((item)=>{
        return item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      })
      let data = updatedList.map((item,index,array)=>{
        return <li className="list-group-item" data-category={item} key={index}>{item}</li>
      })
      return data
    }
    render(){
      return(
        <div>
          <fieldset className="form-group">
          <input className="form-control form-control-lg" placeholder="Search" onChange={()=>this.updateSearch()} value={this.state.search} type="text"/>
          </fieldset>
          <ul className="list-group">
            {this.filterList()}
          </ul>
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<FilteredList/>, document.getElementById('app'));