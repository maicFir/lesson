import React,{Component} from "react";
import ReactDOM from "react-dom";


class Computer extends Component {
  constructor(props){
     super(props)
     this.state = {
        status: "off",
        flag:false,
        showContent:'无内容'
     }
  }
  swicthBar(){
    let state = this.state;
     this.setState({
        flag:!state.flag
     });
     if(state.flag){
        this.setState({
          status:"on"
        })
     }else{
        this.setState({
            status:"off"
        })
     }

     if(state.status == "on"){
          state.showContent = "显示器亮了";
      }else if(state.status == "off"){
        state.showContent = "显示器关了";
      }else{
        state.showContent = "无内容"
    }

  }
  render () {
    let state = this.state;
    
    return (
      <div>
        <button onClick={this.swicthBar.bind(this)}>{state.showContent}</button>
        <Screen showContent={state.showContent}/>
      </div>
    )
  }
}

class Screen extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div className='screen'>
          {this.props.showContent}
      </div>
    )
  }
}

export default Computer