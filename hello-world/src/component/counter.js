import React, {Component} from "react";

class Timer extends Component {

    constructor(){

        super()

        this.state = {
            count : 0
        }
    }
    
    increment () {
        this.setState((prevState)=>({
            count : prevState.count + 1
        }))
    }
    decrement () {
        this.setState((preState)=>({
            count : preState.count - 1
        }))
    }

    increment1(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
                <h1>Timer : {this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.increment1()}>Increment 5times</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
            </div>
        )
    }
}
export default Timer;