import { Component } from "react";

class App extends Component{
    state={
        count: 0


    };
    onIncre=()=>{
        this.setState({
            count:this.state.count + 1

        })
    }
    onDecre=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }
render(){
  return (
    <div >
        <div className='btncount'>
    <button className='btn'  onClick={this.onIncre}>+</button>
    <button className='btn' onClick={this.onDecre}>-</button>  
    <h2 className='counting'>{this.state.count}</h2>
    </div>
    
    </div>
  )
}
}

export default App